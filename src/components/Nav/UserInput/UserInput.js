import React from 'react';

// STYLES
import * as S from './UserInputEle';

function UserFormInputs({ form, getInputValue, inputValues }) {
  console.log(`inputValues`, inputValues);
  return (
    <S.UserFromInputContainer>
      <S.InputBox>
        {form.inputLists.map((inputList, i) => {
          return (
            <>
              <S.InputTextBox key={i}>
                <S.InputText>{inputList.text}</S.InputText>
              </S.InputTextBox>
              <S.Input
                type={inputList.type}
                name={inputList.value}
                value={inputValues[inputList.value]}
                autoComplete="off"
                placeholder={inputList.placeholder}
                onChange={getInputValue}
              />
            </>
          );
        })}
      </S.InputBox>
    </S.UserFromInputContainer>
  );
}

export default UserFormInputs;
