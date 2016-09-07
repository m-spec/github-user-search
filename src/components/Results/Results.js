import React, { PropTypes } from 'react'
import './Results.css'

const Results = ({ children = [] }) => (
  <div className="results-container">
    { children && (children.size || children.length) ? children : (
      <p className="no-results-text">No results</p>
    )}
  </div>
)

Results.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  emptyText: PropTypes.string
}

export default Results
