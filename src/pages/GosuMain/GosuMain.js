import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import GosuProfileSection from './GosuProfileSection';
import RequestListBar from './RequestListBar';
import { BASE_URL } from '../../config';

function GosuMain() {
  const [gosuProfileValue, setGosuProfileValue] = useState({});
  const [totalReview, setTotalReview] = useState([]);
  const [quotationUsers, setQuotationUsers] = useState([]);

  //고수 프로필 GET
  useEffect(() => {
    fetch('http://localhost:3000/data/gosuProfileData.json')
      // fetch(`${BASE_URL}/masters`, {
      //   method: 'GET',
      //   headers: {
      //     Authorization: localStorage.getItem('access_token'),
      //   },
      // })
      .then(res => res.json())
      .then(data => setGosuProfileValue(data.results[0]));
    // .then(data => setGosuDetails(data.data[0]));
  }, []);

  //고수 리뷰 GET
  useEffect(() => {
    // fetch('http://localhost:3000/data/userReviewData.json')
    fetch(`${BASE_URL}/reviews/1`)
      .then(res => res.json())
      .then(data => setTotalReview(data.results));
  }, []);

  //받은요청 리스트 GET
  const getQuotationList = () => {
    fetch(`${BASE_URL}/quotations`, {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
    })
      // fetch(`${BASE_URL}/quotations`)
      .then(res => res.json())
      .then(data => setQuotationUsers(data.results));
  };

  //리스트 수락 or 거절
  // const userMatching = () => {
  //   fetch('http://localhost:3000/quotations', {
  //     method: 'PATCH',
  //     headers: {
  //       Authorization: access_token,
  //     },
  //     body: JSON.stringify({
  //       quotation_id: '',
  //       is_completed: '1 or 0',
  //     }),
  //   })
  //     // fetch(`${BASE_URL}/quotations`)
  //     .then(res => res.json())
  //     .then(data => ㅁㄴㅇ);
  // };

  return (
    <GosuMainContainer>
      <GosuProfileSection
        gosuProfileValue={gosuProfileValue}
        totalReview={totalReview}
      />
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
