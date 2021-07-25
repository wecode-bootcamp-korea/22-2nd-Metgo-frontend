import React from 'react';

import * as S from './ModalEle';

// import Signup from '../Signup/Signup';
// import Login from '../Login/Login';
import Admin from '../Admin/Admin';

import { LOGIN_INFO, SIGNUP_INFO } from '../NavData';

function Modal({ form, modalClose }) {
  return (
    <S.Container>
      <S.Bg>
        {form.status === '회원가입' && (
          <Admin form={SIGNUP_INFO} modalClose={modalClose} />
        )}
        {form.status === '로그인' && (
          <Admin form={LOGIN_INFO} modalClose={modalClose} />
        )}
      </S.Bg>
    </S.Container>
  );
}

export default Modal;
