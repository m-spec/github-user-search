import React, { PropTypes } from 'react'

const PlainWrapper = (props) => (
  <div>
    { props.children }
  </div>
)

PlainWrapper.propTypes = {
  children: PropTypes.array.isRequired
}

export default PlainWrapper
