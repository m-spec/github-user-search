import { describe, it } from 'mocha'
import { expect } from 'chai'
import User, { UserLocation, UserPicture } from '@models/User'

describe('User', () => {

  describe('default fields', () => {
    let user
    before(() => {
      user = new User()
    })

    it('has firstName', () => expect(user.firstName).to.equal('example'))
    it('has lastName', () => expect(user.lastName).to.equal('person'))
    it('has email', () => expect(user.email).to.equal('example.person@example.com'))
    it('has gender', () => expect(user.gender).to.equal(null))
    it('has firstName', () => expect(user.firstName).to.equal('example'))
    it('has picture', () => expect(user.picture).to.deep.equal(new UserPicture()))
    it('has location', () => expect(user.location).to.deep.equal(new UserLocation()))
  })

  describe('default user location', () => {
    let location
    before(() => {
      location = new UserLocation()
    })

    it('has street', () => expect(location.street).to.equal('123 example street'))
    it('has city', () => expect(location.city).to.equal('example town'))
    it('has postcode', () => expect(location.postcode).to.equal(12345))
  })

  describe('default user picture', () => {
    let picture
    before(() => {
      picture = new UserPicture()
    })

    it('has url for large picture', () => expect(picture.large).to.equal('large.jpg'))
    it('has url for medium picture', () => expect(picture.medium).to.equal('medium.jpg'))
    it('has url for thumbnail picture', () => expect(picture.thumbnail).to.equal('thumbnail.jpg'))
  })
})
