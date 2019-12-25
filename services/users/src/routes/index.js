const express = require('express')

const UsersController = require('../controllers/usersController')
const {
  userUpdateRules,
  userDeleteRules,
  validate
} = require('./middlewares/validators')

const router = express.Router()

router.get('/users', UsersController.getAllUsers)
router.put(
  '/users/:userId',
  userUpdateRules,
  validate,
  UsersController.updateUser
)
router.delete(
  '/users/:userId',
  userDeleteRules,
  validate,
  UsersController.deleteUser
)

module.exports = router
