// Requires Dependencies
const mongoose = require('mongoose');

// Initializes Shortcut Variable
const Schema = mongoose.Schema;

// Initializes Schema
const newTaskSchema = new Schema({
    newTask: Array
});

// Creates Model
const NewTask = mongoose.model('NewTask', newTaskSchema);

module.exports = NewTask;