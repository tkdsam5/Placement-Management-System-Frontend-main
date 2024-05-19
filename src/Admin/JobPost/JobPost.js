import React,{useState} from 'react';
import {useNavigate} from "react-router-dom";
import "./JobPost.css";
import axios from 'axios';

const JobPost = () => {
    let navigate = useNavigate();

    const [JValue,setJValue]=useState({
  
      jobId:'',
      title:'',
      description:'',
      location:'',
      salary:'',
      companyName:'',
      companyDesc:'',
      applyLink:'',
      
  
      
  })
  const [date, setDate] = useState('');
  const [jdFile,setJdFile]=useState(null);
  const [pic,setPic]=useState(null);
  const handleSubmit=async(event)=>{
      event.preventDefault();
      const formData = new FormData();
      formData.append('jobId', JValue.jobId);
      formData.append('title', JValue.title);
      formData.append('description', JValue.description);
      formData.append('location', JValue.location);
      formData.append('salary', JValue.salary);
      formData.append('companyName', JValue.companyName);
      formData.append('companyDesc', JValue.companyDesc);
      formData.append('jdFile',jdFile);
      formData.append('applyLink', JValue.applyLink);
      formData.append('pic',pic);
      formData.append('LastDate', date);

       await axios.post(`http://localhost:3001/Admin/jobs`,formData,
       {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    }
    )
    .then(result=>{
         
          if(result.status===200){
              console.log(result);
              alert("Job Added Sucessfully")
          navigate('/Acommon/AHome');
         
          }
          else{
            console.log(result);
              console.log("ERROR LOGGED");
              alert("Unsuccessfull");
          }
      }
  )
  .catch((error) => {
      if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
  });
      };
       
  
   
   const handleChange = (event) => {
      setJValue({
        ...JValue,
        [event.target.id]: event.target.value
      });
    }
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setJdFile(file);
      };
      const handleFileChange1 = (event) => {
        const file1 = event.target.files[0];
        setPic(file1);
      };
     

      const handleDateChange = (e) => {
        console.log(e.target.value);
        setDate(e.target.value);
      };
    
  
  return (
    <>
    <div className="jpost-main">
    <div id="form" className="jpost">
        <form onSubmit={handleSubmit} >
            <h2 className="jpost-title">Post a new Job</h2>
            
            <div id="" className="jpost-fields">
               
                <div id="" className="jpost-inner">
                    <label htmlFor="jobId" className="text-sm">JobId: </label>
                    <input onChange={handleChange} type="text" name="" id="jobId"  value={JValue.jobId}
                        className=""/>
                </div>
                <div id="" className="jpost-inner">
                    <label htmlFor="title" className="text-sm"> Job Title: </label>
                    <input onChange={handleChange} type="text" name="" id="title"  value={JValue.title}
                        className=""/>
                </div>
                <div id="" className="jpost-inner">
                    <label htmlFor="description" className="text-sm">Description: </label>
                    <input onChange={handleChange} type="text" name="" id="description"  value={JValue.description}
                        className=""/>
                </div>
                <div id="" className="jpost-inner">
                    <label htmlFor="location" className="text-sm">Location: </label>
                    <input onChange={handleChange} type="text" name="" id="location"  value={JValue.location}
                        className=""/>
                </div>
                <div id="" className="jpost-inner">
                    <label htmlFor="salary" className="text-sm">Salary: </label>
                    <input onChange={handleChange} type="text" name="" id="salary"  value={JValue.salary}
                        className=""/>
                </div>
                <div id="" className="jpost-inner">
                    <label htmlFor="companyName" className="text-sm">Company Name: </label>
                    <input onChange={handleChange} type="text" name="" id="companyName"  value={JValue.companyName}
                        className=""/>
                </div>
                <div id="" className="jpost-inner">
                    <label htmlFor="companyDesc" className="text-sm">Company Description: </label>
                    <input onChange={handleChange} type="text" name="" id="companyDesc"  value={JValue.companyDesc}
                        className=""/>
                </div>

            
                <div id="" className="jpost-inner">
                    <label htmlFor="applyLink" className="text-sm">Apply Link: </label>
                    <input onChange={handleChange} type="text" name="" id="applyLink"  value={JValue.applyLink}
                        className=""/>
                </div>
                <div id="" className="jpost-inner">
                    <label htmlFor="LastDate" className="text-sm">Last Date: </label>
                    <input onChange={handleDateChange} type="date" name="" id="LastDate"  value={date}  pattern="\d{4}-\d{2}-\d{2}" required
                        className=""/>
                </div>
                <div id="" className="jpost-inner">
                    <label htmlFor="jdFile" className="text-sm">Job Description attachment: </label>
                    <input onChange={handleFileChange} type="file" name="" id="jdFile"  
                        className=""/>
                </div>
                <div id="" className="jpost-inner">
                    <label htmlFor="pic" className="text-sm">Company Logo: </label>
                    <input onChange={handleFileChange1} type="file" name="" id="pic"  
                        className=""/>
                </div>
            

                
            </div>

           
            <button type="submit" name="" id="save"
                className="postb">Post</button>
            
        </form>
    </div>
</div>
</>

  )
}

export default JobPost
