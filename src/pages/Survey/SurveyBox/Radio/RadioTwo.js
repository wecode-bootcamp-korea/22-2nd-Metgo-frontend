import React, { useEffect, useState } from 'react';
import { RadioBox } from './RadioEle';

function RadioTwo({ questionTwo, getRadioValue }) {
  return (
    <RadioBox>
      <h2>{questionTwo.Q1}</h2>
      <ul>
        {questionTwo.answer.map((data, i) => {
          return (
            <li key={i}>
              <div id="a">
                <input
                  className="answer"
                  type="radio"
                  name={questionTwo.id}
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

export default RadioTwo;
