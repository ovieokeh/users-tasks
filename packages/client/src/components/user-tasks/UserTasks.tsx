import * as React from 'react'
import Spinner from 'react-loader-spinner'

import User from '../user/User'
import useUsers from '../user-tasks/useUsers'
import './UserTasks.less'

const UserTasks: React.FC = () => {
  const [users, isLoading] = useUsers()
  const [selectedUser, selectUser] = React.useState<null | number>(null)

  const onUserClick = (userId: number) => () => {
    let nextUser

    if (!selectedUser || selectedUser !== userId) {
      nextUser = userId
    } else if (selectedUser === userId) {
      nextUser = null
    }

    selectUser(nextUser)
  }

  const renderUsers = () => {
    if (isLoading)
      return <Spinner type="Puff" color="#f4d8cd" height={80} width={80} />

    return users.map(user => {
      const isSelected = selectedUser && user.id === selectedUser

      return (
        <User
          key={user.id}
          user={user}
          isSelected={isSelected}
          onClick={onUserClick(user.id)}
        />
      )
    })
  }

  return <div className="users">{renderUsers()}</div>
}

export default UserTasks
