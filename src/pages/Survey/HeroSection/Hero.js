import React from 'react';

import * as S from './HeroEle';

function Hero() {
  return (
    <S.HeroSection>
      <S.HeroTextBox>
        <S.MainTitle>결혼식 사회자</S.MainTitle>
        <S.StarsBox>
          <S.Stars>
            <S.Star>별</S.Star>
            <S.Star>별</S.Star>
            <S.Star>별</S.Star>
            <S.Star>별</S.Star>
            <S.Star>별</S.Star>
          </S.Stars>
          <S.Rating>4.5점</S.Rating>
        </S.StarsBox>
        <S.TotalBox>
          <S.Total>
            <h5>1,682</h5>
            <p>사회자</p>
          </S.Total>
          <S.Total>
            <h5>1,682</h5>
            <p>사회자</p>
          </S.Total>
          <S.Total>
            <h5>1,682</h5>
            <p>사회자</p>
          </S.Total>
        </S.TotalBox>
      </S.HeroTextBox>
    </S.HeroSection>
  );
}

export default Hero;
