import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import GosuMainSection from './GosuMainSection/GosuMainSection';
import GosuAsideBar from './GosuAsideBar/GosuAsideBar';
import { BASE_URL } from '../../config';

function GosuDetail() {
  const [gosuDetails, setGosuDetails] = useState([]);
  const [gosuTotalReview, setGosuTotalReview] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/gosuDetail.json')
      // fetch(`${BASE_URL}/masters/profile/1`)
      .then(res => res.json())
      .then(data => setGosuDetails(data[0]));
    // .then(data => setGosuDetails(data.data[0]));
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/data/userReviewData.json')
      // fetch(`${BASE_URL}/reviews/${id}`)
      .then(res => res.json())
      .then(data => setGosuTotalReview(data.results));
  }, []);

  const quotationForm = () => {
    fetch('http://15.165.15.135:8000/applications', {
      method: 'POST',
      body: JSON.stringify({
        user_id: 15,
        master_id: 307,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          alert('견적을 요청하였습니다!');
          console.log('견적요청 성공');
        }
      });
  };

  return (
    <GosuDetailContainer>
      {gosuDetails.length !== 0 && (
        <>
          <GosuMainSection
            gosuDetails={gosuDetails}
            gosuTotalReview={gosuTotalReview}
          />
          <GosuAsideBar
            gosuDetails={gosuDetails}
            quotationForm={quotationForm}
          />
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
