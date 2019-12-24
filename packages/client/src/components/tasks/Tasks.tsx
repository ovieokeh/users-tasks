import * as React from 'react'

import Task from '../task/Task'
import EmptyTask from '../empty-task/EmptyTask'
import useTasks from './useTasks'
import './Tasks.less'

type IProps = {
  userId: number
  show: boolean
}

const Tasks: React.FC<IProps> = ({ userId, show }) => {
  const [tasks] = useTasks(userId)
  const classname = `tasks ${show ? 'show' : 'hide'}`

  const renderTasks = () => {
    if (!tasks.length) return <EmptyTask />

    return tasks.map(task => <Task key={task.id} task={task} />)
  }

  return <div className={classname}>{renderTasks()}</div>
}

export default Tasks
