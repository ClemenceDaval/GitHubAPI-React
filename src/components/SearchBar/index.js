// == Import npm
import React from 'react';

// == Import
import { Input } from 'semantic-ui-react';
import './styles.scss';

// == Composant
const SearchBar = () => (
  <div className="searchBar">
    <Input fluid icon="search" iconPosition="left" placeholder="Rechercher..." />
  </div>
);

// == Export
export default SearchBar;
