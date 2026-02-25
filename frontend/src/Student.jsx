import React, { useState } from "react";

const Student = () => {

  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");

  const handleAdd = () => {
    const newStudent = { name };// Create a new student object with the name from input

    setStudents([...students, newStudent]); // Insert into array

    setName(""); // Clear input
  };

  return (
    <div>
      <h2>Student List</h2>

      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />

      <button onClick={handleAdd}>Add</button>

      <ul>
        {students.map((student, index) => (
          <li key={index}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Student;