import React, { useState, useEffect } from "react";
import axios from "axios";

function StudentCRUD() {

  const API = "http://localhost:5000/api/students";

  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    course: "",
    age: ""
  });

  // ================= READ =================
  const fetchStudents = async () => {
    try {
      const res = await axios.get(API);
      setStudents(res.data);
    } catch (error) {
      console.log(error);
    }
  };
 
  useEffect(() => {
    fetchStudents();
  },[]); //[] 

  // ================= INPUT =================
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // ================= CREATE =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(API, form);
      fetchStudents(); // refresh list
      setForm({
        name: "",
        email: "",
        course: "",
        age: ""
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-4">

      <h2 className="text-center mb-3">Student Insert & View</h2>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="card p-3 mb-3">

        <input
          type="text"
          name="name"
          placeholder="Name"
          className="form-control mb-2"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control mb-2"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="course"
          placeholder="Course"
          className="form-control mb-2"
          value={form.course}
          onChange={handleChange}
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          className="form-control mb-2"
          value={form.age}
          onChange={handleChange}
        />

        <button className="btn btn-primary w-100">
          Add Student
        </button>

      </form>

      {/* TABLE */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.course}</td>
              <td>{student.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default StudentCRUD;