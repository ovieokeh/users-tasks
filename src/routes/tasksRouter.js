const express = require('express')
const TasksController = require('../controllers/tasksController')
const { taskCreateRules, validate } = require('./middlewares/validators')

const tasksRouter = express.Router()

tasksRouter.post(
  '/tasks',
  taskCreateRules,
  validate,
  TasksController.createTask
)

module.exports = tasksRouter
