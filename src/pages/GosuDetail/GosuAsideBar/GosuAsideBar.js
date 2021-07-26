import styled from 'styled-components';

function GosuAsideBar({ gosuDetails }) {
  return (
    <GosuAsideWrapper>
      <SuggestBox>
        <GosuTitle>
          {gosuDetails.name} 고수에게 원하는 서비스의 견적을 받아 보세요
        </GosuTitle>
        <SuggestBtn>견적 요청하기</SuggestBtn>
      </SuggestBox>
    </GosuAsideWrapper>
  );
}

const GosuAsideWrapper = styled.aside`
  padding-left: 20px;
`;

const SuggestBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 50px;
  width: 15%;
  padding: 30px 20px;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
`;

const GosuTitle = styled.p`
  margin-bottom: 20px;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
`;

const SuggestBtn = styled.button`
  height: 40px;
  width: 100%;
  color: white;
  background-color: rebeccapurple;
  border: none;
  border-radius: 5px;
  outline: none;
`;

export default GosuAsideBar;
