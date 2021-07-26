import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

import UserFormInputs from '../UserInput/UserInput';
import UserFormBtns from '../UserButton/UserFormBtn';
import UserRadioBtns from '../UserRadioBtns/UserFormRadio';

import * as S from './AdminEle';
// import { BASE_URL } from '../../../config';
const Img = `/images/metgo.png`;

function Admin({ form, modalClose }) {
  const { Kakao } = window;
  const [radio, setRadio] = useState('');
  const [inputValues, setInputValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
  };
  const getInputValue = e => {
    const { name, value } = e.target;

    setInputValues({ ...inputValues, [name]: value });
  };
  const getRadioValue = e => {
    setRadio(e.target.value);
  };
  const handleClickButton = e => {
    const { name } = e.target;
    console.log(`name`, name);

    if (name === 'email') {
      fetchLogin();
      setInputValues({ name: '', email: '', password: '' });
    } else {
      // localStorage.removeItem('token');
    }
  };
  const fetchLogin = () => {
    fetch(`http://13.125.45.70/master/signin`, {
      method: 'POST',
      // headers: {
      //   Accept: 'application/json',
      //   'Content-Type': 'application/json',
      // },
      body: JSON.stringify({
        email: inputValues.email,
        password: inputValues.password,
      }),
    })
      .then(res => res.json())
      .then(res => console.log(`res`, res));
  };

  const kakaoLogin = () => {
    Kakao.Auth.login({
      success: function (authObj) {
        fetch(`APIKEY`, {
          method: 'POST',
          body: JSON.stringify({
            access_token: authObj.access_token,
          }),
        })
          .then(res => res.json())
          .then(res => {
            localStorage.setItem('kakao_token', res.access_token);
            if (res.access_token) {
              alert('로그인되었습니다');
            }
          });
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      },
    });
  };

  return (
    <S.FormBox paddingBig={form.paddingBig} onSubmit={handleSubmit}>
      <S.Logo>
        <S.LogoImg src={Img} alt="UserFormImg" />
      </S.Logo>
      <S.Text>{form.status}</S.Text>
      <UserFormInputs
        form={form}
        inputValues={inputValues}
        getInputValue={getInputValue}
      />
      <UserRadioBtns form={form} getRadioValue={getRadioValue} />
      <UserFormBtns form={form} handleClickButton={handleClickButton} />
      {form.status === '로그인' && (
        <S.AskAccount>{form.bottomText}</S.AskAccount>
      )}
      <S.CloseBtn onClick={modalClose}>
        <IoMdClose />
      </S.CloseBtn>
    </S.FormBox>
  );
}

export default Admin;
