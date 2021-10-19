import React from 'react';

import styled from 'styled-components';
import { Container } from '../styles/style';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../store/themeSlice';

const NavStyled = styled.nav`

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Header = (props) => {
  const themeStatus = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  }

  const currentThemeText = themeStatus ? "Dark mode" : "Light mode";

  return (
    <NavStyled>
      <Container>
        <div className="wrapper">
          <h1>Where in the world?</h1>
          <button onClick={handleToggleTheme}>{currentThemeText}</button>
        </div>
      </Container>
    </NavStyled>
  );
}

export default Header;