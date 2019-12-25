const express = require('express')

const TasksController = require('../controllers/tasksController')
const {
  taskCreateRules,
  tasksUserRules,
  taskUpdateRules,
  tasksDeleteRules,
  validate
} = require('./middlewares/validators')

const router = express.Router()

router.post('/tasks', taskCreateRules, validate, TasksController.createTask)
router.get(
  '/users/:userId/tasks',
  tasksUserRules,
  validate,
  TasksController.getUserTasks
)
router.put(
  '/tasks/:taskId',
  taskUpdateRules,
  validate,
  TasksController.updateTask
)
router.delete(
  '/tasks/:taskId',
  tasksDeleteRules,
  validate,
  TasksController.deleteTask
)

module.exports = router
