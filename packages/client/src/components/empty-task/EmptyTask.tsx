import * as React from 'react'
import { FaPlus } from 'react-icons/fa'

import './EmptyTask.less'

const EmptyTask = () => {
  return (
    <div className="empty-tasks">
      <p className="empty-tasks__message">No tasks yet</p>
      <FaPlus className="empty-tasks__action" />
    </div>
  )
}

export default EmptyTask
