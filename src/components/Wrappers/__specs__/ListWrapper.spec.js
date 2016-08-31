import React from 'react'
import { describe, it } from 'mocha'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import LoadingIndicator from '@components/LoadingIndicator/LoadingIndicator'
import ListWrapper from '../ListWrapper'
import TextWrapper from '../TextWrapper'

describe('ListWrapper', () => {
  it('Renders emptytext if no it has no children', () => {
    const emptyWrapper = shallow(<ListWrapper emptyText="empty" />)
    expect(emptyWrapper.find(TextWrapper).props().children).to.equal('empty')

    const filledWrapper = shallow(
      <ListWrapper emptyText="empty">
        <div className="test-child" />
      </ListWrapper>
    )
    expect(filledWrapper.find(TextWrapper).length).to.equal(0)
  })
  it('Renders Loading indicator if loading prop set to true', () => {
    const wrapper = shallow(<ListWrapper isLoading />)
    expect(wrapper.find(LoadingIndicator).length).to.equal(1)
  })
  it('Renders given children', () => {
    const wrapper = shallow(
      <ListWrapper emptyText="empty">
        <div className="test-child" />
      </ListWrapper>
    )

    expect(wrapper.find('.test-child').length).to.equal(1)
  })
})
