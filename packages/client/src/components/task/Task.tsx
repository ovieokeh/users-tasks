import * as React from 'react'
import { FaMinus, FaCheck, FaRedo } from 'react-icons/fa'

import { ITask } from '../types'
import './Task.less'

type IProps = {
  task: ITask
  onDelete: () => void
}

const Task: React.FC<IProps> = ({ task, onDelete }) => {
  const status = task.state === 'done' ? 'completed' : 'pending'

  return (
    <div key={task.id} className="task">
      <div className="task__details">
        <p className={`task__details__description ${status}`}>
          {task.description}
        </p>
      </div>

      <div className="task__actions">
        <FaMinus className="task__actions__action minus" onClick={onDelete} />

        {task.state === 'done' ? (
          <FaRedo className="task__actions__action check" />
        ) : (
          <FaCheck className="task__actions__action check" />
        )}
      </div>
    </div>
  )
}

export default Task
