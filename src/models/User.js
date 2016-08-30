import { Record } from 'immutable'

export const UserLocation = Record({
  street: '123 example street',
  city: 'example town',
  postcode: 12345
})

export const UserPicture = Record({
  large: 'large.jpg',
  medium: 'medium.jpg',
  thumbnail: 'thumbnail.jpg'
})

const User = Record({
  gender: null,
  email: 'example.person@example.com',
  firstName: 'example',
  lastName: 'person',
  location: UserLocation(),
  picture: UserPicture()
})

export const fromJS = any => new User(any)
  .update('firstName', fName => (any && any.name) ? any.name.first : fName)
  .update('lastName', lName => (any && any.name) ? any.name.last : lName)
  .update('picture', map => new UserPicture(map))
  .update('location', map => new UserLocation(map))

export default User
