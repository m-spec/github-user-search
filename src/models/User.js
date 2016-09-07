import { Record } from 'immutable'

const User = Record({
  html_url: 'https://github.com/example',
  login: 'example',
  avatar_url: 'img/no-avatar.png',
  score: 0
})

export const fromJS = any => new User(any)

export default User
