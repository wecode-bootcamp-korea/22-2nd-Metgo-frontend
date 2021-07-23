import styled from 'styled-components';

export const SurveyFormBox = styled.div`
  min-height: 300px;
  width: 3.75rem;
  padding: 2.5rem;
  transform: translateY(-6.25rem);
  z-index: 2;
  background-color: #fff;
  flex: 60%;
  border: 1px solid rebeccapurple;
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

  .a {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const BtnLine = styled.div`
  padding: 2rem 0 2rem 1rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  button {
    font-size: 15px;
    padding: 0.7rem 2rem;
    border-radius: 5px;
    cursor: pointer;

    &.prev {
      margin: 0 0 0 0.5rem;
      background-color: #fff;
      border: 1px solid rebeccapurple;
      color: rebeccapurple;
    }
    &.next {
      margin: 0 0 0 0.5rem;
      background-color: rebeccapurple;
      border: none;
      color: #fff;
    }
  }
`;

// ul {
//   width: 100%;
//   li {
//     position: absolute;
//     display: flex;
//     top: 80px;
//     width: 100%;
//     height: 4px;
//     text-align: center;
//     background-color: #ddd;

//     &:after {
//       content: '';
//       position: absolute;
//       width: 25%;
//       height: 4px;
//       background-color: #ddd;
//       top: 0;
//       left: 0;
//       z-index: -1;
//     }
//     &.active {
//       color: rebeccapurple;
//     }
//     &.active:after {
//       width: 50%;
//       background-color: rebeccapurple;
//     }
//   }
// }
