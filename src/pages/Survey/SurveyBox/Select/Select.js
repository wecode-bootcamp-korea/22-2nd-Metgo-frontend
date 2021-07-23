import React, { useEffect, useState } from 'react';
import { SelectBox } from './SelectEle';

function Select({ surveyData2, getSelectValue }) {
  return (
    <SelectBox>
      <h2>아브라카다브라</h2>
      <div className="select">
        <select name="시/도" id="city">
          <option value="서울시">서울시</option>
        </select>
        <select name="시/군/구" id="town" onChange={getSelectValue}>
          <option value="">시/군/구</option>
          {surveyData2.B.option.map((el, i) => {
            return (
              <option key={i} value={el}>
                {el}
              </option>
            );
          })}
        </select>
      </div>
    </SelectBox>
  );
}

export default Select;
