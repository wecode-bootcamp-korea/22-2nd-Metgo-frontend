import styled from 'styled-components';

export const BtnsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
export const Btns = styled.button`
  width: 70%;
  height: 50px;
  color: ${({ blackFont }) => (blackFont ? '#000' : '#fff')};
  border: none;
  border-radius: 5px;
  margin: 5px 0;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const KakaoBtn = styled.button`
  width: 70%;
  height: 50px;
  color: #783c00;
  border: none;
  border-radius: 5px;
  margin: 5px 0;
  cursor: pointer;
  background-color: #ffeb00;

  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;
