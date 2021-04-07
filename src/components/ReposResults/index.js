// == Import npm
import React from 'react';

// == Import
import { Card } from 'semantic-ui-react';
import './styles.scss';
import logo from '../../assets/images/logo-github.png';

// == Composant
const ReposResults = () => (
  <div className="results__list">
    <Card.Group itemsPerRow={3}>
      <Card
        className="results__item"
        image={logo}
        header="freeCodeCamp"
        meta="freeCodeCamp"
        description="blablabla salut blablabla salut salut salut blabla bla"
      />
      <Card
        className="results__item"
        image={logo}
        header="freeCodeCamp"
        meta="freeCodeCamp"
        description="blablabla salut blablabla salut salut salut blabla bla"
      />
      <Card
        className="results__item"
        image={logo}
        header="freeCodeCamp"
        meta="freeCodeCamp"
        description="blablabla salut blablabla salut salut salut blabla bla"
      />
      <Card
        className="results__item"
        image={logo}
        header="freeCodeCamp"
        meta="freeCodeCamp"
        description="blablabla salut blablabla salut salut salut blabla bla"
      />
      <Card
        className="results__item"
        image={logo}
        header="freeCodeCamp"
        meta="freeCodeCamp"
        description="blablabla salut blablabla salut salut salut blabla bla"
      />
      <Card
        className="results__item"
        image={logo}
        header="freeCodeCamp"
        meta="freeCodeCamp"
        description="blablabla salut blablabla salut salut salut blabla bla"
      />
    </Card.Group>
  </div>
);

// == Export
export default ReposResults;
