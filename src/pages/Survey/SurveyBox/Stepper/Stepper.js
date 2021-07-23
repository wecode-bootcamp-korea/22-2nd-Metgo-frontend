import React from 'react';

import * as S from './StepperEle';

function Stepper() {
  return (
    <S.Stepper>
      <div>
        <ul className="u1">
          <li className="active">
            <img src="/images/koala.png" alt="" />
          </li>
        </ul>
        <ul className="u2">
          <li></li>
        </ul>
        <ul className="u3">
          <li className="active"></li>
        </ul>
      </div>
    </S.Stepper>
  );
}

export default Stepper;
