import "./About.css";
const About = () => {
  return (
    <div className="about-us">
      <div className="about-us-child" />
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
          <span className="span">.</span>
        </span>
      </b>
      <div className="about-us-item" />
      <b className="home"><a href="/">Home</a></b>
      <b className="contact"><a href="/Contact">Contact</a></b>
      <div className="about-us-inner" />
      <div className="about-us1">About Us</div>
      <div className="welcome-to-our-container">
        <span className="nsec-txt">
          <p className="welcome-to-our">
            Welcome to our Final Year College Project on Placement Management
            System!
          </p>
          <p className="welcome-to-our">
            We are a team of passionate and dedicated students who have come
            together to develop a cutting-edge software solution for managing
            placements at our college. Our project aims to streamline the entire
            placement process, from registration to job offers, by providing a
            user-friendly platform for both students and recruiters.
          </p>
          <p className="welcome-to-our">&nbsp;</p>
          <p className="welcome-to-our">
            Our team is made up of individuals with diverse skills and
            expertise, including software development, database management, and
            user experience design. We have worked tirelessly to ensure that our
            Placement Management System meets the highest standards of
            functionality, reliability, and usability.
          </p>
          <p className="welcome-to-our">&nbsp;</p>
          <p className="welcome-to-our">
            We are proud to have developed a software solution that will benefit
            our college community and improve the placement process for years to
            come.
          </p>
        </span>
      </div>
      <div className="rectangle-div" />
      <div className="our-team">Our Team</div>
      <img
        className="img-20220824-wa0013-icon"
        alt=""
        src="images/img20220824wa0013@2x.png"
      />
      <img className="br-icon" alt="" src="images/br@2x.png" />
      <img
        className="img-20230513-083604-icon"
        alt=""
        src="/public/images/img-20230513-083604@2x.png"
      />
      <div className="ahitagni-pai">Anushka Sarkar </div>
      <div className="barenya-nandi">Koyeli Dey</div>
      <div className="shalini-kumari">Moiyukh Srimani</div>
      <div className="sayak-maity">Samriddhi Singha Roy</div>
      <img className="screenshot-4-1" alt="" src="images/screenshot-4-1@2x.png" />
    </div>
  );
};

export default About;
