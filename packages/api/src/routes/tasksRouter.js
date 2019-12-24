const express = require('express')
const TasksController = require('../controllers/tasksController')
const {
  taskCreateRules,
  tasksUserRules,
  taskUpdateRules,
  tasksDeleteRules,
  validate
} = require('./middlewares/validators')

const tasksRouter = express.Router()

tasksRouter.post(
  '/tasks',
  taskCreateRules,
  validate,
  TasksController.createTask
)
tasksRouter.get(
  '/users/:userId/tasks',
  tasksUserRules,
  validate,
  TasksController.getUserTasks
)
tasksRouter.put(
  '/tasks/:taskId',
  taskUpdateRules,
  validate,
  TasksController.updateTask
)
tasksRouter.delete(
  '/tasks/:taskId',
  tasksDeleteRules,
  validate,
  TasksController.deleteTask
)

module.exports = tasksRouter
