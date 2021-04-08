/* eslint-disable no-console */
// == Import npm
import React, { useState } from 'react';

// On importe axios depuis la bibliothèque axios
import axios from 'axios';

import Message from '../Message';
import ReposResults from '../ReposResults';
import SearchBar from '../SearchBar';
import logo from '../../assets/images/logo-github.png';

import './styles.scss';

// == Composant
const GithubApp = () => {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState('Lancez une recherche pour trouver un repos.');

  const loadResults = () => {
    axios.get(`https://api.github.com/search/repositories?q= ${searchValue}`)
      .then((response) => {
        console.log('exécuté en cas de succès');
        // console.log(response);
        setResults(response.data.items);
        const nbOfResults = response.data.total_count;
        if (nbOfResults === 1) {
          setMessage('La recherche a donné 1 résultat.');
          setOpen(true);
        }
        else if (nbOfResults > 1) {
          setMessage(`La recherche a donné ${nbOfResults} résultats.`);
          setOpen(true);
        }
        else if (nbOfResults === 0) {
          setMessage('Aucun résultat');
          setOpen(false);
        }
      })
      .catch((error) => {
        console.log('une erreur s\'est produite', error);
        setMessage('Une erreur s\'est produite. Veuillez renouveler votre recherche');
        setOpen(false);
      })
      .finally(() => {
        console.log('exécuté que tout se soit bien passé ou pas');
      });
  };

  return (
    <div className="githubApp">
      <img src={logo} alt="logo GitHub" />
      <SearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        loadResults={loadResults}
      />
      <Message message={message} />
      { open && <ReposResults results={results} /> }
    </div>
  );
};

// == Export
export default GithubApp;
