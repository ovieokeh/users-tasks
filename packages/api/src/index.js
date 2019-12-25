const path = require('path')
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
app.use('/api', routes)
app.use(express.static(path.join(__dirname, '../../client/build')))
app.get('*', (_, res) => {
  res.sendFile(path.resolve(__dirname, '../../client/build/index.html'))
})
app.all('*', (_, res) =>
  res.status(404).json({
    message: 'endpoint not recognized'
  })
)

app.listen(port, () => {
  log(`api running on port ${port}.`)
})

module.exports = app
