import { useState, useEffect } from 'react'
import axios from 'axios'

import { ITasks } from '../types'

type IState = [ITasks, boolean]

const useTasks = (userId: number) => {
  const API_URL = process.env.API_URL + `users/${userId}/tasks`
  const [state, setState] = useState<IState>([[], true])

  useEffect(() => {
    axios.get(API_URL).then(res => {
      const tasks: ITasks = res.data

      setState([tasks, false])
    })
  }, [])

  return state
}

export default useTasks
