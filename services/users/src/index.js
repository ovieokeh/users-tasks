const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const routes = require('./routes')

const app = express()
const port = process.env.PORT || 3000
const { log } = console

app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(routes)
app.all('*', (_, res) =>
  res.status(404).json({
    message: 'endpoint not recognized'
  })
)

app.listen(port, () => {
  log(`users service running on port ${port}.`)
})

module.exports = app
