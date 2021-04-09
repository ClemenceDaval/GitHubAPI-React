/* eslint-disable no-console */

// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';
import ReposResult from './ReposResult';

// == Composant
const ReposResults = (
  {
    results,
    nbOfResultsPerPage,
    setNbOfResultsPerPage,
    loadResults,
  },
) => {
  console.log(results);

  function handleClick() {
    setNbOfResultsPerPage(nbOfResultsPerPage + 9);
    console.log(nbOfResultsPerPage); // affiche 9...
    loadResults();
  }

  return (
    <div className="results">
      <div className="results__list">
        {
          results.map((result) => <ReposResult key={result.id} {...result} />)
        }
      </div>
      <button className="results__button" type="button" onClick={handleClick}> Plus de résultats </button>
    </div>
  );
};

ReposResults.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.number.isRequired,
      },
    ),
  ).isRequired,
  nbOfResultsPerPage: PropTypes.number.isRequired,
  setNbOfResultsPerPage: PropTypes.func.isRequired,
  loadResults: PropTypes.func.isRequired,
};

// == Export
export default ReposResults;
