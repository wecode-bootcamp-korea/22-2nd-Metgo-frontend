import React from 'react';

// STYLES
import styled from 'styled-components';

function UserFormRadio({ form, setRadioValue }) {
  return (
    <RadioWrap>
      <RadioBtn>
        <input
          type="radio"
          name="radio"
          value="users"
          onClick={setRadioValue}
        />
        <label htmlFor="users">{form.radioBtn[0].text}</label>
      </RadioBtn>
      <RadioBtn>
        <input
          type="radio"
          name="radio"
          value="masters"
          onClick={setRadioValue}
        />
        <label htmlFor="gosu">{form.radioBtn[1].text}</label>
      </RadioBtn>
    </RadioWrap>
  );
}

export default UserFormRadio;

const RadioWrap = styled.ul`
  ${({ theme }) => theme.flex('center', 'center', null)};
  margin-bottom: 20px;
`;

const RadioBtn = styled.li`
  margin: 0 20px;
`;
