import styled from 'styled-components';

function GosuAsideBar({ gosuDetails }) {
  return (
    <GosuAsideWrapper>
      <SuggestBox>
        <GosuTitle>{gosuDetails.name}</GosuTitle>
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
  padding: 30px 20px;
  top: 50px;
  width: 15%;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
`;

const GosuTitle = styled.p`
  margin-bottom: 20px;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
`;

const SuggestBtn = styled.button`
  height: 40px;
  width: 100%;
  outline: none;
  border: none;
  border-radius: 5px;
  background-color: rebeccapurple;
  color: white;
`;

export default GosuAsideBar;
