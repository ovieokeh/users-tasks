import axios from 'axios'

import { ITasks, IUsers } from '../components/types'

const { API_URL } = process.env

const fetchUsers = () =>
  axios.get(API_URL + 'users').then(res => res.data as IUsers)

const fetchTasks = userId =>
  axios.get(API_URL + `users/${userId}/tasks`).then(res => res.data as ITasks)

const deleteUser = userId => axios.delete(API_URL + `users/${userId}`)
const deleteTask = taskId => axios.delete(API_URL + `tasks/${taskId}`)

export { fetchUsers, fetchTasks, deleteUser, deleteTask }
