import React, { useEffect, useState } from 'react';

import * as S from './StepperEle';
const Img = '/images/koala.png';

function Stepper({ count, currentQ }) {
  const [currentCount, setCurrentCount] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);

  useEffect(() => {
    setCurrentCount(currentQ);
  }, [currentQ]);

  useEffect(() => {
    stpperChange();
  }, [currentCount]);

  const stpperChange = () => {
    if (currentCount === 0) {
      setTranslateValue(0);
    } else if (currentCount === 1) {
      setTranslateValue(26);
    } else if (currentCount === 2) {
      setTranslateValue(56);
    } else if (currentCount === 3) {
      setTranslateValue(86);
    }
  };

  return (
    <S.StepperBox>
      <S.Container>
        <S.ImgBox>
          <S.ImgList
            className={
              (translateValue === 26 && `activeOne`) ||
              (translateValue === 56 && 'activeTwo') ||
              (translateValue === 86 && 'activeThree')
            }
          >
            <S.Persentage>{translateValue}%</S.Persentage>
            <S.Img alt="koala" src={Img} />
          </S.ImgList>
        </S.ImgBox>
        <S.StepperBg>
          <S.StepperBgLine></S.StepperBgLine>
        </S.StepperBg>
        <S.Stepper>
          <S.StepperLine
            className={
              (translateValue === 26 && `activeOne`) ||
              (translateValue === 56 && 'activeTwo') ||
              (translateValue === 86 && 'activeThree')
            }
          ></S.StepperLine>
        </S.Stepper>
      </S.Container>
    </S.StepperBox>
  );
}

export default Stepper;
