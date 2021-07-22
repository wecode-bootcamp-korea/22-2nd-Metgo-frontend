import React from 'react';
import styled from 'styled-components';

function RequestListBar() {
  return (
    <RequestWrapper>
      <RequestBox>
        <GosuTitle>받은 요청 리스트</GosuTitle>
        <ul>
          <RequestCard>
            <span>euiyeonlee</span>
            <BtnBox>
              <SuggestBtn>수락</SuggestBtn>
              <SuggestBtn>거절</SuggestBtn>
            </BtnBox>
          </RequestCard>
        </ul>
      </RequestBox>
    </RequestWrapper>
  );
}

const RequestWrapper = styled.aside`
  padding-left: 20px;
`;

const RequestBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  padding: 30px 10px 10px 10px;
  top: 100px;
  width: 15%;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
`;

const GosuTitle = styled.p`
  padding-bottom: 20px;
  text-align: center;
  border-bottom: 1px solid #dbdbdb;
  font-weight: 500;
`;

const RequestCard = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SuggestBtn = styled.button`
  margin: 0 5px;
  outline: none;
  border: 1px solid rebeccapurple;
  border-radius: 5px;
  background-color: white;
  color: rebeccapurple;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: rebeccapurple;
    color: white;
  }
`;

export default RequestListBar;
