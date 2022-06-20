// Require Dependencies
const mongoose = require('mongoose');

// Initialize Shortcut
const Schema = mongoose.Schema;

// Initializes Schema
 const userSchema = newSchema({
    name: String,
    email: String
 })
 
// Creates Model
const User = mongoose.model('User', userSchema);

module.exports = User;