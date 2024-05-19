
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./AppJobs.css"
const AppJobs = (props) => {

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const rollNo =props.rollNo;
    useEffect(() => {
      const fetchAppliedJobs = async () => {
        console.log(rollNo)
        try {
          const response = await axios.get(`http://localhost:3001/Students/apply/application/${rollNo}`); 
          setAppliedJobs(response.data);
          console.log(response.data);
          setLoading(false);
        } catch (err) {
          setError('Error fetching applied jobs');
          console.log(error);
          setLoading(false);
        }
      };
  
      fetchAppliedJobs();
    }, []);
  
    if (loading) {
      return <p>Loading...</p>;
    }
 
  
    return (
      <div className='appjob-main'>
        <h1 className='h11'>Applied Drives</h1>
        <div className="appjob-outercontainer">
        

        {appliedJobs.map((jobs) => (
        <div className='appjob-container' key={jobs.application._id}>
         <div className="cimg"><img height={105} width={105} src={`http://localhost:3001/Uploads/${jobs.job[0].pic}`} alt="" /></div> 
          <div className="cdetails">
          <p>Company: {jobs.job[0].companyName}</p>
          <p>Title: {jobs.job[0].title}</p>
          <p>Salary(in LPA): {jobs.job[0].salary}</p>
          <p>Status: {jobs.application.status}</p>
          </div>
        </div>
      ))}
      </div>
      </div>
    );
  
  
}

export default AppJobs
