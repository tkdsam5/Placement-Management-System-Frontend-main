import {React,useState,useEffect} from 'react'
import "./SHome.css"
import { useUserContext } from "./../../Context/UserContext";
import axios from 'axios';
import AppJobs from '../AppJobs/AppJobs'
const SHome = () => {
  const { user } = useUserContext();
  const [student,setStudent] = useState();
 const [loading, setLoading] = useState(true);

  const getDetails =async()=>{
   
   await axios.get(`http://localhost:3001/Students/${user.userEmail}`
  ).then(res=>{
    setStudent(res.data);
    console.log(res.data);
    setLoading(false);

  
    })
    .catch(e=>{
      console.log(e)
    }
    )
  };
  
  useEffect(()=>{
    
  getDetails();
 
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[]);


if (loading) {
  return <p>Loading...</p>;
}

  return (
    <div className='main-container'>
      <div className="welcome1">
        <div className='stud-pic'>
        <img  className='stud-pic1'  height={105} width={105} src= { `http://localhost:3001/Uploads/${student.photo}`} alt='' />
        </div>
       <div className='welcome-text1'> 
       <div className="wtext1">Welcome Back!</div>
       <div className="wn1">{student.name}</div>
       </div>
       </div>
       <AppJobs rollNo={student.rollNo}/>
      
    </div>
  )
}

export default SHome
