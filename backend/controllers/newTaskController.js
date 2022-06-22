const NewTask = require("../models/newTask");

// description: Get task
// route: GET  /pomodoro/newTask
// access: public
const newTasks = async (req, res) => {
  try {
    res.json(await NewTask.find({}));
  } catch (error) {
    res.status(400).json(error);
  }
};

// description: Set task
// route: POST  /pomodoro/newTask
// access: private
const setTasks = async (req, res) => {
  try {
    res.json(await NewTask.create(req.body));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
};

// description: Update task
// route: UPDATE  /pomodoro/newTask/:id
// access: private
const updateTasks = async (req, res) => {
  try {
    res.json(await NewTask.findByIdAndUpdate(req.params.id, req.body));
  } catch (error) {
    res.status(400).json(error);
  }
};

// description: Delete task
// route: DELETE  /pomodoro/newTask/:id
// access: private
const deleteTasks = async (req, res) => {
  try {
    res.json(await NewTask.findByIdAndRemove(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
};

// Export
module.exports = {
  newTasks,
  setTasks,
  updateTasks,
  deleteTasks,
};
