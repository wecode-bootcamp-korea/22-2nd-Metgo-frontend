import styled from 'styled-components';

export const SurveyFormBox = styled.div`
  min-height: 300px;
  width: 3.75rem;
  padding: 2.5rem;
  transform: translateY(-6.25rem);
  z-index: 2;
  background-color: #fff;
  flex: 60%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`;

export const SurveyForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-direction: column;
`;

export const SurveyLine = styled.div`
  padding: 2rem 0;
  width: 100%;
`;

export const RadioBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BtnLine = styled.div`
  padding: 2rem 0 2rem 1rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Btns = styled.button`
  font-size: 15px;
  padding: 0.7rem 2rem;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 0 0 0.5rem;
`;

export const PrevBtn = styled(Btns)`
  background-color: #fff;
  border: 1px solid rebeccapurple;
  color: rebeccapurple;
`;

export const NextBtn = styled(Btns)`
  background-color: rebeccapurple;
  border: none;
  color: #fff;
`;
