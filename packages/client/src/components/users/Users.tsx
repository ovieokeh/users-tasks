import * as React from 'react'
import Spinner from 'react-loader-spinner'

import useUsers from './useUsers'
import User from '../user/User'
import './Users.less'

const Users: React.FC = () => {
  const [users, isLoading] = useUsers()

  const renderUsers = () => {
    if (isLoading) return <Spinner type="Puff" height={80} width={80} />

    return users.map(user => <User key={user.id} user={user} />)
  }

  return <div className="users">{renderUsers()}</div>
}

export default Users
