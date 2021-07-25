import React, { useState, useEffect } from 'react';

// CONPONENTS
import Hero from './HeroSection/Hero';
import InfoBox from './InfoBox/InfoBox';
import SurveyBox from './SurveyBox/SurveyBox';

// STYLES
import styled from 'styled-components';

import { BASE_URL } from '../../config';

function Survey() {
  const [pageInfo, setPageInfo] = useState([]);

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = () => {
    fetch(`${BASE_URL}/services/2`)
      .then(res => res.json())
      .then(res => setPageInfo(res.results[0]));
  };

  return (
    <SurveyContainer>
      <Hero pageInfo={pageInfo} />
      <SurveySection>
        <SurveyBox />
        <InfoBox />
      </SurveySection>
    </SurveyContainer>
  );
}

export default Survey;

const SurveyContainer = styled.div`
  padding-bottom: 2.5rem;
`;

const SurveySection = styled.div`
  width: 970px;
  margin: 1rem auto -2.5rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
