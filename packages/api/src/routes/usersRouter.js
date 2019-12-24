const express = require('express')
const UsersController = require('../controllers/usersController')
const {
  userUpdateRules,
  userDeleteRules,
  validate
} = require('./middlewares/validators')

const usersRouter = express.Router()

usersRouter.get('/users', UsersController.getAllUsers)
usersRouter.put(
  '/users/:userId',
  userUpdateRules,
  validate,
  UsersController.updateUser
)
usersRouter.delete(
  '/users/:userId',
  userDeleteRules,
  validate,
  UsersController.deleteUser
)

module.exports = usersRouter
