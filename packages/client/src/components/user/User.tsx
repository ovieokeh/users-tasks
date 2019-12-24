import * as React from 'react'
import { FaUser, FaEdit, FaMinus } from 'react-icons/fa'

import { IUser } from '../types'
import './User.less'

type IProps = {
  user: IUser
}

const User: React.FC<IProps> = ({ user }) => (
  <div key={user.id} className="user">
    <div className="user__details">
      <FaUser className="user__details__avatar" />{' '}
      <p className="user__details__name">{user.name}</p>
    </div>

    <div className="user__actions">
      <FaEdit className="user__actions__action edit" />
      <FaMinus className="user__actions__action minus" />
    </div>
  </div>
)

export default User
