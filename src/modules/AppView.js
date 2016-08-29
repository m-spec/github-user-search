import React, { Proptypes } from 'react'

//Top level rendering component, use to render logic before route rendering takes place
const AppView = ({ children }) => (
  <div className="app-container">
    {children}
  </div>
)

AppView.propTypes = {
  children: Proptypes.array
}

export default AppView
