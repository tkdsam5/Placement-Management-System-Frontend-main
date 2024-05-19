import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto'
import { ArcElement} from 'chart.js'
import {  LineController, LineElement, PointElement, LinearScale, Title,CategoryScale } from 'chart.js';


import {Pie,Bar} from 'react-chartjs-2'
import './AHome.css'
import { useAdminContext } from "../../Context/AdminContext";
const AHome = () => {
  Chart.register(ArcElement);
  Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);
  const { admin } = useAdminContext();
  const [students, setStudents] = useState([]);
  const [placedStudents, setPlacedStudents] = useState([]);
  const [unplacedStudents, setUnplacedStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [skillsCount, setSkillsCount] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/Students/`); 
        console.log(response);
        setStudents(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching student data');
        setLoading(false);
      }
    };
    // Count the number of placed and unplaced students
setPlacedStudents( students.filter((student) => student.status==="placed"));

  

    const skillsCountMap = new Map();
 placedStudents.forEach((student) => {
   student.skills.forEach((skill) => {
     const count = skillsCountMap.get(skill) || 0;
     skillsCountMap.set(skill, count + 1);
   });
 });
      // Convert the map to an array of objects for easier rendering
 const skillsCountArray = Array.from(skillsCountMap, ([skill, count]) => ({ skill, count }));

 setSkillsCount(skillsCountArray);

  // Count the number of students placed for each skill
 

   
  
     fetchStudents();
 
    }, [students]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
 
  const placedstudents=students.filter((student) => student.status==="placed");
  
  const unplacedstudents=students.filter((student) => student.status==="unplaced");
  const totalStudents = students.length;
  
 //pie chart
  const chartData = {
    labels: ['Placed Students', 'Unplaced Students'],
    datasets: [
      {
        data: [placedstudents.length, unplacedstudents.length],
        backgroundColor: ['#36A2EB', '#FF6384'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };



  return (
    <div className=' Ahome' >
      <div className="welcome">
        <div className="welcome-text">  Welcome Back</div>
        <div className='wela'>
          <div className="wel-name"> Admin</div>
          <div className="wel-email">{admin.adminEmail}</div> 
          </div>
      </div>

      <div className='ahome-stats'>
        <div className='ahome-numbers'>
        <div className="stats">
      <h1>Student Statistics</h1>
      <p>Total Students: {totalStudents}</p>
      <p>Placed Students: {placedstudents.length}</p>
      <p>Unplaced Students: {unplacedstudents.length}</p>
      </div>

      <div >
      <h1>Placed Students Skills Count : {skillsCount.length} </h1>
      <ul>
        {skillsCount.map((skill) => (
          <li key={skill.skill}>
            {skill.skill}: {skill.count}
          </li>
        ))}
      </ul>
    </div>
    </div>
      <Pie className='Pie' data={chartData} />
    
      
    </div>


    </div>
  )
}

export default AHome
