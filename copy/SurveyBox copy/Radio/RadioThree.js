import React, { useEffect, useState } from 'react';
import { RadioBox } from './RadioEle';

function RadioThree({ questionThree, getRadioValue }) {
  return (
    <RadioBox>
      <h2>{questionThree.Q1}</h2>
      <ul>
        {questionThree.answer.map((data, i) => {
          return (
            <li key={i}>
              <div id="a">
                <input
                  className="answer"
                  type="radio"
                  name={questionThree.id}
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

export default RadioThree;
