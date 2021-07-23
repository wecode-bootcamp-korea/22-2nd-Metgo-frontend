import React, { useEffect, useState } from 'react';

import { surveyData, surveyData2 } from '../SurveyData';
import Radio from './Radio/Radio';
import Select from './Select/Select';
import Stepper from './Stepper/Stepper';

import * as S from './SurveyBoxEle';

function SurveyBox() {
  const [data, setData] = useState(false);
  let [currentQ, setCurrentQ] = useState(0);
  const [currentQdata, setCurrentQData] = useState(surveyData[currentQ]);
  const [radioValue, setRadioValue] = useState([]);
  const [selectedTown, setSelectedTown] = useState({
    city: '서울시',
    town: '',
  });

  useEffect(() => {
    {
      currentQ < 3 && setCurrentQData(surveyData[currentQ]);
    }
  }, [currentQ]);

  useEffect(() => {
    {
      currentQ === 3 && setData(true);
    }
  }, [currentQ]);

  const clickNextBtn = () => {
    if (currentQ < 3) {
      setCurrentQ(currentQ + 1);
    }
  };
  const clickPrevBtn = () => {
    if (currentQ === 0) {
      setCurrentQ(0);
      setData(false);
    } else if (currentQ > 0) {
      setCurrentQ(currentQ - 1);
      setData(false);
    }
  };
  const getSelectValue = e => {
    setSelectedTown({ city: '서울시', town: e.target.value });
  };

  const getRadioValue = e => {
    // 손봐야한다.
    setRadioValue([...radioValue, e.target.id]);
  };
  console.log(`radioValue`, radioValue);
  return (
    <S.SurveyFormBox>
      <S.SurveyForm>
        <Stepper />
        <S.SurveyLine>
          <div className="a">
            {data ? (
              <Select
                surveyData2={surveyData2}
                getSelectValue={getSelectValue}
              />
            ) : (
              <Radio
                currentQdata={currentQdata}
                getRadioValue={getRadioValue}
              />
            )}
          </div>
        </S.SurveyLine>
        <S.BtnLine>
          <button className="prev" onClick={clickPrevBtn}>
            이전
          </button>
          <button className="next" onClick={clickNextBtn}>
            다음
          </button>
        </S.BtnLine>
      </S.SurveyForm>
    </S.SurveyFormBox>
  );
}

export default SurveyBox;
