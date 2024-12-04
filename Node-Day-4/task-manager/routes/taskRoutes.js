const express = require("express");
const { getTasks, createTask } = require("../controllers/taskController");

const router = express.Router();

// get all tasks
router.get("/", getTasks);

// create a new task
router.post("/", createTask);

module.exports = router;
