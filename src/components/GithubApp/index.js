// == Import npm
import React from 'react';

// == Import
import Message from '../Message';
import ReposResults from '../ReposResults';
import SearchBar from '../SearchBar';
import logo from '../../assets/images/logo-github.png';

import './styles.scss';

// == Composant
const GithubApp = () => (
  <div className="githubApp">
    <img src={logo} alt="logo GitHub" />
    <SearchBar />
    <Message />
    <ReposResults />
  </div>
);

// == Export
export default GithubApp;
