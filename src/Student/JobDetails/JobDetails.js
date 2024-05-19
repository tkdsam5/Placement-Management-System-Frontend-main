import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useUserContext } from "./../../Context/UserContext";
import "./JobDetails.css"
const JobDetails = () => {

    
  const { user} = useUserContext();
    const { job } = useUserContext();
    const [studentId, setStudentId] = useState(null);
    const [jobd, setJobd] = useState("");
    useEffect(() => {
      const fetchStudent = async () => {
       
         
        try {
          const response = await axios.get(`http://localhost:3001/Students/${user.userEmail}`); 
          setStudentId(response.data.rollNo);
          
        
        } catch (error) {
        console.log(error)
        }
      };

      const fetchJob = async () => {
       
         
        try {
          const response = await axios.get(`http://localhost:3001/Students/jobs/${job.jobId}`); 
          
          setJobd(response.data);
          console.log(jobd)
        
        } catch (error) {
        console.log(error)
        }
      }; 
       fetchJob();
     
      fetchStudent();
    }, [user.userEmail]);
    const handleClick = async()=>{
      const jobId=job.jobId;
      try {
        const response = await axios.post(`http://localhost:3001/Students/apply`,{jobId,studentId}); 
        console.log(response);
        
      
      } catch (error) {
      console.log(error)
      }

    }
  return (
    <div>
      <img  className='stud-pic11'  height={132} width={132} src= { `http://localhost:3001/Uploads/${jobd.pic}`} alt='' />
     <p> Job Id : {job.jobId}</p>
    <p>
      Title : {jobd.title}</p>
      <p>Description : {jobd.description}</p>
      <p>CompanyName : {jobd.companyName}</p>
      <p>Company Details:  {jobd.companyDesc}</p>
      <p> Apply Link: <a className="a1" href={`${jobd.applyLink}`}> Apply here</a></p>
      <p> Job Description File: <a className="a2" href={`http://localhost:3001/Uploads/${jobd.jdFile}`}>Job Description.pdf</a></p>
      <div className="btn">
        <button onClick={handleClick} className="app-btn">
            Apply 
        </button>
      </div>
    </div>
  )
}

export default JobDetails
