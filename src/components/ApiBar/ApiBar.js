import React, { PropTypes } from 'react'
import Button from '@components/Button/Button'
import './ApiBar.css'

let apiKey = ''

const ApiBar = ({ changeApiKey }) => (
  <div className="api-bar">
    <p>Please set api-key for GitHub before continuing</p>
    <input
      type="text"
      onChange={(e) => { apiKey = e.target.value }}
    />
    <Button text="set" onClick={() => changeApiKey(apiKey)} />
    <a
      className="dismiss"
      onClick={() => changeApiKey('null')}
    >
      <i className="material-icons">close</i>
    </a>
  </div>
)

ApiBar.propTypes = {
  changeApiKey: PropTypes.func.isRequired
}

export default ApiBar
