import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Announcements.css"
function Announcements() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get('http://localhost:3001/Admin/announce/announcements'); 
        setAnnouncements(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching announcements');
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newAnnouncement = {
      title,
      description,
    
    };

    try {
      const response = await axios.post('http://localhost:3001/Admin/announce', newAnnouncement); 
      setAnnouncements([...announcements, response.data]);
      setTitle('');
      setDescription('');
      
   
    } catch (error) {
      setError('Error posting announcement');
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }


  return (
    <div className="">
        <div className="ann-main">
      <h1>Make a new Announcement</h1>
      <div className="aff">
        <img src="/public/images/announcement.png" alt="" className="aff1" />
      <form className="aform-main" onSubmit={handleSubmit}>
        
        <div className=''>
          <label htmlFor="title">Title:</label>
          <input className="int1"
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='ek1'>
          <label className='ek' htmlFor="description">Description:</label>
          <textarea className="int2"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        
       
       
        <button className="btn-ann" type="submit">Post Announcement</button>
      </form>
      </div>
      </div>
      <div className="announce-main">

      <h2>All Announcements</h2>
      
      {announcements.length === 0 ? (
        <p>No announcements found.</p>
      ) : (
        <ul className="ul">
          {announcements.map((announcement) => (
            <li className="li" key={announcement.id}>
              <h3>{announcement.title}</h3>

              <p>{announcement.description}</p>
              <p>{announcement.dateOfPost.substring(0,10)}</p>
              
            </li>
          ))}
        </ul>
        
      )}
      </div>
    </div>
  );
}

export default Announcements;
