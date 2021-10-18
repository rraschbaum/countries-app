import React from 'react';

import { Container } from '../styles/style';
import styled from 'styled-components';

const InputsStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Inputs = (props) => {
  return (
    <Container>
      <InputsStyled>
        <input
          type="search"
          placeholder="Search for a country..."
        />
        <select>
          <option vaule="">Filter by Region</option>
        </select>
      </InputsStyled>
    </Container>
  );
}

export default Inputs;