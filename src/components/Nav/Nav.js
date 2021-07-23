import React, { useState } from 'react';
// import Signup from './Signup copy/Signup';
import { LOGIN_INFO, SIGNUP_INFO } from './NavData';

import * as S from './NavEle';
import Modal from './Modal/Modal';

const Img = `/images/metgo3.png`;

function Nav() {
  const [isModalOpen, SetIsModalOpen] = useState(false);
  const [form, setForm] = useState('');

  const loginOrSignup = e => {
    if (e.target.name === '로그인') {
      setForm(LOGIN_INFO);
    } else {
      setForm(SIGNUP_INFO);
    }
    modalOpen();
  };

  const modalOpen = () => {
    SetIsModalOpen(true);
  };

  const modalClose = () => {
    SetIsModalOpen(false);
  };

  return (
    <S.NavContainer>
      <S.Navbar>
        <S.NavLeft>
          <S.LogoBox>
            <S.LogoImg src={Img} art="logo" />
          </S.LogoBox>
          <S.MenuBox>
            <S.MenuList>견적보기</S.MenuList>
            <S.MenuList>채팅</S.MenuList>
            <S.MenuList>고수찾기</S.MenuList>
          </S.MenuBox>
        </S.NavLeft>
        <S.UserBox>
          <S.Login name="로그인" onClick={loginOrSignup}>
            로그인
          </S.Login>
          <S.Signup name="회원가입" onClick={loginOrSignup}>
            회원가입
          </S.Signup>
        </S.UserBox>
      </S.Navbar>
      {isModalOpen && <Modal form={form} modalClose={modalClose} />}
    </S.NavContainer>
  );
}

export default Nav;
