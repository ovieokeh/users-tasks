import * as React from 'react'
import Spinner from 'react-loader-spinner'

import User from '../user/User'
import useUsers from '../user-tasks/useUsers'
import { deleteUser, updateUser } from '../../actions'
import './UserTasks.less'
import { IUser } from '../types'

const { useState, useEffect } = React

const UserTasks: React.FC = () => {
  const [users, isLoading] = useUsers()
  const [selectedUser, selectUser] = useState<null | number>(null)
  const [usersToRender, setUsersToRender] = useState([])

  useEffect(() => {
    setUsersToRender(users)
  }, [users])

  const onUserClick = (userId: number) => () => {
    let nextUser

    if (!selectedUser || selectedUser !== userId) {
      nextUser = userId
    } else if (selectedUser === userId) {
      nextUser = null
    }

    selectUser(nextUser)
  }

  const onUserDelete = (userId: number) => () =>
    deleteUser(userId).then(() => {
      const newUserList = usersToRender.filter(user => user.id !== userId)
      setUsersToRender(newUserList)
    })

  const onUserUpdate = (user: IUser) => (updatedName: string) => {
    updateUser(user.id, updatedName).then(() => {
      const updatedUser: IUser = { ...user, name: updatedName }

      const newUserList = usersToRender
        .filter(u => u.id !== user.id)
        .concat([updatedUser])
        .sort((a, b) => {
          if (a.id > b.id) return 1
          if (a.id < b.id) return -1

          return 0
        })

      setUsersToRender(newUserList)
    })
  }

  const renderUsers = () => {
    if (isLoading)
      return <Spinner type="Puff" color="#f4d8cd" height={80} width={80} />

    return usersToRender.map(user => {
      const isSelected = selectedUser && user.id === selectedUser

      return (
        <User
          key={user.id}
          user={user}
          isSelected={isSelected}
          onClick={onUserClick(user.id)}
          onDelete={onUserDelete(user.id)}
          onUpdate={onUserUpdate(user)}
        />
      )
    })
  }

  return <div className="users">{renderUsers()}</div>
}

export default UserTasks
