const express = require('express')
const usersRouter = require('./usersRouter')
const tasksRouter = require('./tasksRouter')

const router = express.Router()

router.use(usersRouter)
router.use(tasksRouter)

module.exports = router
