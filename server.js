// Dependencies
// Get .env variables
require ('dotenv').config()

// Pull PORT from .env, give default value of 4000
const { PORT = 4000 } = process.env;

// Import Express 
const express = require('express');

// Create Application Object
const app = express();

// Routes
// Index redirect route
app.get ('/' , (req, res) => {
    res.send('Hello and welcome to the Pomodoro App');
});

// Listener
app.listen(PORT, () => console.log(`listening on:, PORT ${PORT}`));