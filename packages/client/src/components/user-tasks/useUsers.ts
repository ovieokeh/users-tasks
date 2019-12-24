import { useState, useEffect } from 'react'
import axios from 'axios'
import { IUsers } from '../types'

const API_URL = 'http://localhost:3200/api/users'

type IState = [IUsers, boolean]

const useUsers = () => {
  const [state, setState] = useState<IState>([[], true])

  useEffect(() => {
    axios.get(API_URL).then(res => {
      const users: IUsers = res.data

      setState([users, false])
    })
  }, [])

  return state
}

export default useUsers
