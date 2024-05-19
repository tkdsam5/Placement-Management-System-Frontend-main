import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ViewProfile.css'; // Import CSS file for styling
import { useUserContext } from "./../../Context/UserContext";
import { Link } from 'react-router-dom';
function ViewProfile() {
  const [studentDetails, setStudentDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const { user } = useUserContext();
  const { update } = useUserContext();
  

  useEffect(() => {
    const fetchStudentDetails = async () => {
        await axios.get(`http://localhost:3001/Students/${user.userEmail}`
        ).then(res=>{
          setStudentDetails(res.data);
          console.log(res.data);
          setLoading(false);
      
        
          })
          .catch(e=>{
            console.log(e)
          }
          )
    };

    fetchStudentDetails();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  
  const Update=(id )=>{
    return()=>{
     update(id);
     }
  }

  return (
    <div className="student-profile">
    <h1>Student Profile</h1>
    <div className="f1">
    <div className="vp-img1">
    <img  className='stud-pic11'  height={132} width={132} src= { `http://localhost:3001/Uploads/${studentDetails.photo}`} alt='' />
    </div>
    <div className="f2">
    <h3>Name : {studentDetails.name}</h3>
    <p>Batch: {studentDetails.batch}</p>
    <p>Email: {studentDetails.email}</p>
    <p>Roll No: {studentDetails.rollNo}</p>
    <p>Department: {studentDetails.stream}</p>
    <p>contact No: {studentDetails.contactNo}</p>
    <p>Status: {studentDetails.status}</p>
    <p> Updated Resume: <a className="a1" href={`http://localhost:3001/Uploads/${studentDetails.resumeFile}`}>Resume.pdf</a></p>
    <p> Updated Marksheets: <a className="a1" href={`http://localhost:3001/Uploads/${studentDetails.marksheetFile}`}>Marksheet.pdf</a></p>
    </div>
    
    </div>
    <div className="btn-f">
    <button onClick={Update(studentDetails._id)} className="upd"><Link to='/Common/UpdateProfile'>Update</Link></button>
    </div>
 
  </div>
      
    
  );
}

export default ViewProfile;
