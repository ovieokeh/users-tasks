import { useState, useEffect } from 'react'

import { fetchUsers } from '../../actions'
import { IUsers } from '../types'

type IState = [IUsers, boolean]

const useUsers = () => {
  const [state, setState] = useState<IState>([[], true])

  useEffect(() => {
    fetchUsers().then(users => setState([users, false]))
  }, [])

  return state
}

export default useUsers
