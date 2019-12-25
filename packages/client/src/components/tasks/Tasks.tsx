import * as React from 'react'

import Task from '../task/Task'
import EmptyTask from '../empty-task/EmptyTask'
import useTasks from './useTasks'
import { deleteTask, updateTask } from '../../actions'
import { ITask } from '../types'
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

  const onTaskUpdate = (task: ITask) => (newState: 'not done' | 'done') => {
    updateTask(task.id, newState).then(() => {
      const updatedTask: ITask = { ...task, state: newState }

      const newTasksList = tasksToRender
        .filter(t => t.id !== task.id)
        .concat([updatedTask])
        .sort((a, b) => {
          if (a.id > b.id) return 1
          if (a.id < b.id) return -1

          return 0
        })

      setTasksToRender(newTasksList)
    })
  }

  const renderTasks = () => {
    if (!tasksToRender.length) return <EmptyTask />

    return tasksToRender.map(task => (
      <Task
        key={task.id}
        task={task}
        onDelete={onTaskDelete(task.id)}
        onUpdate={onTaskUpdate(task)}
      />
    ))
  }

  return <div className={classname}>{renderTasks()}</div>
}

export default Tasks
