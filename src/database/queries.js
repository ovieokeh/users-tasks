const getAllUsers = () => 'SELECT * FROM users ORDER BY id ASC'
const updateUser = () => 'UPDATE users SET name = $1 WHERE id = $2'
const deleteUser = () => 'DELETE FROM users WHERE id = $1'

// const listAllTables = () => `SELECT table_name
// FROM information_schema.tables
// WHERE table_schema='public'
//  AND table_type='BASE TABLE';`

const createUsersTable = () => `
  CREATE TABLE IF NOT EXISTS users (
    id serial PRIMARY KEY,
    name varchar (50) UNIQUE NOT NULL
  )
`

module.exports = {
  getAllUsers,
  updateUser,
  deleteUser,
  createUsersTable
  // listAllTables
}
