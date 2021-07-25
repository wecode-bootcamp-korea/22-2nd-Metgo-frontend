import React, { useEffect, useState } from 'react';

// COMPONENTS
import RadioOne from './Radio/RadioOne';
import RadioThree from './Radio/RadioThree';
import RadioTwo from './Radio/RadioTwo';
import Select from './Select/Select';
import Stepper from './Stepper/Stepper';

// QUESTION DATA
import {
  SelectData,
  questionOne,
  questionTwo,
  questionThree,
} from '../src/Pages/Survey/SurveyData';

// STYLES
import * as S from './SurveyBoxEle';

// APIKEY
import { BASE_URL } from '../src/config';

function SurveyBox() {
  const [isRadioOneOpen, setIsRadioOneOpen] = useState(true);
  const [isRadioTwoOpen, setIsRadioTwoOpen] = useState(false);
  const [isRadioThreeOpen, setIsRadioThreeOpen] = useState(false);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [count, setCount] = useState(0);
  let [currentQ, setCurrentQ] = useState(0);
  const [selectedTown, setSelectedTown] = useState({
    town: '',
  });
  const [radioValue, setRadioValue] = useState({
    gender: '',
    age: '',
    career: '',
  });

  // USEEFFECTS
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

  // FUNCTIONS
  const submitForm = () => {
    const age = radioValue.age.slice(0, 2);
    const career = radioValue.career.split('~')[0];

    fetch(`${BASE_URL}/applications`, {
      method: 'POST',
      body: JSON.stringify({
        user_id: 12,
        age: Number(age),
        career: Number(career),
        gender: `${radioValue.gender}`,
        region: `${selectedTown.town}`,
        service_id: 2,
      }),
    })
      .then(res => res.json())
      .then(res => console.log(`res`, res));
  };

  const clickNextBtn = () => {
    if (
      (currentQ === 0 && radioValue.gender !== '') ||
      (currentQ === 1 && radioValue.age !== '') ||
      (currentQ === 2 && radioValue.career !== '')
    ) {
      nextBtn();
    } else if (currentQ === 3 && selectedTown.town !== '') {
      submitForm();
    }
  };

  const deliverCount = () => {
    setCount(currentQ);
  };

  const nextBtn = () => {
    if (currentQ < 3) {
      setCurrentQ(currentQ + 1);
      deliverCount();
    }
  };

  const clickPrevBtn = () => {
    if (currentQ === 0) {
      setCurrentQ(0);
      setRadioValue('');
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
    setSelectedTown({ town: e.target.value });
  };

  const getRadioValue = () => {
    const answerEle = document.querySelectorAll('.answer');
    answerEle.forEach(answer => {
      if (answer.checked) {
        if (answer.name === '0') {
          setRadioValue({ ...radioValue, gender: answer.id });
        } else if (answer.name === '1') {
          setRadioValue({ ...radioValue, age: answer.id });
        } else {
          setRadioValue({ ...radioValue, career: answer.id });
        }
      }
    });
  };
  return (
    <S.SurveyFormBox>
      <S.SurveyForm>
        <Stepper count={count} currentQ={currentQ} />
        <S.SurveyLine>
          <S.RadioBox>
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
              <Select SelectData={SelectData} getSelectValue={getSelectValue} />
            )}
          </S.RadioBox>
        </S.SurveyLine>
        <S.BtnLine>
          {currentQ !== 0 && (
            <S.PrevBtn className="prev" onClick={clickPrevBtn}>
              이전
            </S.PrevBtn>
          )}

          <S.NextBtn className="next" onClick={clickNextBtn}>
            다음
          </S.NextBtn>
        </S.BtnLine>
      </S.SurveyForm>
    </S.SurveyFormBox>
  );
}

export default SurveyBox;
