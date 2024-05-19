import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUserContext } from '../../Context/UserContext';
import "./InterviewExp.css"
function InterviewExp() {
    const {user} = useUserContext();
  const [interviews, setInterviews] = useState([]);
  const [students, setStudents] = useState([]);
  const [companyName, setCompanyName] = useState('');
  const [role, setRole] = useState('');
  const [interviewDate, setInterviewDate] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [description, setDescription] = useState('');
  const [result, setResult] = useState('');
  const [salary, setSalary] = useState('');
  const [student, setStudent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    

    const fetchStudents = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/Students/${user.userEmail}`); 
        setStudents(response.data);
        console.log(students.name);
        setStudent(students.name);

      } catch (error) {
        setError('Error fetching student details');
      }
    };

    const fetchInterviews = async () => {
        try {
          const response = await axios.get('http://localhost:3001/Students/interview-experiences/all'); 
          setInterviews(response.data);
          setLoading(false);
        } catch (error) {
          setError('Error fetching interview experiences');
          setLoading(false);
        }
      };
  

   
    fetchStudents();
    fetchInterviews();
  }, []);
  const newInterview = {
    companyName,
    role,
    interviewDate,
    difficulty,
    description,
    result,
    salary,
    student,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    

   
    

    try {
      const response = await axios.post('http://localhost:3001/Students/interview-experiences', newInterview); 
     
      console.log(response.data);
      setCompanyName('');
      setRole('');
      setInterviewDate('');
      setDifficulty('');
      setDescription('');
      setResult('');
      setSalary('');
      setStudent('');
    } catch (error) {
        console.log(newInterview);
      setError('Error posting interview experience');
    }
  };



  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className='intexp-main'>
      <div className='intexp-post'>
      <h1 className='int-h11'>Post an Interview Experience</h1>
      
      <form className="int-form" onSubmit={handleSubmit}>
        <div>
        <div>
          <label htmlFor="companyName">Company Name:</label>
          <input
            type="text"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="role">Role:</label>
          <input
            type="text"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="interviewDate">Interview Date:</label>
          <input
            type="date"
            id="interviewDate"
            value={interviewDate}
            onChange={(e) => setInterviewDate(e.target.value)}
          />
        </div>
        </div>
        <div>
        <div>
          <label htmlFor="difficulty">Difficulty:</label>
          <input
            type="text"
            id="difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          />
          <div>
          <label htmlFor="difficulty">Description:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          </div>
          </div>
          <div>
          <label htmlFor="difficulty">Result:</label>
          <input
            type="text"
            id="result"
            value={result}
            onChange={(e) => setResult(e.target.value)}
          />
          </div>
          <div>
          <label htmlFor="difficulty">Salary:</label>
          <input
            type="number"
            id="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
          </div>
          </div>
          <button className="btn-ann" type="submit">Post </button>
          </form>
         
          
          </div>
           <div className='intexp-det'>
           <h1 className='int-h1'>Interview Experiences</h1>
           {interviews.length === 0 ? (
             <p>No interview experiences found.</p>
           ) : (
             <ul>
               {interviews.map((interview) => (
                 <li className="int-li" key={interview.id}>
                   <h3>{interview.companyName}</h3>
                   <div className='int-dd'> 
                   <p>Role: {interview.role}</p>
                   <p>Date: {interview.interviewDate.substring(0,10)}</p>
                   <p>Difficulty: {interview.difficulty}</p>
                   </div>

                   <p>Description: {interview.description}</p>
                   <div>
                   <p>Result: {interview.result}</p>
                   <p>Salary: {interview.salary}</p>
                   <p>Student Name: {interview.student}</p>
                   </div>
                 </li>
               ))}
             </ul>
           )}
         </div>
         </div>
  )}
export default InterviewExp
