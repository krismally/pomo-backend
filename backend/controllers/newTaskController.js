// description: Get task
// route: GET  /pomodoro/newTask
// access: public
const newTasks = (req, res) => {
  console.log(req.body);
  res.json({ message: "Get Tasks" });
};

// description: Set task
// route: POST  /pomodoro/newTask
// access: private
const setTasks = (req, res) => {
  res.json({ message: "New Tasks" });
};

// description: Update task
// route: UPDATE  /pomodoro/newTask/:id
// access: private
const updateTasks = (req, res) => {
  res.json({ message: "Update Tasks" });
};

// description: Delete task
// route: DELETE  /pomodoro/newTask/:id
// access: private
const deleteTasks = (req, res) => {
  res.json({ message: "Delete Tasks" });
};

// Export
module.exports = {
  newTasks,
  setTasks,
  updateTasks,
  deleteTasks,
};
