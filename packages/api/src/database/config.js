require('dotenv').config()

const config = {
  development: {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: 5432
  },
  test: {
    user: process.env.DB_USER_TEST,
    host: process.env.DB_HOST_TEST,
    database: process.env.DB_NAME_TEST,
    password: process.env.DB_PASSWORD_TEST,
    port: 5432
  }
}

module.exports = config[process.env.NODE_ENV]
