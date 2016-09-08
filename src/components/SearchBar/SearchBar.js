import React, { PropTypes } from 'react'
import './SearchBar.css'

const ENTER_KEY = 13

const SearchBar = ({ placeholder, filter, searchFunc, setFilter }) => (
  <div className="search-bar">
    <i className="material-icons">search</i>
    <input
      className="search-input"
      placeholder={placeholder}
      value={filter.freetext}
      onChange={(e) => setFilter('freetext', e.target.value)}
      onKeyDown={(e) => e.keyCode === ENTER_KEY && searchFunc()}
      type="text"
    />
    <label htmlFor="language-select">Language:</label>
    <select
      id="language-select"
      value={filter.language}
      onChange={(e) => setFilter('language', e.target.value)}
    >
      <option value="all">all</option>
      <option value="javascript">javascript</option>
      <option value="python">python</option>
    </select>
    <label htmlFor="location-select">Location:</label>
    <select
      id="location-select"
      value={filter.location}
      onChange={(e) => setFilter('location', e.target.value)}
    >
      <option value="all">all</option>
      <option value="finland">Finland</option>
      <option value="germany">Germany</option>
      <option value="sweder">Sweden</option>
      <option value="uk">UK</option>
    </select>
  </div>
)

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  filter: PropTypes.object,
  searchFunc: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired
}

export default SearchBar
