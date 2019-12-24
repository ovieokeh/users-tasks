export type IUser = {
  id: number
  name: string
}

export type IUsers = IUser[]

export type ITask = {
  id: number
  description: string
  state: 'done' | 'not done'
  user_id: number
}

export type ITasks = ITask[]
