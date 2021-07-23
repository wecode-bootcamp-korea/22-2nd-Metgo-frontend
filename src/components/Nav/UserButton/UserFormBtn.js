import React from 'react';
import * as S from './UserFormBtnEle';

function UserFormBtn({ form }) {
  return (
    <S.BtnsContainer>
      {form.status === '로그인' && <S.KakaoBtn>카카오톡으로 로그인</S.KakaoBtn>}
      {form.btnLists.map((list, i) => {
        return (
          <S.Btns
            key={i}
            blackFont={list.blackFont}
            style={{ backgroundColor: list.bg }}
          >
            {list.text}
          </S.Btns>
        );
      })}
    </S.BtnsContainer>
  );
}

export default UserFormBtn;
