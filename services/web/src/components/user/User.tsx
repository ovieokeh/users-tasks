import * as React from 'react'
import { FaEdit, FaMinus, FaAngleDown, FaCheck } from 'react-icons/fa'

import Tasks from '../tasks/Tasks'
import { IUser } from '../types'
import './User.less'

type IProps = {
  user: IUser
  isSelected: boolean
  onClick: () => void
  onDelete: () => void
  onUpdate: (updatedName: string) => void
}

const { useState } = React

const User: React.FC<IProps> = ({
  user,
  isSelected,
  onClick,
  onDelete,
  onUpdate
}) => {
  const indicatorClassname = isSelected ? 'flip' : ''
  const [isEditing, setIsEditing] = useState(false)
  const [nameInput, setNameInput] = useState(user.name)

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    updateName()
  }

  const updateName = () => {
    if (user.name === nameInput) return setIsEditing(false)

    onUpdate(nameInput)
    setIsEditing(false)
  }

  return (
    <>
      <div className="user">
        {isEditing ? (
          <form className="user__form" onSubmit={onFormSubmit}>
            <input
              className="user__form__input"
              type="text"
              value={nameInput}
              onChange={e => setNameInput(e.target.value)}
              autoFocus
            />
          </form>
        ) : (
          <div className="user__details" onClick={onClick}>
            <FaAngleDown
              className={`user__details__arrow ${indicatorClassname}`}
            />{' '}
            <p className="user__details__name">{user.name}</p>
          </div>
        )}

        <div className="user__actions">
          {isEditing ? (
            <FaCheck
              onClick={updateName}
              className="user__actions__action check"
            />
          ) : (
            <FaEdit
              onClick={() => setIsEditing(true)}
              className="user__actions__action edit"
            />
          )}
          <FaMinus onClick={onDelete} className="user__actions__action minus" />
        </div>
      </div>
      <Tasks userId={user.id} show={isSelected} />
    </>
  )
}
export default User
