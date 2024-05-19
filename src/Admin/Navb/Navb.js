import React from 'react'
import "./Navb.css"
import { useAdminContext } from "../../Context/AdminContext";
import {Outlet,Link} from 'react-router-dom'
function Navb() {
  const { logOut } = useAdminContext();
  return (

      <div className="navi">
        <div className="ansec">
        <span className="ansec-txt">
          <span>NS</span>
          <span className="E">E</span>
          <span>C</span>
        </span>
        </div>
        <div className="links">
             <a href="/ACommon" className="hom">Home</a>
             <a href="/ACommon" className="Com">Community</a>
             <button onClick={logOut}  className="logout"><Link to="/ALogin">LogOut</Link></button>
        </div>

    
        
      </div>
    
  )
}

export default Navb
