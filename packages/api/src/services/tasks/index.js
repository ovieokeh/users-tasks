const { db } = require('../../database')
const queries = require('../../database/queries')

class TasksService {
  static createTask(description, userId) {
    return db
      .any(queries.createTask, [description, 'not done', userId])
      .then(res => res)
  }

  static getUserTasks(userId) {
    return db.many(queries.getUserTasks, [userId]).then(res => res)
  }

  static updateTask(state, taskId) {
    return db.none(queries.updateUserTask, [state, taskId])
  }

  static deleteTask(taskId) {
    return db.none(queries.deleteTask, [taskId])
  }
}

module.exports = TasksService
