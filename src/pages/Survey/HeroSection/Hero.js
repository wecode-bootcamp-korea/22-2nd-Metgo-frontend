import React from 'react';

// COMPONENTS
import { RatingStars } from '../../../RatingStars';

// STYLES
import * as S from './HeroEle';

function Hero({ rating, pageInfo }) {
  return (
    <S.HeroSection mainImg={pageInfo.image}>
      <S.HeroTextBox>
        <S.MainTitle>{pageInfo.name}</S.MainTitle>
        <S.StarsBox>
          {rating && <S.Stars>{RatingStars(rating)}</S.Stars>}
          <S.Rating>{rating}점</S.Rating>
        </S.StarsBox>
        <S.TotalBox>
          <S.Total>
            <h5>{pageInfo.masters}</h5>
            <p>활동 고수</p>
          </S.Total>
          <S.Total>
            <h5>{pageInfo.applications}</h5>
            <p>누적 요청서</p>
          </S.Total>
          <S.Total>
            <h5>{pageInfo.reviews}</h5>
            <p>리뷰 수</p>
          </S.Total>
        </S.TotalBox>
      </S.HeroTextBox>
    </S.HeroSection>
  );
}

export default Hero;
