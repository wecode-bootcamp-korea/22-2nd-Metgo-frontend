import React from 'react';
import Hero from './HeroSection/Hero';
import SurveyBox from './SurveyBox/SurveyBox';

import * as S from './SurveyEle';

function Survey() {
  return (
    <S.SurveyContainer>
      <Hero />
      <S.SurveySection>
        <SurveyBox />
        <S.InfoBox>
          <S.InfoTitle>숨고는 어떤 곳인가요?</S.InfoTitle>
          <S.InfoText>
            서비스가 필요한 고객과 서비스를 제공하는 숨은 고수를 쉽고 빠르게
            연결해드리는 전문가 매칭 서비스입니다. 1분 내외의 요청서를 작성하면,
            여러 고수님들이 맞춤형 견적을 보내드려요. 맘에 쏙 드는 고수의 맞춤형
            서비스를 받아보세요.
          </S.InfoText>
          <S.InfoTitle>숨고는 어떤 곳인가요?</S.InfoTitle>
          <S.InfoText>
            서비스가 필요한 고객과 서비스를 제공하는 숨은 고수를 쉽고 빠르게
            연결해드리는 전문가 매칭 서비스입니다. 1분 내외의 요청서를 작성하면,
            여러 고수님들이 맞춤형 견적을 보내드려요. 맘에 쏙 드는 고수의 맞춤형
            서비스를 받아보세요.
          </S.InfoText>
        </S.InfoBox>
      </S.SurveySection>
    </S.SurveyContainer>
  );
}

export default Survey;
