/* eslint-disable no-console */
const { db, endPool } = require('../')
const queries = require('../queries')
const seedData = require('../seeds/userData')

db.none(queries.createUsersTable).then(() => {
  const promises = []

  seedData.users.forEach(user => {
    promises.push(db.query(queries.createUser, [user]))
  })

  Promise.all(promises).then(() => {
    console.log('migration complete')
    endPool()
  })
})
