import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from './fillin_logo.svg';

const HeaderContainer = styled.header`
  width: 100%;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
`;

const Header = () => {
  return (
    <HeaderContainer>
    <Logo/>
      메인 화면
    </HeaderContainer>
  );
}

export default Header;
