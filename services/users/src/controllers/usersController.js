const UsersHelper = require('../helpers')

class UsersController {
  static getAllUsers(_, res) {
    UsersHelper.getAllUsers()
      .then(users => {
        res.status(200).json(users)
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  }

  static updateUser(req, res) {
    const { userId } = req.params
    const { updatedName } = req.body

    UsersHelper.updateUser(userId, updatedName)
      .then(() => {
        res.status(200).json({
          message: 'user name updated successfully'
        })
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  }

  static deleteUser(req, res) {
    const { userId } = req.params

    UsersHelper.deleteUser(userId)
      .then(() => {
        res.status(204).json()
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  }
}

module.exports = UsersController
