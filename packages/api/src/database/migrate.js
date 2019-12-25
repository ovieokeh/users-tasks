/* eslint-disable no-console */
const { db, endPool } = require('./')
const queries = require('./queries')
const seedData = require('./seedData')

function migrate() {
  db.none(queries.createUsersTable).then(() => {
    db.none(queries.createTasksTable).then(() => {
      const userPromises = []
      const taskPromises = []

      seedData.users.forEach(user => {
        userPromises.push(db.query(queries.createUser, [user]))
      })

      Promise.all(userPromises).then(() => {
        seedData.tasks.forEach(task => {
          taskPromises.push(
            db.query(queries.createTask, [
              task.description,
              'not done',
              task.userId
            ])
          )
        })

        Promise.all(taskPromises).then(() => {
          console.log('migration complete')
          endPool()
        })
      })
    })
  })
}

migrate()
