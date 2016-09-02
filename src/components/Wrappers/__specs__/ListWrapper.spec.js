import React from 'react'
import { describe, it } from 'mocha'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import ListWrapper from '../ListWrapper'
import TextWrapper from '../TextWrapper'

describe('ListWrapper', () => {
  it('Renders emptytext if no it has no children', () => {
    const emptyWrapper = shallow(<ListWrapper emptyText="empty" />)
    expect(emptyWrapper.find(TextWrapper).props().children).to.equal('empty')
  })

  it('Does not render emptyText if children present', () => {
    const filledWrapper = shallow(
      <ListWrapper emptyText="empty">
        <div className="test-child" />
        <div className="test-child" />
        <div className="test-child" />
      </ListWrapper>
    )
    expect(filledWrapper.find(TextWrapper).length).to.equal(0)
  })

  it('Renders given children', () => {
    const wrapper = shallow(
      <ListWrapper emptyText="empty">
        <div className="test-child" />)}
      </ListWrapper>
    )

    expect(wrapper.find('.test-child').length).to.equal(1)
  })
})
