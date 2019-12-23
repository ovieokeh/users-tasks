const UsersService = require('../services/users')

class UsersController {
  static getAllUsers(_, res) {
    UsersService.getAllUsers().then(users => {
      res.status(200).json(users)
    })
  }

  static updateUser(req, res) {
    const { userId } = req.params
    const { updatedName } = req.body

    UsersService.updateUser(userId, updatedName).then(() => {
      res.status(200).json({
        message: 'user name updated successfully'
      })
    })
  }

  static deleteUser(req, res) {
    const { userId } = req.params

    UsersService.deleteUser(userId).then(() => {
      res.status(200).json({
        message: 'user deleted successfully'
      })
    })
  }
}

module.exports = UsersController
