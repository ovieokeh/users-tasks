require('dotenv').config()

const config = {
  production: process.env.DATABASE_URL,
  development: process.env.DATABASE_URL,
  test: process.env.DATABASE_TEST_URL
}

module.exports = config[process.env.NODE_ENV]
