const createTask = `
  INSERT INTO tasks
    (description, state, user_id)
  VALUES ($1, $2, $3)
  RETURNING *
`
const getUserTasks = 'SELECT * FROM tasks WHERE user_id = $1 ORDER BY id ASC'
const updateUserTask = 'UPDATE tasks SET state = $1 WHERE id = $2;'
const deleteTask = 'DELETE FROM tasks WHERE id = $1;'

const createTasksTable = `
  CREATE TABLE IF NOT EXISTS tasks (
    id serial PRIMARY KEY,
    description text NOT NULL,
    state varchar (8) NOT NULL,
    user_id int
  )
`

const dropTasksTable = `
  DROP TABLE IF EXISTS tasks
`

module.exports = {
  createTask,
  getUserTasks,
  updateUserTask,
  deleteTask,
  createTasksTable,
  dropTasksTable
}
