import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// COMPONENTS
import Radio from './Radio/Radio';
import Select from './Select/Select';
import Stepper from './Stepper/Stepper';
import Loading from './Loding';

// QUESTION DATA
import {
  SelectData,
  questionOne,
  questionTwo,
  questionThree,
} from '../SurveyData';

// STYLES
import * as S from './SurveyBoxEle';

// APIKEY
import { BASE_URL } from '../../../config';

function SurveyBox() {
  const [loading, setLoading] = useState(false);
  const [selectedTown, setSelectedTown] = useState({
    town: '',
  });
  const [radioValue, setRadioValue] = useState({
    gender: '',
    age: '',
    career: '',
  });
  let [currentQ, setCurrentQ] = useState(0);
  const history = useHistory();
  // FUNCTIONS
  const goToFindGosu = () => {
    history.push('/findgosu');
  };
  const timeLoading = () => {
    setTimeout(() => {
      submitForm();
    }, 5000);
  };

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
      .then(goToFindGosu());
  };

  const clickNextBtn = () => {
    if (
      (currentQ === 0 && radioValue.gender !== '') ||
      (currentQ === 1 && radioValue.age !== '') ||
      (currentQ === 2 && radioValue.career !== '')
    ) {
      nextBtn();
    } else if (currentQ === 3 && selectedTown.town !== '') {
      setLoading(true);
      timeLoading();
    }
  };

  const nextBtn = () => {
    if (currentQ < 3) {
      setCurrentQ(currentQ + 1);
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
        {loading ? (
          <Loading />
        ) : (
          <>
            <Stepper currentQ={currentQ} />
            <S.SurveyLine>
              <S.RadioBox>
                {currentQ === 0 && (
                  <Radio question={questionOne} getRadioValue={getRadioValue} />
                )}
                {currentQ === 1 && (
                  <Radio question={questionTwo} getRadioValue={getRadioValue} />
                )}
                {currentQ === 2 && (
                  <Radio
                    question={questionThree}
                    getRadioValue={getRadioValue}
                  />
                )}
                {currentQ === 3 && (
                  <Select
                    SelectData={SelectData}
                    getSelectValue={getSelectValue}
                  />
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
          </>
        )}
      </S.SurveyForm>
    </S.SurveyFormBox>
  );
}

export default SurveyBox;
