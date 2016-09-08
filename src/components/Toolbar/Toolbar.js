import React, { PropTypes } from 'react'
import './Toolbar.css'

const Toolbar = ({ title }) => (
  <div className="toolbar">
    <img src="img/ic_search_github_white.png" alt="logo" />
    <div className="toolbar-title">
      { title }
    </div>
  </div>
)

Toolbar.propTypes = {
  title: PropTypes.string
}

export default Toolbar
