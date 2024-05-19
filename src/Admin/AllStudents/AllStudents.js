import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./AllStudents.css";
import { Link } from 'react-router-dom';
import { useAdminContext } from "./../../Context/AdminContext";
function AllStudents() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({ stream: '', batch: '' });
  const [searchRollNo, setSearchRollNo] = useState('');
  const { view } = useAdminContext();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:3001/Students/');
        setStudents(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching students');
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearchChange = (e) => {
    setSearchRollNo(e.target.value);
  };

  const filterStudents = () => {
    let filteredStudents = [...students];

    if (filters.stream) {
      filteredStudents = filteredStudents.filter(student => student.stream.toLowerCase().includes(filters.stream.toLowerCase()));
    }

    if (filters.batch) {
      filteredStudents = filteredStudents.filter(student => student.batch === filters.batch);
    }

    if (searchRollNo) {
      filteredStudents = filteredStudents.filter(student => student.rollNo.toLowerCase().includes(searchRollNo.toLowerCase()));
    }

    return filteredStudents;
  };

  const filteredStudents = filterStudents();

  if (loading) {
    return <p>Loading...</p>;
  }
  
  const View=(email )=>{
    return()=>{
     view(email);
     }
  }


  return (
    <div className='allstudents-main'>
      <h1>Student List</h1>
      <div className='sfilters'>
        <label>
          Department:
          <input type="text" name="stream" value={filters.stream} onChange={handleFilterChange} />
        </label>
        <label>
          Batch:
          <input type="text" name="batch" value={filters.batch} onChange={handleFilterChange} />
        </label>
        <label>
          Search Roll No:
          <input type="text" value={searchRollNo} onChange={handleSearchChange} />
        </label>
      </div>
      {filteredStudents.length === 0 ? (
        <p>No students found.</p>
      ) : (
        filteredStudents.map((student) => (
          <div className='stud' key={student._id}>
            <div className="stud1">
            <p > <div className="sname">Name: </div> <div className="sp">{student.name}</div> </p>
            <p><div className="sname">Roll No: </div>{student.rollNo}</p>
            <p><div className="sname">Department: </div>{student.stream}</p>
            </div>
            <div className="stud1">
            <p><div className="sname">Batch: </div> {student.batch}</p>
            <p ><div className='sname scontact'>Contact No:</div> {student.contactNo}</p>
            <p><div className="sname">Email: </div> {student.email}</p>
            <button  onClick={View(student.email)} className="viewp"><Link to="/ACommon/SProfile">View</Link></button>
            </div>

          </div>
        ))
      )}
    </div>
  );
}

export default AllStudents;
