import { useState, useEffect } from 'react'
import axios from 'axios'
import { IUsers } from '../types'

const API_URL = process.env.API_URL

type IState = [IUsers, boolean]

const useUsers = () => {
  const [state, setState] = useState<IState>([[], true])

  useEffect(() => {
    axios.get(API_URL + 'users').then(res => {
      const users: IUsers = res.data

      setState([users, false])
    })
  }, [])

  return state
}

export default useUsers
