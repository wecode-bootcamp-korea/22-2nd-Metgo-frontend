import React from 'react';

// CONPONENTS
import Hero from './HeroSection/Hero';
import InfoBox from './InfoBox/InfoBox';
import SurveyBox from './SurveyBox/SurveyBox';

// STYLES
import styled from 'styled-components';

function Survey() {
  return (
    <SurveyContainer>
      <Hero />
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
  ${({ theme }) => theme.flex('center', 'flex-start', null)}
  width: 970px;
  margin: 1rem auto -2.5rem;
`;
