// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import

import './styles.scss';

// == Composant
const Message = ({ totalCount }) => (
  <p className="message">
    La recherche a donné {totalCount} résultats
  </p>
);

Message.propTypes = {
  totalCount: PropTypes.number.isRequired,
};

// == Export
export default Message;
