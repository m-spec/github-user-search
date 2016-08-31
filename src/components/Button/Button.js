import React, { PropTypes } from 'react'
import './Button.css'

const Button = (props) => (
  <a className="button" onClick={props.onClick}>
    { props.children }
  </a>
)

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button
