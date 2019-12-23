const pgp = require('pg-promise')()
const config = require('./config')

const dbPool = pgp(config)

module.exports = dbPool
