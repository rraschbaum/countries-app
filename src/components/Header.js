import React from 'react';

import styled from 'styled-components';

import { Container } from '../styles/style';

const NavStyled = styled.nav`

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Header = (props) => {
  return (
    <NavStyled>
      <Container>
        <div className="wrapper">
          <h1>Where in the world?</h1>
          <div>dark mode</div>
        </div>
      </Container>
    </NavStyled>
  );
}

export default Header;