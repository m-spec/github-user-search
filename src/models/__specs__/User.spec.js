import { describe, it } from 'mocha'
import { expect } from 'chai'
import User from '@models/User'

describe('User', () => {

  describe('default fields', () => {
    let user
    before(() => {
      user = new User()
    })

    it('has html_url', () => expect(user.html_url).to.equal('https://github.com/example'))
    it('has login', () => expect(user.login).to.equal('example'))
    it('has avatar_url', () => expect(user.avatar_url).to.equal('img/no-avatar.png'))
    it('has score', () => expect(user.score).to.equal(0))
  })
})
