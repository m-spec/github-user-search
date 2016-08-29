import React, { PropTypes } from 'react'

//Top level rendering component, use to render logic before route rendering takes place
const AppView = ({ children }) => (
  <div className="app-container">
    {children}
  </div>
)

AppView.propTypes = {
  children: PropTypes.object
}

export default AppView
