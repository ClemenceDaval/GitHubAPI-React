// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import { Input } from 'semantic-ui-react';
import './styles.scss';

// == Composant
const SearchBar = ({ searchValue, setSearchValue, loadResults }) => {
  function handleChange(event) {
    setSearchValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`chargement des résultats pour la recherche ${searchValue}`);
    loadResults();
  }

  return (
    <div className="searchBar">
      <form className="form" onSubmit={handleSubmit}>
        <Input type="text" fluid icon="search" iconPosition="left" placeholder="Rechercher..." onChange={handleChange} value={searchValue} />
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  loadResults: PropTypes.func.isRequired,
};

// == Export
export default SearchBar;
