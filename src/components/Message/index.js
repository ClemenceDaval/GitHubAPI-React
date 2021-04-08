// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import

import './styles.scss';

// == Composant
const Message = ({ message }) => (
  <p className="message">
    {message}
  </p>
);

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

// == Export
export default Message;
