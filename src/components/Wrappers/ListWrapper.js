import React, { PropTypes } from 'react'
import TextWrapper from '@components/Wrappers/TextWrapper'
import LoadingIndicator from '@components/LoadingIndicator/LoadingIndicator'

const ListWrapper = (props) => (
  <div>
    {props.isLoading && <LoadingIndicator />}
    { props.children ? props.children : (
      <TextWrapper>{props.emptyText ? props.emptyText : 'Empty'}</TextWrapper>
    )}
  </div>
)

ListWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  isLoading: PropTypes.bool,
  emptyText: PropTypes.string
}

export default ListWrapper
