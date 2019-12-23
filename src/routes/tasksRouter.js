const express = require('express')
const TasksController = require('../controllers/tasksController')
const {
  taskCreateRules,
  tasksUserRules,
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

module.exports = tasksRouter
