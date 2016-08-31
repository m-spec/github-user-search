import React, { PropTypes } from 'react'
import './Toolbar.css'

const Toolbar = (props) => (
  <div className="toolbar">
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
