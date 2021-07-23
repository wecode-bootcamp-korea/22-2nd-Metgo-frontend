import React, { useState } from 'react';
import styled from 'styled-components';

function UserFormRadio({ form }) {
  const [radio, setRadio] = useState('');

  const setRadioValue = e => {
    setRadio(e.target.value);
  };
  return (
    <RadioWrap>
      <RadioBtn>
        <input type="radio" name="radio" value="user" onClick={setRadioValue} />
        <label htmlFor="user">{form.radioBtn[0].text}</label>
      </RadioBtn>
      <RadioBtn>
        <input type="radio" name="radio" value="gosu" onClick={setRadioValue} />
        <label htmlFor="gosu">{form.radioBtn[1].text}</label>
      </RadioBtn>
    </RadioWrap>
  );
}

export default UserFormRadio;

const RadioWrap = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
const RadioBtn = styled.li`
  margin: 0 20px;
`;