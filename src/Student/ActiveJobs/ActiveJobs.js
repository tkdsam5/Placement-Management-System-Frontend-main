import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./ActiveJobs.css"
import { useUserContext } from "./../../Context/UserContext";
const ActiveJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [locations, setLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedSalary, setSelectedSalary] = useState('');
    const { apply } = useUserContext();
  
    useEffect(() => {
      const fetchJobs = async () => {
        try {
          const response = await axios.get('http://localhost:3001/Students/jobs/all'); 
          const currentDate = new Date();
        const activeJobs = response.data.filter(job => new Date(job.LastDate) >= currentDate);
          setJobs(activeJobs);
          console.log(activeJobs)
          setFilteredJobs(activeJobs);
          const uniqueLocations = [...new Set(activeJobs.map((job) => job.location))];
          setLocations(uniqueLocations);
        } catch (error) {
          console.error('Error fetching jobs:', error);
        }
      };
  
      fetchJobs();
    }, []);
  
   
  
    const handleLocationChange = (event) => {
      setSelectedLocation(event.target.value);
    };
  
    const handleSalaryChange = (event) => {
      setSelectedSalary(event.target.value);
    };
    
  
 
    const filterJobs = () => {
      let filtered = [...jobs];
  
      if (selectedLocation) {
        filtered = filtered.filter((job) => job.location === selectedLocation);
      }
  
      if (selectedSalary) {
        filtered = filtered.filter((job) => job.salary >= selectedSalary);
      }
  
    return filtered;
    };
    const filtered = filterJobs();

    const Apply=(id )=>{
      return()=>{
       apply(id);
       }
    }
   
    return (
      <div className='actj-main'>
        <h1 className='h1a'>Jobs List</h1>
        <div className="jFilters">
        <div>
          <label htmlFor="locationFilter">Filter by Location:</label>
          <select id="locationFilter" value={selectedLocation} onChange={handleLocationChange}>
            <option value="">All Locations</option>
            {locations.map((location) => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>
  
        <div>
          <label htmlFor="salaryFilter">Filter by Salary:</label>
          <select id="salaryFilter" value={selectedSalary} onChange={handleSalaryChange}>
            <option value="">All Salaries</option>
            <option value="4">4 LPA+</option>
            <option value="7">7 LPA+</option>
            <option value="10">10 LPA+</option>
          </select>
        </div>
        </div>
  
        <ul className='actj-outer'>
          {filtered.map((job) => (
            <li className='actj-inner' key={job.jobId}>
              <h2 className='h2a'>Title :{job.title}</h2>
              <div className="actj1">
              <p className='actj-p'>Company Name: {job.companyName}</p>
              <p className='actj-p'>Location: {job.location}</p>
              <p className='actj-p'>Job Id: {job.jobId}</p>
              </div>
              <div className="actj1">
              <p className='actj-p'>Salary: {job.salary}</p>
              <p className='actj-p1'>Last Date: {job.LastDate.substring(0,10)}</p>
              <button onClick={Apply(job.jobId)} className="vjob"><Link to="/Common/JobDetails">
              View</Link>
              
              </button>
              </div>
              
        
       
            </li>
          ))}
        </ul>
        
      
      </div>
    );
  
}

export default ActiveJobs
