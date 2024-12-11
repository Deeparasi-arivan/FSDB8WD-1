const Task = require("../models/Task");

// Get All Tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ createdBy: req.user.userId }).populate(
      "assignedTo"
    );
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// create a new task
const createTask = async (req, res) => {
  try {
    const { title, description, priority, assignedTo, dueDate } = req.body;
    const task = new Task({
      title,
      description,
      priority,
      assignedTo,
      createdBy: req.user.userId,
      dueDate,
    });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getAllTasks, createTask };
