const createUser = 'INSERT INTO users (name) VALUES ($1) RETURNING *'
const getAllUsers = 'SELECT * FROM users ORDER BY id ASC'
const updateUser = 'UPDATE users SET name = $1 WHERE id = $2'
const deleteUser = 'DELETE FROM users WHERE id = $1'

const createUsersTable = `
  CREATE TABLE IF NOT EXISTS users (
    id serial PRIMARY KEY,
    name varchar (50) UNIQUE NOT NULL
  )
`

const dropUsersTable = 'DROP TABLE IF EXISTS users'

module.exports = {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
  createUsersTable,
  dropUsersTable
}
