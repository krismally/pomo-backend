// Configure App Settings
require("dotenv").config();

// Dependencies
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const connectDB = require("./backend/config/db")

// Pull PORT from .env to run on port 4000.
const { PORT = 4000 } = process.env;

// Database Connection
connectDB()

// Mount Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json()); // this recreates req.body from JSON when express is not serving HTML
app.use(express.urlencoded({ extended: false }));

// Require Router Dependencies
const newTaskController = require("./backend/routes/newTasks");
const oldTaskController = require("./backend/routes/oldTasks");
const pomodoroController = require("./backend/routes/pomodoros");

// Router Routes
app.use("/pomodoro", require("./backend/routes/pomodoros"));
app.use("/pomodoro/newTask", require("./backend/routes/newTasks"));
app.use("/pomodoro/oldTask", require("./backend/routes/oldTasks"));

// Express Listener
app.listen( PORT, () => console.log(`Express is listening on:, port ${PORT}`));
