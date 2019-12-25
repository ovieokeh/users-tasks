const TasksService = require('../services/tasks')

class TasksController {
  static createTask(req, res) {
    const { description, userId } = req.body

    TasksService.createTask(description, userId)
      .then(task => {
        res.status(201).json({
          message: 'task created successfully',
          task
        })
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  }

  static getUserTasks(req, res) {
    const { userId } = req.params

    TasksService.getUserTasks(userId)
      .then(tasks => {
        res.status(200).json(tasks)
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  }

  static updateTask(req, res) {
    const { taskId } = req.params
    const { state } = req.body

    TasksService.updateTask(state, taskId)
      .then(() => {
        res.status(200).json({ message: 'task updated successfully' })
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  }

  static deleteTask(req, res) {
    const { taskId } = req.params

    TasksService.deleteTask(taskId)
      .then(() => {
        res.status(204).json()
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  }
}

module.exports = TasksController
