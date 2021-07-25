import React from 'react';

import { MdArrowDropDown } from 'react-icons/md';

// STYLES
import * as S from './SelectEle';

function Select({ SelectData, getSelectValue }) {
  return (
    <S.Container>
      <S.Title>{SelectData.Q1}</S.Title>
      <S.SelectBox>
        <select name="시/도">
          <option value="서울시">서울시</option>
          <MdArrowDropDown />
        </select>
        <select name="시/군/구" onChange={getSelectValue}>
          <option value="">시/군/구</option>
          {SelectData.town.option.map((el, i) => {
            return (
              <option key={i} value={el}>
                {el}
              </option>
            );
          })}
        </select>
      </S.SelectBox>
    </S.Container>
  );
}

export default Select;
