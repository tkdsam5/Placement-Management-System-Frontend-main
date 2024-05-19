import "./Home.css"
 
const Home = () => {
  return (
    <div className="desktop-1">
     <nav className="navbar">
      <img src="images/25-years-nsec-logo-3.png" alt="Logo" className="navbar__logo" />
      <h1 className="navbar__title">NSEC PLACEMENT CELL</h1>
      <ul className="navbar__menu">
        <li className="navbar__menuItem"><a href="/">Home</a></li>
        <li className="navbar__menuItem"><a href="/About">About</a></li>
        <li className="navbar__menuItem"><a href="/Contact">Contact</a></li>
        <li className="navbar__menuItem"><a href="/Login">Login</a></li>
      </ul>

    </nav>
     <div className="title">WELCOME TO NSEC PLACEMENT CELL</div>
     
     <div className="hero-section">
      <img src="images/nsec-logo 1.png" alt="" />
      <div className="designs">
         
         <div className="des1"></div>
         <div className="des2"></div>
         <div className="des3"></div>
         <div className="des4"></div>
         
         
      </div>
      <div className="about">
        <div className="text">The Training and Placement Cell of Netaji Subhash Engineering College works dedicatedly to make sure that all the students taking admission secure at least one job. We understand that most of the students, at the time of taking admission, are not ready for the industry. And this is where we come in! Our job is to train the students in a manner such that he/she is confident to crack a job by the time of reaching the final semester. A large number of well renowned MNCs, related to software as well as core sectors, take part in the recruitment process throughout the year. The Placement starts around the month of July and may continue for more than a year. During this timeline, we, along with the faculties of every Department, lay special focus on each and every individual.</div>
        <div className="text11">-Training and Placement cell </div>
</div>
     </div>
     <div className="tail-section">
      <div className="student">
        <img src="images/student.jfif" alt="" />
        <div className="t">Student</div>
        <div className="l1">
        <div className="p1"><a href="/Login">Login</a></div>
        <div className="p1"><a href="/SignUp">SignUp</a></div>
        </div>
      </div>\
      <div className="admin">
        <img src="images/admin.jfif" alt="" />
        <div className="t">Admin</div>
        <div className="l1">
        <div className="p1"><a href="/ALogin">Login</a></div>
        
        </div>
      </div>
     </div>
     <div className="footer"> <div className="foot">Developed by our team @NSEC as a Final Year Project , 2024</div></div>
    </div>
  );
};

export default Home;
