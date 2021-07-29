import React from 'react';

// COMPONENTS
import Admin from '../Admin/Admin';

//DATA
import { LOGIN_INFO, SIGNUP_INFO } from '../NavData';

//STYLES
import * as S from './ModalEle';

function Modal({
  form,
  modalClose,
  setIsLoggedIn,
  checkRadioValue,
  checkName,
}) {
  return (
    <S.Container>
      <S.Bg>
        <Admin
          checkName={checkName}
          checkRadioValue={checkRadioValue}
          form={form.status === '회원가입' ? SIGNUP_INFO : LOGIN_INFO}
          setIsLoggedIn={form.status === '로그인' && setIsLoggedIn}
          modalClose={modalClose}
        />
      </S.Bg>
    </S.Container>
  );
}

export default Modal;
