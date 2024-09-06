const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/taskController');

// Define API endpoints
router.get('/tasks', TaskController.getAllTasks);
router.post('/task', TaskController.createTask);
router.put('/task/:id', TaskController.updateTask);
router.delete('/task/:id', TaskController.deleteTask);

module.exports = router;