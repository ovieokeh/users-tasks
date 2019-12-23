const getAllUsers = () => 'SELECT * FROM users ORDER BY id ASC'
const updateUser = () => 'UPDATE users SET name = $1 WHERE id = $2'
const deleteUser = () => 'DELETE FROM users WHERE id = $1'

const createTask = () => `
  INSERT INTO tasks
    (description, state, user_id)
  VALUES ($1, $2, $3)
`
const getUserTasks = () => `SELECT * FROM tasks WHERE user_id = $1`
const updateUserTask = () => `UPDATE tasks SET state = $1 WHERE id = $2;`

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

const createTasksTable = () => `
  CREATE TABLE IF NOT EXISTS tasks (
    id serial PRIMARY KEY,
    description text NOT NULL,
    state varchar (8) NOT NULL,
    user_id int REFERENCES users (id)
  )
`

module.exports = {
  getAllUsers,
  updateUser,
  deleteUser,
  createTask,
  getUserTasks,
  updateUserTask,
  createUsersTable,
  createTasksTable
  // listAllTables
}
