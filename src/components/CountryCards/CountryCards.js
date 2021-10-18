import React from 'react';
import styled from 'styled-components';
import CountryCard from './CountryCard';
import { Container } from '../../styles/style'

const CountryCardsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CountryCards = (props) => {

  const countryCards = props.countriesData.map(country => (
    <CountryCard
      country={{
        name: country.name,
        population: country.population,
        region: country.region,
        capital: country.capital,
        image: country.flags.svg
      }}
    />
  ));

  return (
    <Container>
      <CountryCardsStyled>
        {countryCards}
      </CountryCardsStyled>
    </Container>
  );
}

export default CountryCards;