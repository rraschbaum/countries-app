import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CountryCardStyled = styled.div`
  width: 300px;
  flex-shrink: 3;

  img {
    width: 300px;
    object-fit: cover;
  }
`;

const CountryCard = (props) => {
  const {
    name,
    population,
    region,
    capital,
    image
  } = props.country

  const link = `/${name.toLowerCase().replace(' ','-')}`;

  return (
    <Link to={link}>
      <CountryCardStyled>
        <img src={image} alt='placeholder' />
        <h2>{name}</h2>
        <ul>
          <li><span>Population: </span>{population}</li>
          <li><span>Region: </span>{region}</li>
          <li><span>Capital: </span>{capital}</li>
        </ul>
      </CountryCardStyled>
    </Link>
  );
}

export default CountryCard;