const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


// ROUTES
app.use("/api/students", require("./routes/studentRoutes"));


// CONNECT DATABASE
mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));


// START SERVER
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
