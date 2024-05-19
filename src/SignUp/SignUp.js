import "./SignUp.css";
import React, {useState} from "react"
import axios from "axios";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [batch, setBatch] = useState("");
  const [photo, setPhoto] = useState(null);
  const [resumeFile,setResumeFile] = useState(null);
  const [skills, setSkills] = useState([]);
  const [newskill, setNewskill] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [stream, setStream] = useState("");
  const [marksheetFile, setMarksheetFile] = useState(null);

  const handleAddSkills = () => {
    if (newskill.trim() !== '') {
      const skillsArray = newskill.split(',').map((skill) => skill.trim());
      setSkills([...skills, ...skillsArray]);
      setNewskill('');
    }
  };
  const handleFileChange1 = (event) => {
    const file1 = event.target.files[0];
    setPhoto(file1);
  };
  const handleFileChange2 = (event) => {
    const file2 = event.target.files[0];
    setResumeFile(file2);
  };
  const handleFileChange3 = (event) => {
    const file3 = event.target.files[0];
    setMarksheetFile(file3);
  };
  const newStudent = {
    name,
    email,
    password,
    rollNo,
    contactNo,
    batch,
    photo,
    resumeFile,
    skills,
    cgpa,
    stream,
    marksheetFile
  };
  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('password',password);
      formData.append('rollNo',rollNo);
      formData.append('contactNo', contactNo);
      formData.append('batch',batch);
      formData.append('photo', photo);
      formData.append('resumeFile',resumeFile);
      formData.append('skills', skills);
      formData.append('cgpa',cgpa);
      formData.append('stream',stream);
      formData.append('marksheetFile', marksheetFile);
      const response = await axios.post('http://localhost:3001/Students/signUp',formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    }) 
      if(response.status===201){
       alert("Account created successfully");
      }
      console.log(response.data);
      setName('');
      setEmail('');
      setPassword('');
      setRollNo('');
      setBatch('');
      setContactNo('');
      setPhoto(null);
      setSkills([]);
      setCgpa('');
      setStream('');
      setResumeFile(null);
      setMarksheetFile(null);

    } catch (error) {
        console.log(error);
        console.log(newStudent);
    
    }
 


     

    
  };
  return (
    <div className="login">
      <div className="login-child" />
      <b className="nsec">
        <span className="nsec-txt">
          <span>NS</span>
          <span className="e">E</span>
          <span>C</span>
        </span>
      </b>
      <b className="placement">
        <span className="nsec-txt">
          <span>placement</span>
          <span className="e">.</span>
        </span>
      </b>
    
     
      <b className="home"><a href="/">Home</a></b>
      <b className="contact">Contact</b>
      <div className="signup-item" >
       <div className="cont11">
       <img src="images/nsec-logo 1.png" alt="" />
       <div className="text2">
       Ready to take the next step in your career? </div>
       <div className="text2"> <span>Login to your account to</span>
    

      <span> start exploring </span>
      <div className="text2">job opportunities</div>
      </div>
       
       </div>
      <div className="signup-inner" >
      <div className="signup1">SignUp</div>
      <div className="please-enter-your">Please enter your credentials!</div>
      
      
      
      
      

      <form className="signup-form" onSubmit={handleSubmit}>
      <label className="form-label1">
        Name:
        <input
          className="form-input1"
          type="text"
          value={name}
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label className="form-label1">
        Email:
        <input
          className="form-input1"
          type="text"
          value={email}
          placeholder="EMAIL"
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <br />
      <label className="form-label1">
        Password:
        <input
          className="form-input1"
          type="text"
          value={password}
          placeholder="PASSWORD"
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <label className="form-label1">
        University Roll Number:
        <input
          className="form-input1"
          type="text"
          value={rollNo}
          placeholder="University Roll Number"
          onChange={(event) => setRollNo(event.target.value)}
        />
      </label>
      <br />
      <label className="form-label1">
        Contact Number:
        <input
          className="form-input1"
          type="string"
          value={contactNo}
          placeholder="Contact Number"
          onChange={(event) => setContactNo(event.target.value)}
        />
      </label>
      <br />
      <label className="form-label1">
        Batch:
        <input
          className="form-input1"
          type="text"
          value={batch}
          placeholder="Batch"
          onChange={(event) => setBatch(event.target.value)}
        />
      </label>
      <label className="form-label1">
        Skills:
        <input
          className="form-input1"
          type="text"
          value={newskill}
          placeholder="University Roll Number"
          onChange={(event) => setNewskill(event.target.value)}
        />
        <button onClick={handleAddSkills}>Add Skills</button>
      </label>
      <label className="form-label1">
      <input
          className="form-input1"
          type="text"
          value={cgpa}
          placeholder="CGPA"
          onChange={(event) => setCgpa(event.target.value)}
        />
      </label>
      <label className="form-label1">
      <input
          className="form-input1"
          type="text"
          value={stream}
          placeholder="Department"
          onChange={(event) => setStream(event.target.value)}
        />
      </label>
      
      <label className="form-label1">
      <input onChange={handleFileChange1} type="file" name="" id="photo"  
                        className=""/>
     </label>
     <label className="form-label1">
      <input onChange={handleFileChange2} type="file" name="" id="resumeFile"  
                        className=""/>
     </label>
     <label className="form-label1">
      <input onChange={handleFileChange3} type="file" name="" id="marksheetfile"  
                        className=""/>
     </label>
      <button className="form-button1" type="submit">SignUp</button>
    </form>

      
      <div className="not-registered-register-container">
        <span>{`Already have an account? `}</span>
        <b className="register"><a href="/Login">Login</a></b>
      </div>
    </div>
    </div>
    </div>
  );
};

export default SignUp;
