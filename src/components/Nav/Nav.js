import React, { useState } from 'react';
// import Signup from './Signup copy/Signup';
import { LOGIN_INFO, SIGNUP_INFO } from './NavData';

import * as S from './NavEle';
import Modal from './Modal/Modal';

import { IoIosArrowDown } from 'react-icons/io';
import UserMy from './UserMy/UserMy';

const Img = `/images/metgo.png`;

function Nav() {
  const [isModalOpen, SetIsModalOpen] = useState(false);
  const [isUserMyOpen, setIsUserMyOpen] = useState(false);
  const [form, setForm] = useState('');
  const [isLogined, setIsLogined] = useState(false);

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
  const userMyOpen = () => {
    setIsUserMyOpen(!isUserMyOpen);
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
          {isLogined ? (
            <>
              <S.UserImgBox>
                <S.UserImg src="/images/user_img1.jpg" alt="userImg" />
              </S.UserImgBox>
              <S.User onClick={userMyOpen}>
                <S.UserName>성정준 고객님</S.UserName>
                <IoIosArrowDown className="userIcons" />
              </S.User>
            </>
          ) : (
            <>
              <S.Login name="로그인" onClick={loginOrSignup}>
                로그인
              </S.Login>
              <S.Signup name="회원가입" onClick={loginOrSignup}>
                회원가입
              </S.Signup>
            </>
          )}
        </S.UserBox>
        {isUserMyOpen && <UserMy />}
      </S.Navbar>

      {isModalOpen && <Modal form={form} modalClose={modalClose} />}
    </S.NavContainer>
  );
}

export default Nav;
