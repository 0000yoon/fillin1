import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  padding: 10px 20px;
  background-color: #333;
  color: white;
  text-align: center;
  font-size: 14px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      &copy; 2024 Company Name. All rights reserved.
    </FooterContainer>
  );
}

export default Footer;
