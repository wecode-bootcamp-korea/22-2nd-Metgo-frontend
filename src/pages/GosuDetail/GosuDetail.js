import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import GosuMainSection from './GosuMainSection/GosuMainSection';
import GosuAsideBar from './GosuAsideBar/GosuAsideBar';
import { BASE_URL } from '../../config';

function GosuDetail() {
  const [gosuDetails, setGosuDetails] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/gosuDetail.json')
      // fetch('{BASE_URL}/masters/profile/1')
      .then(res => res.json())
      .then(data => setGosuDetails(data[0]));
    // .then(data => setGosuDetails(data.data[0]));
  }, []);

  return (
    <GosuDetailContainer>
      {gosuDetails.length !== 0 && (
        <>
          <GosuMainSection gosuDetails={gosuDetails} />
          <GosuAsideBar gosuDetails={gosuDetails} />
        </>
      )}
    </GosuDetailContainer>
  );
}

const GosuDetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1500px;
`;

export default GosuDetail;
