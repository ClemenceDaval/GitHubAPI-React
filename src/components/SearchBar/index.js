// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import { Input } from 'semantic-ui-react';
import './styles.scss';

// == Composant
const SearchBar = ({ searchValue, setSearchValue }) => {
  function handleChange(event) {
    setSearchValue(event.target.value);
  }

  return (
    <div className="searchBar">
      <Input type="text" fluid icon="search" iconPosition="left" placeholder="Rechercher..." onChange={handleChange} value={searchValue} />
    </div>
  );
};

SearchBar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};

// == Export
export default SearchBar;
