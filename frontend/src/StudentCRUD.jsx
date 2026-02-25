// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function StudentCRUD() {

//   const API = "http://localhost:5000/api/students";

//   const [students, setStudents] = useState([]);
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     course: "",
//     age: ""
//   });

//   const [editingId, setEditingId] = useState(null);

//   // ================= READ =================
//   const fetchStudents = async () => {
//     try {
//       const res = await axios.get(API);
//       setStudents(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   // ================= INPUT =================
//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value
//     });
//   };

//   // ================= CREATE =================
//   const handleCreate = async () => {
//     try {
//       await axios.post(API, form);
//       fetchStudents();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // ================= UPDATE =================
//   const handleUpdate = async () => {
//     try {
//       await axios.put(`${API}/${editingId}`, form);
//       setEditingId(null);
//       fetchStudents();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // ================= SUBMIT =================
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (editingId) {
//       handleUpdate();
//     } else {
//       handleCreate();
//     }

//     setForm({
//       name: "",
//       email: "",
//       course: "",
//       age: ""
//     });
//   };

//   // ================= EDIT =================
//   const handleEdit = (student) => {
//     setForm({
//       name: student.name,
//       email: student.email,
//       course: student.course,
//       age: student.age
//     });
//     setEditingId(student._id);
//   };

//   // ================= DELETE =================
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`${API}/${id}`);
//       fetchStudents();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="container mt-4">

//       <h2 className="text-center mb-3">Student CRUD</h2>

//       {/* FORM */}
//       <form onSubmit={handleSubmit} className="card p-3 mb-3">

//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           className="form-control mb-2"
//           value={form.name}
//           onChange={handleChange}
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           className="form-control mb-2"
//           value={form.email}
//           onChange={handleChange}
//         />

//         <input
//           type="text"
//           name="course"
//           placeholder="Course"
//           className="form-control mb-2"
//           value={form.course}
//           onChange={handleChange}
//         />

//         <input
//           type="number"
//           name="age"
//           placeholder="Age"
//           className="form-control mb-2"
//           value={form.age}
//           onChange={handleChange}
//         />

//         <button className="btn btn-primary w-100">
//           {editingId ? "Update Student" : "Add Student"}
//         </button>

//       </form>

//       {/* TABLE */}
//       <table className="table table-bordered">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Course</th>
//             <th>Age</th>
//             <th>Action</th>
//           </tr>
//         </thead>

//         <tbody>
//           {students.map((student) => (
//             <tr key={student._id}>
//               <td>{student.name}</td>
//               <td>{student.email}</td>
//               <td>{student.course}</td>
//               <td>{student.age}</td>
//               <td>
//                 <button
//                   className="btn btn-warning btn-sm me-2"
//                   onClick={() => handleEdit(student)}
//                 >
//                   Edit
//                 </button>

//                 <button
//                   className="btn btn-danger btn-sm"
//                   onClick={() => handleDelete(student._id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//     </div>
//   );
// }

// export default StudentCRUD;

import React, { useState } from "react";
import axios from "axios";

function StudentCRUD() {
  const API = "http://localhost:5000/api/students";

  const [form, setForm] = useState({
    //form is an object that holds the values of the input fields .setForm is a function that updates the form state
    name: "",
    email: "",
    course: "",
    age: "", // Store age as string to handle empty input
  });

  // ================= INPUT =================
  const handleChange = (e) => {//(e) is how we receive information about the action.
    setForm({
      ...form, //Copy everything inside this object.
      [e.target.name]: e.target.value,
    });
      console.log(e.target.name, e.target.value) //e.target.name is the name of the input field that triggered the change event, and e.target.value is the current value of that input field.

  };

  //   setForm({
  //   ...form,
  //   name: "Arjun"
  // });

  // ================= INSERT =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(API, form);//the data you collected from input fields

      // Clear form after submission
      setForm({
        name: "",
        email: "",
        course: "",
        age: "",
      });
      alert("Student added successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-3">Insert Student</h2>

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

        <button className="btn btn-primary w-100">Add Student</button>
      </form>
    </div>
  );
}

export default StudentCRUD;

// e.target → which element triggered it

// e.target.value → what user typed

// e.target.name → input name
