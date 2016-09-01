import React, { PropTypes } from 'react'
import LoadingIndicator from '@components/LoadingIndicator/LoadingIndicator'
import './Button.css'

const Button = (props) => (
  <a
    className={props.isLoading ? 'button loading' : 'button'}
    onClick={props.isLoading ? null : props.onClick}
  >
    { props.isLoading ? <LoadingIndicator /> : props.children }
  </a>
)

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
}

export default Button
