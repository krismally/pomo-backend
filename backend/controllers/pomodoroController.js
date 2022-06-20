// description: Start
// route: GET  /pomodoro
// access: public
const mainTimer = (req, res) => {
  res.json({ message: "Main Timer" });
};

// description: Set task
// route: POST  /pomodoro
// access: public
const setTimer = (req, res) => {
  res.json({ message: "Set Timer" });
};

// description: Update task
// route: UPDATE  /pomodoro/:id
// access: private
const updateTimer = (req, res) => {
  res.json({ message: "Update Timer" });
};

// Export
module.exports = {
  mainTimer,
  setTimer,
  updateTimer,
};
