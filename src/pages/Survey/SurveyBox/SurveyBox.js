import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// COMPONENTS
import Radio from './Radio/Radio';
import Select from './Select/Select';
import Stepper from './Stepper/Stepper';
import Loading from './Loading';

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
  const [selectedTown, setSelectedTown] = useState('');
  const [radioValue, setRadioValue] = useState({
    gender: '',
    age: '',
    career: '',
  });
  const currentRadioQuestions = {
    0: 'gender',
    1: 'age',
    2: 'career',
  };

  let [currentQ, setCurrentQ] = useState(0);

  const history = useHistory();
  // FUNCTIONS
  const goToFindGosu = () => {
    history.push('/findgosu');
  };
  const loadingTime = () => {
    setTimeout(() => {
      submitForm();
    }, 5000);
  };

  const submitForm = () => {
    const age = radioValue.age.slice(0, 2);
    const [career] = radioValue.career.split('~');

    fetch(`${BASE_URL}/applications`, {
      method: 'POST',
      body: JSON.stringify({
        user_id: 12,
        age: Number(age),
        career: Number(career),
        gender: radioValue.gender,
        region: selectedTown.town,
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
      loadingTime();
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
    const { value } = e.target;
    setSelectedTown(value);
  };

  const getRadioValue = data => {
    const [question, value] = data;

    setRadioValue({ ...radioValue, [value]: question });
  };

  const renderByCurrentQuestion = currentQuestionIdx => {
    const questionMapper = {
      0: (
        <Radio
          radioValue={radioValue}
          question={questionOne}
          getRadioValue={getRadioValue}
        />
      ),
      1: (
        <Radio
          radioValue={radioValue}
          question={questionTwo}
          getRadioValue={getRadioValue}
        />
      ),
      2: (
        <Radio
          radioValue={radioValue}
          question={questionThree}
          getRadioValue={getRadioValue}
        />
      ),
      3: <Select SelectData={SelectData} getSelectValue={getSelectValue} />,
    };

    return (
      <S.SurveyLine>
        <S.RadioBox>{questionMapper[currentQuestionIdx]}</S.RadioBox>
      </S.SurveyLine>
    );
  };

  return (
    <S.SurveyFormBox>
      <S.SurveyForm>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Stepper currentQ={currentQ} />
            {renderByCurrentQuestion(currentQ)}
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
