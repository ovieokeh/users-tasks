const { db, endPool } = require('./')

function clearDB() {
  db.none('DROP TABLE tasks').then(() => {
    db.none('DROP TABLE users').then(() => {
      endPool()
      console.log('db cleared')
    })
  })
}

clearDB()
