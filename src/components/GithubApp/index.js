// == Import npm
import React from 'react';

// == Import
import data from 'src/data/repos';

import Message from '../Message';
import ReposResults from '../ReposResults';
import SearchBar from '../SearchBar';
import logo from '../../assets/images/logo-github.png';

import './styles.scss';

// == Composant
const GithubApp = () => {
  // console.log(data.items);

  return (
    <div className="githubApp">
      <img src={logo} alt="logo GitHub" />
      <SearchBar />
      <Message totalCount={data.total_count} />
      <ReposResults results={data.items} />
    </div>
  );
};

// == Export
export default GithubApp;
