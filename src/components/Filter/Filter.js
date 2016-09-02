import React, { PropTypes } from 'react'
import './Filter.css'

const Filter = (props) => (
  <div className="dropdown-container">
    {props.title ? <span className="dropdown-title">{props.title}:</span> : null}
    <select value={props.selected} onChange={(e) => props.onChange(props.name, e.target.value)}>
      {props.options.map((option, index) => (
        <option key={index} value={option[0]}>{option[1]}</option>
      ))}
    </select>
  </div>
)

Filter.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array.isRequired
}

export default Filter
