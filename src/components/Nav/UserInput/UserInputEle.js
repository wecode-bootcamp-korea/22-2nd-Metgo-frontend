import styled from 'styled-components';

export const UserFromInputContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const InputBox = styled.div`
  width: 100%;
`;

export const InputTextBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 70%;
  margin: 0 auto;
`;

export const InputText = styled.p`
  margin: 5px 0;
`;

export const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 50px;
  margin: 0 auto;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 15px;
  outline-color: rebeccapurple;

  &::placeholder {
    font-size: 12px;
  }
`;
