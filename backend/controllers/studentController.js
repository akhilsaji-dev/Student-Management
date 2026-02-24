// Import the Student model from models folder
// This model is used to interact with MongoDB collection "students"
const Student = require("../models/Studentdb");

 
// ================= CREATE STUDENT =================

// This function creates a new student
// It handles POST request
exports.createStudent = async (req, res) => {

  try {

    // Student.create() inserts a new document into MongoDB
    // req.body contains data sent from frontend (name, email, course, age)
    const student = await Student.create(req.body);

    // Send success response with status 201 (Created)
    // and return the created student data as JSON in client side
    res.status(201).json(student);

  } catch (error) {

    // If error occurs, send status 500 (Server Error)
    // and return error message
    res.status(500).json({ message: error.message });
    console.log("Error creating student:", error);
  }
};


// ================= GET ALL STUDENTS =================

// This function retrieves all students from database
// It handles GET request
exports.getStudents = async (req, res) => {

  try {

    // Student.find() returns all documents from students collection
    const students = await Student.find();

    // Send student list as JSON response
    res.json(students);

  } catch (error) {

    // Handle error if database fails
    res.status(500).json({ message: error.message });

  }
};

// ================= UPDATE STUDENT =================

// This function updates student data using ID
// It handles PUT request
exports.updateStudent = async (req, res) => {

  try {

    // findByIdAndUpdate parameters:
    // req.params.id = student ID from URL (e.g., /students/:id) .Express stores it in:
    // req.body = new data to update
    // { new: true } = returns updated document instead of old document
    const student = await Student.findByIdAndUpdate(
      req.params.id, 
      req.body,
      { new: true } 
    );

    // Send updated student data
    res.json(student);

  } catch (error) {

    // Handle error
    res.status(500).json({ message: error.message });

  }
};



// ================= DELETE STUDENT =================

// This function deletes student using ID
// It handles DELETE request
exports.deleteStudent = async (req, res) => {

  try {

    // findByIdAndDelete deletes student document by ID
    await Student.findByIdAndDelete(req.params.id);

    // Send success message after deletion
    res.json({ message: "Student deleted successfully" });

  } catch (error) {

    // Handle error
    res.status(500).json({ message: error.message });

  }
};
