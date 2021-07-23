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
      setTranslateValue(30);
    } else if (currentCount === 2) {
      setTranslateValue(60);
    } else if (currentCount === 3) {
      setTranslateValue(90);
    }
  };
  console.log(`count`, count);
  console.log(`currentQ`, currentQ);
  console.log(`currentCount`, currentCount);
  console.log(`translateValue`, translateValue);
  return (
    <S.StepperBox>
      <S.Container>
        <S.ImgBox>
          <S.ImgList
            className={
              (translateValue === 30 && `activeOne`) ||
              (translateValue === 60 && 'activeTwo') ||
              (translateValue === 90 && 'activeThree')
            }
          >
            <S.Img alt="koala" src={Img} />
          </S.ImgList>
        </S.ImgBox>
        <S.StepperBg>
          <S.StepperBgLine></S.StepperBgLine>
        </S.StepperBg>
        <S.Stepper>
          <S.StepperLine
            className={
              (translateValue === 30 && `activeOne`) ||
              (translateValue === 60 && 'activeTwo') ||
              (translateValue === 90 && 'activeThree')
            }
          ></S.StepperLine>
        </S.Stepper>
      </S.Container>
    </S.StepperBox>
  );
}

export default Stepper;
