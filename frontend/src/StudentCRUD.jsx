import React, { useState, useEffect } from "react";
import axios from "axios";

const API = "http://localhost:5000/api/students";

function StudentCRUD() {

  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    course: "",
    age: ""
  });

  const [editingId, setEditingId] = useState(null);

  // FETCH STUDENTS
  const fetchStudents = async () => {
    try {
      const res = await axios.get(API);
      setStudents(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // HANDLE INPUT
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // CREATE or UPDATE
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await axios.put(`${API}/${editingId}`, form);
        setEditingId(null);
      } else {
        await axios.post(API, form);
      }

      setForm({ name: "", email: "", course: "", age: "" });
      fetchStudents();

    } catch (error) {
      console.error(error);
    }
  };

  // EDIT
  const handleEdit = (student) => {
    setForm({
      name: student.name,
      email: student.email,
      course: student.course,
      age: student.age
    });
    setEditingId(student._id);
  };

  // DELETE
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      fetchStudents();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-4">

      <h2 className="text-center mb-4">Student Management System</h2>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="card p-4 shadow mb-4">

        <div className="row">
          <div className="col-md-6 mb-3">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="form-control"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              type="text"
              name="course"
              placeholder="Course"
              className="form-control"
              value={form.course}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              type="number"
              name="age"
              placeholder="Age"
              className="form-control"
              value={form.age}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <button className="btn btn-primary w-100">
          {editingId ? "Update Student" : "Add Student"}
        </button>

      </form>


      {/* TABLE */}
      <div className="card shadow">
        <div className="card-body">
          <table className="table table-striped">

            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Course</th>
                <th>Age</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student) => (
                <tr key={student._id}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.course}</td>
                  <td>{student.age}</td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => handleEdit(student)}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(student._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

    </div>
  );
}

export default StudentCRUD;
