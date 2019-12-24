import * as React from 'react'
import { FaEdit, FaMinus, FaAngleDown } from 'react-icons/fa'

import Tasks from '../tasks/Tasks'
import { IUser } from '../types'
import './User.less'

type IProps = {
  user: IUser
  isSelected: boolean
  onClick: () => void
}

const User: React.FC<IProps> = ({ user, isSelected, onClick }) => {
  const indicatorClassname = isSelected ? 'flip' : ''

  return (
    <>
      <div className="user">
        <div className="user__details" onClick={onClick}>
          <FaAngleDown
            className={`user__details__arrow ${indicatorClassname}`}
          />{' '}
          <p className="user__details__name">{user.name}</p>
        </div>

        <div className="user__actions">
          <FaEdit className="user__actions__action edit" />
          <FaMinus className="user__actions__action minus" />
        </div>
      </div>
      <Tasks userId={user.id} show={isSelected} />
    </>
  )
}
export default User
