// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import { Card } from 'semantic-ui-react';
import './styles.scss';
import ReposResult from './ReposResult';

// == Composant
const ReposResults = ({ results }) => {
  console.log(results);

  return (
    <div className="results__list">
      {
        results.map((result) => <ReposResult {...result} />)
      }
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
};

// == Export
export default ReposResults;
