import React from 'react'
import { describe, it } from 'mocha'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import SearchBar from '../SearchBar'

describe('SearchBar', () => {
  const valueText = 'This is a searchbar, yo.'
  let input
  let wrapper
  let keyDownSpy
  beforeEach(() => {
    keyDownSpy = sinon.spy()
    wrapper = shallow(<SearchBar value={valueText} searchFunc={keyDownSpy} />)
    input = wrapper.find('.search-input')
  })
  it('Has an input within!', () => {
    expect(wrapper.find('.search-input').length).to.equal(1)
  })
  it('Calls action on enter press', () => {

    input.simulate('keyDown', { keyCode: 13, target: { value: valueText } })
    expect(keyDownSpy).to.have.property('callCount', 1)
  })
})
