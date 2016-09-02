import React from 'react'
import { describe, it, beforeEach } from 'mocha'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { spy } from 'sinon'
import { List } from 'immutable'

import Toolbar from '@components/Toolbar/Toolbar'
import Button from '@components/Button/Button'
import Card from '@components/Card/Card'

import UsersView from '../UsersView'

function getUserRecordStub() {
  return {
    picture: { large: '' },
    location: { city: 'a' }
  }
}

describe('UsersView', () => {

  let actions
  let wrapper
  let emptyWrapper

  beforeEach(() => {
    actions = { requestUser: spy() }

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

  it('has toolbar with button with correct action', () => {
    const toolBar = emptyWrapper.find(Toolbar)
    const toolBarButton = toolBar.find(Button).first()
    toolBarButton.simulate('click')
    expect(actions.requestUser).to.have.property('callCount', 1)
  })

  it('renders correct amount of cards', () => {
    expect(wrapper.find(Card).length).to.equal(2)
  })
})
