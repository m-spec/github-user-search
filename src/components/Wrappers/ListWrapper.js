import React, { PropTypes } from 'react'
import TextWrapper from '@components/Wrappers/TextWrapper'

const ListWrapper = (props) => (
  <div>
    { props.children && props.children.size ? props.children : (
      <TextWrapper>{props.emptyText ? props.emptyText : 'Empty'}</TextWrapper>
    )}
  </div>
)

ListWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  emptyText: PropTypes.string
}

export default ListWrapper
