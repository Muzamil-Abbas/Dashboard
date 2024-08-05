import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "../../styles/SearchBar.css"

const SearchBar = ({ placeholder, onSearchChange }) => (
  <div className="second-search-bar">
    <input
      type="text"
      placeholder={placeholder}
      className="second-search-input"
      onChange={onSearchChange}
    />
    <FontAwesomeIcon icon={faSearch} className="second-search-icon" />
  </div>
);

export default SearchBar;
