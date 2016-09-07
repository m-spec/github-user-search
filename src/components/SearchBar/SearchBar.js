import React, { PropTypes } from 'react'
import './SearchBar.css'

const ENTER_KEY = 13

const SearchBar = ({ placeholder, searchFunc }) => (
  <div className="search-bar">
    <i className="material-icons">search</i>
    <input
      className="search-input"
      placeholder={placeholder}
      onKeyDown={(e) => e.keyCode === ENTER_KEY && searchFunc(e.target.value)}
      type="text"
    />
  </div>
)

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  searchFunc: PropTypes.func.isRequired
}

export default SearchBar
