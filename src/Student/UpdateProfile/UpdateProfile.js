import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUserContext } from "./../../Context/UserContext";
import "./UpdateProfile.css"
function UpdateProfile() {
    const { user } = useUserContext();
    const { Student } = useUserContext();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    rollNo: '',
    stream: '',
    batch: '',
    contactNo:'',
    cgpa:'',
  });
 

  useEffect(() => {
    const fetchStudent = async () => {
        console.log(user.userEmail)
        console.log(Student.studentId);
      try {
        const response = await axios.get(`http://localhost:3001/Students/${user.userEmail}`); 
        setStudent(response.data);
        setLoading(false);
        setFormData({
          name: response.data.name,
          rollNo: response.data.rollNo,
          stream: response.data.stream,
          batch: response.data.batch,
          contactNo: response.data.contactNo,
          cgpa: response.data.cgpa,
       

        });
      } catch (error) {
        setError('Error fetching student details');
        setLoading(false);
      }
    };

    fetchStudent();
  }, [user.userEmail]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
       
      await axios.put(`http://localhost:3001/Students/students/${Student.studentId}`, formData);
   
    } catch (error) {
      setError('Error updating student details');
      
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className='upd-main'>
      <h1 className='upd-h1'>Update Student Details</h1>
      {student ? (
        <form className='upd-form' onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Roll No:</label>
            <input
              type="text"
              name="rollNo"
              value={formData.rollNo}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Department:</label>
            <input
              type="text"
              name="department"
              value={formData.stream}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Batch:</label>
            <input
              type="text"
              name="batch"
              value={formData.batch}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Contact No:</label>
            <input
              type="text"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>CGPA:</label>
            <input
              type="text"
              name="cgpa"
              value={formData.cgpa}
              onChange={handleChange}
              required
            />
          </div>
          
        
          <button className='upd-btn' type="submit">Update</button>
        </form>
      ) : (
        <p>Student not found.</p>
      )}
    </div>
  );
}

export default UpdateProfile;
