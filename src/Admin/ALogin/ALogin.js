import "./ALogin.css";
import React, {useState} from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAdminContext } from "../../Context/AdminContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logIn } = useAdminContext();
    const nav = useNavigate();
  const handleSubmit = (async(event) => {
    event.preventDefault();
   
    await axios.post(`http://localhost:3001/Admin/login`,{email,password}
      )
      .then(result=>{
           
            if(result.status===200){
                console.log("Login successfull");
                alert("Logged in successfully!");
                logIn(email);
             
                
                nav("/ACommon/AHome");
          
            }
            else{
                console.log(result.status);
                console.log("Login unsuccessfull : eroor 404");
                alert("Login unsuccessfull - please check username and password");
            }
            
        }
        
    )
    .catch((error) => {
        if (error.response) {
            alert(error.response.status)
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
    });
    
  });

 
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
      <div className="login-item" >
       <div className="cont1">
       <div className="text1">
        Welcome Back!
       </div>
       <div className="text2">
        Admin</div>
       <div className="text2"> <span>Login to your account</span>
    

      <span> start exploring </span>
      <div className="text2">job opportunities</div>
      </div>
       
       </div>
      <div className="login-inner" >
      <div className="login1">Login</div>
      <div className="please-enter-your">Please enter your credentials!</div>
      
      
      
      
      

      <form className="login-form" onSubmit={handleSubmit}>
      <label className="form-label">
        Email:
        <input
          className="form-input"
          type="email"
          value={email}
          placeholder="EMAIL"
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <br />
      <label className="form-label">
        Password:
        <input
          className="form-input"
          type="password"
          value={password}
          placeholder="PASSWORD"
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <button className="form-button" type="submit">Login</button>
    </form>

      
      <div className="not-registered-register-container">
        <span>{`Not registered? `}</span>
        <b className="register"><a href="/SignUp">Register</a></b>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Login;
