const db = require('../../database')
const queries = require('../../database/queries')

class TasksService {
  static createTask(description, userId) {
    return db
      .any(queries.createTask(), [description, 'not done', userId])
      .then(res => res)
  }
}

module.exports = TasksService
