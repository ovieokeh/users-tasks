/* eslint-disable no-console */
const { db, endPool } = require('..')
const queries = require('../queries')

db.none(queries.dropTasksTable).then(() => {
  console.log('tasks table dropped')
  endPool()
})
