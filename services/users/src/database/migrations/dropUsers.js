/* eslint-disable no-console */
const { db, endPool } = require('..')
const queries = require('../queries')

db.none(queries.dropUsersTable).then(() => {
  console.log('users table dropped')
  endPool()
})
