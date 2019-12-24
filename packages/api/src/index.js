const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes')

require('dotenv').config()

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

app.listen(port, () => {
  log(`App running on port ${port}.`)
})

module.exports = app
