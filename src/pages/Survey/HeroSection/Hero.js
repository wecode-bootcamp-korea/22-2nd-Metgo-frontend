import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// STYLES
import * as S from './HeroEle';

// APIKEY
import { BASE_URL } from '../../../config';

function Hero() {
  const [pageInfo, setPageInfo] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = () => {
    const serviceId = history.location.pathname.slice(
      history.location.pathname.length - 1
    );
    fetch(`${BASE_URL}/services/${serviceId}`)
      .then(res => res.json())
      .then(res => setPageInfo(res.results[0]));
  };
  return (
    <S.HeroSection>
      <S.HeroTextBox>
        <S.MainTitle>{pageInfo.name}</S.MainTitle>
        <S.StarsBox>
          <S.Stars>
            <S.Star>별</S.Star>
            <S.Star>별</S.Star>
            <S.Star>별</S.Star>
            <S.Star>별</S.Star>
            <S.Star>별</S.Star>
          </S.Stars>
          <S.Rating>{pageInfo.rating}점</S.Rating>
        </S.StarsBox>
        <S.TotalBox>
          <S.Total>
            <h5>1,682</h5>
            <p>활동 고수</p>
          </S.Total>
          <S.Total>
            <h5>1,682</h5>
            <p>누적 요청서</p>
          </S.Total>
          <S.Total>
            <h5>1,682</h5>
            <p>리뷰 수</p>
          </S.Total>
        </S.TotalBox>
      </S.HeroTextBox>
    </S.HeroSection>
  );
}

export default Hero;
