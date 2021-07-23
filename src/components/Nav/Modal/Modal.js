import React from 'react';

import * as S from './ModalEle';

import Signup from '../Signup/Signup';
import Login from '../Login/Login';

function Modal({ form, modalClose }) {
  return (
    <S.Container>
      <S.Bg>
        {form.status === '회원가입' && (
          <Signup form={form} modalClose={modalClose} />
        )}
        {form.status === '로그인' && (
          <Login form={form} modalClose={modalClose} />
        )}
      </S.Bg>
    </S.Container>
  );
}

export default Modal;
