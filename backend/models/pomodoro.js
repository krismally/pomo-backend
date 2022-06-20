// Require Dependencies
const mongoose = require('mongoose');

// Initializes Shortcut Variable
const Schema = mongoose.Schema;

// Initializes Schema
const pomodoroSchema = newSchema({
    focusTime: Number,
    breakTime: Number,
    sessionTotal: Number
});

// Creates Model
const Pomodoro = mongoose.model('Pomodoro', pomodoroSchema);

// Export Model
module.exports = Pomodoro;