const db = require('../../database')
const queries = require('../../database/queries')

class UsersService {
  static getAllUsers() {
    return db.any(queries.getAllUsers).then(res => res)
  }

  static updateUser(id, updatedName) {
    return db.none(queries.updateUser, [updatedName, id])
  }

  static deleteUser(id) {
    return db.none(queries.deleteUser, [id])
  }
}

module.exports = UsersService
