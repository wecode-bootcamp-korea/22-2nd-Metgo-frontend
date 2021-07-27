import React from 'react';

// STYLES
import * as S from './UserInputEle';

function UserFormInputs({ form, setInputValue, inputValues }) {
  return (
    <S.UserFromInputContainer>
      <S.InputBox>
        {form.inputLists.map((inputList, i) => {
          return (
            <React.Fragment key={i}>
              <S.InputTextBox>
                <S.InputText>{inputList.text}</S.InputText>
              </S.InputTextBox>
              <S.Input
                type={inputList.type}
                name={inputList.value}
                value={inputValues[inputList.value]}
                autoComplete="off"
                placeholder={inputList.placeholder}
                onChange={setInputValue}
              />
            </React.Fragment>
          );
        })}
      </S.InputBox>
    </S.UserFromInputContainer>
  );
}

export default UserFormInputs;
