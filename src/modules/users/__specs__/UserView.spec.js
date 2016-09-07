import React from 'react'
import { describe, it, beforeEach } from 'mocha'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import { List } from 'immutable'

import SearchBar from '@components/SearchBar/SearchBar'
import Card from '@components/Card/Card'

import UsersView from '../UsersView'

function getUserRecordStub() {
  return {
    login: 'test',
    html_url: 'test',
    avatar_url: 'test.png'
  }
}

describe('UsersView', () => {

  let actions
  let wrapper
  let emptyWrapper

  const valueText = 'text is the value'

  beforeEach(() => {
    actions = { searchUsers: sinon.spy() }

    emptyWrapper = shallow(
      <UsersView
        usersList={new List()}
        actions={actions}
        fetchingUser={false}
      />
    )

    wrapper = shallow(
      <UsersView
        usersList={new List([getUserRecordStub(), getUserRecordStub()])}
        actions={actions}
        fetchingUser={false}
      />
    )
  })

  it('renders correct amount of cards', () => {
    expect(wrapper.find(Card).length).to.equal(2)
  })
})
