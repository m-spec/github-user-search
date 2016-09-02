import React, { PropTypes } from 'react'
import TextWrapper from '@components/Wrappers/TextWrapper'

const ListWrapper = ({ children = [], emptyText = 'Empty' }) => (
  <div>
    { children && (children.size || children.length) ? children : (
      <TextWrapper>{emptyText}</TextWrapper>
    )}
  </div>
)

ListWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  emptyText: PropTypes.string
}

export default ListWrapper
