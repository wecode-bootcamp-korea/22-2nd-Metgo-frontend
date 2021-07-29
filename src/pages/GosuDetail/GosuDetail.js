import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

import GosuMainSection from './GosuMainSection/GosuMainSection';
import GosuAsideBar from './GosuAsideBar/GosuAsideBar';
import { BASE_URL } from '../../config';

function GosuDetail() {
  const [gosuDetails, setGosuDetails] = useState({});
  const [gosuTotalReview, setGosuTotalReview] = useState([]);
  const { pathname } = useLocation();
  const params = useParams();

  useEffect(() => {
    const { id } = params;

    fetch(`${BASE_URL}/masters/${id}`)
      .then(res => res.json())
      .then(({ data }) => setGosuDetails(data[0]));
  }, []);

  useEffect(() => {
    const { id } = params;

    fetch(`${BASE_URL}/reviews/${id}`)
      .then(res => res.json())
      .then(data => setGosuTotalReview(data.results));
  }, []);

  const quotationForm = () => {
    const { id: master_id } = params;

    fetch(`${BASE_URL}/quotations`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
      body: JSON.stringify({ master_id }),
    })
      .then(res => res.json())
      .then(res => {
        console.log(`res`, res);
        if (res.message === 'Success') {
          alert('견적을 요청하였습니다!');
        }
      });
  };
  console.log(`gosuDetails`, gosuDetails);
  return (
    <GosuDetailContainer>
      {Object.keys(gosuDetails).length && (
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
