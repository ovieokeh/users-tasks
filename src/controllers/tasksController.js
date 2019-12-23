const TasksService = require('../services/tasks')

class TasksController {
  static createTask(req, res) {
    const { description, userId } = req.body

    TasksService.createTask(description, userId)
      .then(() => {
        res.status(201).json({
          message: 'task created successfully'
        })
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  }
}

module.exports = TasksController
