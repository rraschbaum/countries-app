import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../styles/style';

const CountryDetails = (props) => {
  return (
    <Container>
      <Link to="/">back</Link>
      <h1>test</h1>
    </Container>
  );
}

export default CountryDetails;