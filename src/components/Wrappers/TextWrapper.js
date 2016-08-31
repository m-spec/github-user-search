import React, { PropTypes } from 'react'

const TextWrapper = (props) => (
  <span>{props.children}</span>
)

TextWrapper.propTypes = {
  children: PropTypes.string.isRequired
}

export default TextWrapper
