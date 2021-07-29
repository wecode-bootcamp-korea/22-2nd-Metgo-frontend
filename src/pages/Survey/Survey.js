import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

// CONPONENTS
import Hero from './HeroSection/Hero';
import InfoBox from './InfoBox/InfoBox';
import SurveyBox from './SurveyBox/SurveyBox';

// STYLES
import styled from 'styled-components';

// APIKEY
import { BASE_URL } from '../../config';

function Survey() {
  const [pageInfo, setPageInfo] = useState([]);
  const [rating, setRating] = useState();
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    getInfo();
  }, []);

  useEffect(() => {
    cuttingRating();
  }, [pageInfo]);

  const cuttingRating = () => {
    setRating(Math.floor(pageInfo.rating));
  };

  const getInfo = () => {
    const { id } = params;

    fetch(`${BASE_URL}/services/${id}`, {
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
    })
      .then(res => res.json())
      .then(res => setPageInfo(res.results[0]));
  };

  return (
    <SurveyContainer>
      <Hero pageInfo={pageInfo} rating={rating} />
      <SurveySection>
        <SurveyBox pageInfo={pageInfo} />
        <InfoBox />
      </SurveySection>
    </SurveyContainer>
  );
}

export default Survey;

const SurveyContainer = styled.div``;

const SurveySection = styled.div`
  ${({ theme }) => theme.flex('center', 'flex-start', null)}
  width: 970px;
  margin: 1rem auto 0;
`;
