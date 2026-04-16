const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());



const config = {
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "Password@123",
  database: "taskdb"
};

// Get all tasks
app.get("/tasks", async (req, res) => {
  try {
    const connection = await mysql.createConnection(config);
    const [rows] = await connection.execute("SELECT * FROM Tasks");
    res.json(rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Add task
app.post("/tasks", async (req, res) => {
  const { title } = req.body;
  try {
    const connection = await mysql.createConnection(config);
    await connection.execute(
      "INSERT INTO Tasks (title, status) VALUES (?, 'pending')",
      [title]
    );
    res.send("Task added");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));