import React from 'react';
import styled from 'styled-components';

import GosuProfileSection from './GosuProfileSection';
import RequestListBar from './RequestListBar';

function GosuMain() {
  return (
    <GosuMainContainer>
      <GosuProfileSection />
      <RequestListBar />
    </GosuMainContainer>
  );
}

const GosuMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1500px;
  padding-top: 30px;
`;

export default GosuMain;
