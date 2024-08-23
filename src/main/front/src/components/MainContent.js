import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const MainContent = () => {
  return (
    <MainContainer>
      <h1>환영합니다!</h1>
      <p>이곳은 메인 컨텐츠 영역입니다.</p>
    </MainContainer>
  );
}

export default MainContent;
