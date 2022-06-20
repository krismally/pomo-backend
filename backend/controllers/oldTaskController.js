const oldTask = require("../models/oldTask");
const OldTask = require("../models/oldTask");

// description: Get an old task
// route: GET  /pomodoro/oldTask
// access: public
const oldTasks = async (req, res) => {
  try {
    res.json(await OldTask.find({}));
  } catch (error) {
    res.status(400).json(error);
  }
};

// description: Set/create an old task
// route: POST  /pomodoro/oldTask
// access: private
const setTasks = async (req, res) => {
  try {
    res.json(await oldTask.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
};

// description: Update an old task
// route: UPDATE  /pomodoro/oldTask/:id
// access: private
const updateTasks = async (req, res) => {
  try {
    res.json(await oldTask.findByIdAndUpdate(req.params.id, req.body));
  } catch (error) {
    res.status(400).json(error);
  }
};

// description: Delete an old task
// route: DELETE  /pomodoro/oldTask/:id
// access: private
const deleteTasks = async (req, res) => {
  try {
    res.json(await oldTask.findByIdAndRemove(req.params.id));
  } catch (error) {
    res.status(4000).json(error);
  }
};

// Export
module.exports = {
  oldTasks,
  setTasks,
  updateTasks,
  deleteTasks,
};
