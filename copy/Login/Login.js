import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

import UserFormInputs from '../../src/components/Nav/UserInput/UserInput';
import UserFormBtns from '../../src/components/Nav/UserButton/UserFormBtn';
import UserRadioBtns from '../../src/components/Nav/UserRadioBtns/UserFormRadio';

import * as S from './LoginEle';
const Img = `/images/metgo3.png`;

function Login({ form, modalClose }) {
  const [inputValues, setInputValues] = useState({ id: '', password: '' });

  const handleLoginSubmit = e => {
    e.preventDefault();

    setInputValues({ id: '', password: '' });
  };
  const getInputValue = e => {
    const { name, value } = e.target;

    setInputValues({ [name]: value });
  };

  return (
    <S.FormBox paddingBig={form.paddingBig} onSubmit={handleLoginSubmit}>
      <S.Logo>
        <S.LogoImg src={Img} alt="UserFormImg" />
      </S.Logo>
      <S.Text>{form.status}</S.Text>
      <UserFormInputs
        form={form}
        inputValues={inputValues}
        getInputValue={getInputValue}
      />
      <UserRadioBtns form={form} />
      <UserFormBtns form={form} />
      <S.AskAccount>{form.bottomText}</S.AskAccount>
      <S.CloseBtn onClick={modalClose}>
        <IoMdClose />
      </S.CloseBtn>
    </S.FormBox>
  );
}

export default Login;
