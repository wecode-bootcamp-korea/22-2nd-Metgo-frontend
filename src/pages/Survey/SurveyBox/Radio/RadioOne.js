import React, { useEffect, useState } from 'react';
import { RadioBox } from './RadioEle';

function RadioOne({ questionOne, getRadioValue }) {
  return (
    <RadioBox>
      <h2>{questionOne.Q1}</h2>
      <ul>
        {questionOne.answer.map((data, i) => {
          return (
            <li key={i}>
              <div id="a">
                <input
                  className="answer"
                  type="radio"
                  name={questionOne.id}
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

export default RadioOne;
