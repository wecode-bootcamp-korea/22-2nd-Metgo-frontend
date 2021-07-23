import React, { useEffect, useState } from 'react';
import { RadioBox } from './RadioEle';

function Radio({ currentQdata, getRadioValue }) {
  return (
    <RadioBox>
      <h2>{currentQdata.Q1}</h2>
      <ul>
        {currentQdata.answer.map((data, i) => {
          return (
            <li key={i}>
              <div id="a">
                <input
                  type="radio"
                  name="answer"
                  id={data}
                  onChange={getRadioValue}
                />
                <label htmlFor="">{data}</label>
              </div>
            </li>
          );
        })}
      </ul>
    </RadioBox>
  );
}

export default Radio;
