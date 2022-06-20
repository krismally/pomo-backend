// Require Mongoose
const mongoose = require('mongoose');

// Initializes Schema
const pomodoroSchema = mongoose.Schema({
    focusTime: Number,
    breakTime: Number,
    sessionTotal: Number
});

// Export Model
module.exports = mongoose.model('Pomodoro', pomodoroSchema);