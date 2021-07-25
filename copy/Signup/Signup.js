import React, { useState } from 'react';

import { IoMdClose } from 'react-icons/io';

import UserFormInputs from '../UserInput/UserInput';
import UserFormBtns from '../UserButton/UserFormBtn';
import UserRadioBtns from '../UserRadioBtns/UserFormRadio';

import * as S from './SignupEle';

function Signup({ form, modalClose }) {
  const [inputValues, setInputValues] = useState({
    name: '',
    id: '',
    password: '',
  });

  const handleLoginSubmit = e => {
    e.preventDefault();

    setInputValues({ name: '', id: '', password: '' });
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
        getInputValue={getInputValue}
        inputValues={inputValues}
      />
      <UserRadioBtns form={form} />
      <UserFormBtns form={form} />
      <S.CloseBtn onClick={modalClose}>
        <IoMdClose />
      </S.CloseBtn>
    </S.FormBox>
  );
}

export default Signup;

const Img = `/images/metgo3.png`;
