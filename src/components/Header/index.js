// == Import npm
import React from 'react';
// import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
// == Import
import { NavLink } from 'react-router-dom';

import './styles.scss';

const Header = () => (
  <nav className="menu">
    <Menu>
      <NavLink
        key="recherche"
        to="/"
        exact
        activeClassName="menu-link__selected"
        className="menu-link"
      >
        <Menu.Item
          name="Recherche"
          // active={activeItem === 'editorials'}
          // onClick={this.handleItemClick}
        >
          Recherche
        </Menu.Item>
      </NavLink>
      <NavLink
        key="recherche"
        to="/faq"
        exact
        activeClassName="menu-link__selected"
        className="menu-link"
      >
        <Menu.Item
          name="FAQ"
          // active={activeItem === 'reviews'}
          // onClick={this.handleItemClick}
        >
          FAQ
        </Menu.Item>
      </NavLink>
    </Menu>
  </nav>
);

// Header.propTypes = {
// };

// == Export
export default Header;
