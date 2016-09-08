import React, { PropTypes } from 'react'
import './Button.css'

const Button = ({ text = 'Button', onClick }) => (
  <a
    className="button"
    onClick={onClick}
  >
    {text}
  </a>
)

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string
}

export default Button
