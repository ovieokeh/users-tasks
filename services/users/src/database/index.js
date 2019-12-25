const pgp = require('pg-promise')()

const config = require('./config')

const db = pgp(config)
const endPool = pgp.end

module.exports = { db, endPool }
