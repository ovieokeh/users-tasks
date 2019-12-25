import * as React from 'react'
import { FaCheck, FaPlus } from 'react-icons/fa'

import { createTask } from '../../actions'
import { ITask } from '../types'
import './NewTask.less'

const { useState } = React

type IProps = {
  userId: number
  onTaskCreate: (task: ITask) => void
}

const NewTask: React.FC<IProps> = ({ userId, onTaskCreate }) => {
  const [newTaskInput, setNewTaskInput] = useState('')
  const [isAddingTask, setIsAddingTask] = useState(false)

  const createNewTask = (e: any) => {
    e.preventDefault()

    createTask(newTaskInput, userId).then(newTask => {
      setNewTaskInput('')
      setIsAddingTask(false)

      onTaskCreate(newTask)
    })
  }

  return (
    <div className="tasks__new">
      {isAddingTask && (
        <form className="tasks__new__form" onSubmit={createNewTask}>
          <input
            className="tasks__new__form__input"
            type="text"
            value={newTaskInput}
            onChange={e => setNewTaskInput(e.target.value)}
            placeholder="Enter the new task's description"
            autoFocus
          />
        </form>
      )}

      {isAddingTask ? (
        <FaCheck onClick={createNewTask} className="tasks__new__action done" />
      ) : (
        <FaPlus
          onClick={() => setIsAddingTask(true)}
          className="tasks__new__action add"
        />
      )}
    </div>
  )
}

export default NewTask
