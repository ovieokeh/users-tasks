const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000
const { log } = console

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(routes)

app.listen(port, () => {
  log(`App running on port ${port}.`)
})
