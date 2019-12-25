import * as React from 'react'

import Task from '../task/Task'
import EmptyTask from '../empty-task/EmptyTask'
import useTasks from './useTasks'
import { deleteTask } from '../../actions'
import './Tasks.less'

type IProps = {
  userId: number
  show: boolean
}

const { useState, useEffect } = React

const Tasks: React.FC<IProps> = ({ userId, show }) => {
  const [tasks] = useTasks(userId)
  const [tasksToRender, setTasksToRender] = useState([])
  const classname = `tasks ${show ? 'show' : 'hide'}`

  useEffect(() => {
    setTasksToRender(tasks)
  }, [tasks])

  const onTaskDelete = (taskId: number) => () =>
    deleteTask(taskId).then(() => {
      const newTasksList = tasksToRender.filter(task => task.id !== taskId)
      setTasksToRender(newTasksList)
    })

  const renderTasks = () => {
    if (!tasksToRender.length) return <EmptyTask />

    return tasksToRender.map(task => (
      <Task key={task.id} task={task} onDelete={onTaskDelete(task.id)} />
    ))
  }

  return <div className={classname}>{renderTasks()}</div>
}

export default Tasks
