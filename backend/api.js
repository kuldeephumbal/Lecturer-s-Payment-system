require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const loginRoutes = require("./routes/login.js");
const courseRoutes = require("./routes/course.js");
const batchRoutes = require("./routes/batch.js");
const subjectRoutes = require("./routes/subject.js");
const professorRoutes = require("./routes/professor.js"); 
const paymentRoutes = require("./routes/payment.js");
const lectureRoutes = require("./routes/lecture.js");
const reportRoutes = require("./routes/report.js");

const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const dbPassword = process.env.SQL_PASSWORD;

// Connect to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "envisionpay",
  password: dbPassword,
});

connection.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to database.");
});

// Make the connection globally available
global.connection = connection;

// Routes
app.use("/", loginRoutes);
app.use("/", courseRoutes);
app.use("/", batchRoutes);
app.use("/", subjectRoutes);
app.use("/", professorRoutes); 
app.use("/", paymentRoutes);
app.use("/", lectureRoutes);
app.use("/", reportRoutes);

// Middleware Page Not Found
app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
