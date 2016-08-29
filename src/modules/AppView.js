import React from 'react';

//Top level rendering component, use to render logic before route rendering takes place
const AppView = ({children, ...props}) => (
  <div className="app-container">
    {children}
  </div>
)

export default AppView;
