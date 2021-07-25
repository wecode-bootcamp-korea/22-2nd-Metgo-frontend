import React from 'react';
import * as S from './RadioEle';

function Radio({ question, getRadioValue }) {
  return (
    <S.RadioBox>
      <S.Title>{question.Q1}</S.Title>
      <S.RadioWrap>
        {question.answer.map((data, i) => {
          return (
            <S.RadioList key={i}>
              <S.InputWrap>
                <S.Input
                  className="answer"
                  type="radio"
                  name={question.id}
                  id={data}
                  onChange={getRadioValue}
                />
                <S.Label htmlFor="">{data}</S.Label>
              </S.InputWrap>
            </S.RadioList>
          );
        })}
      </S.RadioWrap>
    </S.RadioBox>
  );
}

export default Radio;
