/* eslint-disable no-console */
const { db, endPool } = require('..')
const queries = require('../queries')
const seedData = require('../seeds/tasksData')

db.none(queries.createTasksTable).then(() => {
  const promises = seedData.tasks.map(task =>
    db.query(queries.createTask, [task.description, 'not done', task.userId])
  )

  Promise.all(promises).then(() => {
    console.log('migration complete')
    endPool()
  })
})
