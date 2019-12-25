import { useState, useEffect } from 'react'

import { fetchTasks } from '../../actions'
import { ITasks } from '../types'

type IState = [ITasks, boolean]

const useTasks = (userId: number) => {
  const [state, setState] = useState<IState>([[], true])

  useEffect(() => {
    fetchTasks(userId).then(tasks => setState([tasks, false]))
  }, [])

  return state
}

export default useTasks
