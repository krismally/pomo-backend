// Connect Mongoose Database
const mongoose = require("mongoose");

const connectDB = async () => { // All mongoose methods are asyncronous : return a promise.
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB
