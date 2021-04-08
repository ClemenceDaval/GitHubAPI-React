// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import { Card } from 'semantic-ui-react';
import './styles.scss';

// == Composant
const ReposResult = ({ name, description, owner }) => (
  <div className="result__container">
    <Card
      className="result__card"
      image={owner.avatar_url}
      header={name}
      meta={owner.login}
      description={description}
    />
  </div>
);

ReposResult.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  owner: PropTypes.shape(
    {
      login: PropTypes.string.isRequired,
      avatar_url: PropTypes.string.isRequired,
    },
  ).isRequired,
};

// == Export
export default ReposResult;
