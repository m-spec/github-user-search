import React, { PropTypes } from 'react'
import './Toolbar.css'

const Toolbar = (props) => (
  <div className="toolbar">
    <img src="img/ic_search_github_white.png" alt="logo" />
    <div className="toolbar-title">
      { props.title }
    </div>
    { props.children }
  </div>
)

Toolbar.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}

export default Toolbar
