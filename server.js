// Configure App Settings
require ('dotenv').config();

// Dependencies
const express = require('express');
const mongoose  = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const db = mongoose.connection;

// Require Router Dependencies
const newTaskController = require('./backend/routes/newTasks');
const oldTaskController = require('./backend/routes/oldTasks');

// MongoDB Database Connection
const DATABASE_URL = "mongodb+srv://admin:abc1234@cluster0.b8vyj.mongodb.net/pomodoro?retryWrites=true&w=majority"

// Database Connection 
const MONGODB_URI = process.env.MONGODB_URI

// Pull PORT from .env, give default value of 4000
const { PORT = 4000, MONGODB_URL} = process.env;

// Connect to mongoDB
// mongoose.connect(MONGODB_URL);

// Mongo Status Listeners
mongoose.connection
    .on('connected', () => console.log("Connected to MongoDB"))
    .on("error", () => console.log("Error with MongoDB: ' +err.message"))

// Mount Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json()); // this recreates req.body from JSON when express is not serving HTML
app.use(express.urlencoded({extended: false}))

// Routes
app.use ('/pomodoro' , require('./backend/routes/pomodoro'));
app.use ('/pomodoro/newTask' , require('./backend/routes/newTasks'));
app.use ('/pomodoro/oldTask' , require('./backend/routes/oldTasks'));



// Express Listener
app.listen(PORT, () => console.log(`Express is listening on:, PORT ${PORT}`));