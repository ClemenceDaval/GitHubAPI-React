// == Import npm
import React, { useEffect, useState } from 'react';

// On importe axios depuis la bibliothèque axios
import axios from 'axios';

// == Import
import data from 'src/data/repos';

import Message from '../Message';
import ReposResults from '../ReposResults';
import SearchBar from '../SearchBar';
import logo from '../../assets/images/logo-github.png';

import './styles.scss';

// == Composant
const GithubApp = () => {
  const [searchValue, setSearchValue] = useState("react");
  const [results, setResults] = useState([]);
  const [nbOfResults, setNumberOfResults] = useState('0');

  useEffect(
    () => {
      axios.get(`https://api.github.com/search/repositories?q= ${searchValue}`)
        .then((response) => {
          console.log('exécuté en cas de succès');
          console.log(response);
          setResults(response.data.items);
          setNumberOfResults(parseInt(response.data.total_count, 10));
        })
        .catch((error) => {
          console.log('une erreur s\'est produite', error);
        })
        .finally(() => {
          console.log('exécuté que tout se soit bien passé ou pas');
        });
    },
    [],
    // ajouter un tableau vide en deuxième argument de useEffect
    // permet de lancer une seule fois l'effet, au montage du composant
  );

  return (
    <div className="githubApp">
      <img src={logo} alt="logo GitHub" />
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <Message totalCount={nbOfResults} />
      <ReposResults results={results} />
    </div>
  );
};

// == Export
export default GithubApp;
