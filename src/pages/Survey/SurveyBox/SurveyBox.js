import React, { useEffect, useState } from 'react';

import {
  surveyData,
  surveyData2,
  questionOne,
  questionTwo,
  questionThree,
} from '../SurveyData';
// import Radio from './Radio/Radio';
import RadioOne from './Radio/RadioOne';
import RadioThree from './Radio/RadioThree';
import RadioTwo from './Radio/RadioTwo';
import Select from './Select/Select';
import Stepper from './Stepper/Stepper';

import * as S from './SurveyBoxEle';

function SurveyBox() {
  const [isRadioOneOpen, setIsRadioOneOpen] = useState(true);
  const [isRadioTwoOpen, setIsRadioTwoOpen] = useState(false);
  const [isRadioThreeOpen, setIsRadioThreeOpen] = useState(false);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [count, setCount] = useState(0);
  let [currentQ, setCurrentQ] = useState(0);
  const [selectedTown, setSelectedTown] = useState({
    city: '서울시',
    town: '',
  });
  const [radioValue, setRadioValue] = useState({
    q1: '',
    q2: '',
    q3: '',
  });

  useEffect(() => {
    {
      currentQ < 3 && openSurvey();
    }
  }, [currentQ]);

  useEffect(() => {
    {
      currentQ === 3 && openSurvey();
    }
  }, [currentQ]);

  const hi = () => {
    if (
      (currentQ === 0 && radioValue.q1 !== '') ||
      (currentQ === 1 && radioValue.q2 !== '') ||
      (currentQ === 2 && radioValue.q3 !== '')
    ) {
      clickNextBtn();
    } else if (currentQ === 3 && selectedTown.town !== '') {
      alert('this is last question');
    }
  };

  const deliverCount = () => {
    setCount(currentQ);
  };

  const clickNextBtn = () => {
    if (currentQ < 3) {
      setCurrentQ(currentQ + 1);
      deliverCount();
    }
  };

  const clickPrevBtn = () => {
    if (currentQ === 0) {
      setCurrentQ(0);
    } else if (currentQ > 0) {
      setCurrentQ(currentQ - 1);
    }
  };

  const openSurvey = () => {
    if (currentQ === 0) {
      setIsRadioOneOpen(true);
      setIsRadioTwoOpen(false);
      setIsRadioThreeOpen(false);
      setIsSelectOpen(false);
    } else if (currentQ === 1) {
      setIsRadioOneOpen(false);
      setIsRadioTwoOpen(true);
      setIsRadioThreeOpen(false);
      setIsSelectOpen(false);
    } else if (currentQ === 2) {
      setIsRadioOneOpen(false);
      setIsRadioTwoOpen(false);
      setIsRadioThreeOpen(true);
      setIsSelectOpen(false);
    } else {
      setIsRadioOneOpen(false);
      setIsRadioTwoOpen(false);
      setIsRadioThreeOpen(false);
      setIsSelectOpen(true);
    }
  };

  const getSelectValue = e => {
    setSelectedTown({ city: '서울시', town: e.target.value });
  };

  const getRadioValue = e => {
    const answerEle = document.querySelectorAll('.answer');
    answerEle.forEach(answer => {
      if (answer.checked) {
        if (answer.name === '0') {
          setRadioValue({ ...radioValue, q1: answer.id });
        } else if (answer.name === '1') {
          setRadioValue({ ...radioValue, q2: answer.id });
        } else {
          setRadioValue({ ...radioValue, q3: answer.id });
        }
      }
    });
  };
  return (
    <S.SurveyFormBox>
      <S.SurveyForm>
        <Stepper count={count} currentQ={currentQ} />
        <S.SurveyLine>
          <div className="a">
            {isRadioOneOpen && (
              <RadioOne
                questionOne={questionOne}
                getRadioValue={getRadioValue}
              />
            )}
            {isRadioTwoOpen && (
              <RadioTwo
                questionTwo={questionTwo}
                getRadioValue={getRadioValue}
              />
            )}
            {isRadioThreeOpen && (
              <RadioThree
                questionThree={questionThree}
                getRadioValue={getRadioValue}
              />
            )}
            {isSelectOpen && (
              <Select
                surveyData2={surveyData2}
                getSelectValue={getSelectValue}
              />
            )}
          </div>
        </S.SurveyLine>
        <S.BtnLine>
          {currentQ !== 0 && (
            <button className="prev" onClick={clickPrevBtn}>
              이전
            </button>
          )}

          <button className="next" onClick={hi}>
            다음
          </button>
        </S.BtnLine>
      </S.SurveyForm>
    </S.SurveyFormBox>
  );
}

export default SurveyBox;
