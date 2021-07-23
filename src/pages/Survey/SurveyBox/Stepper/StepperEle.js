import styled from 'styled-components';

export const StepperBox = styled.div`
  padding: 2rem 0;
  width: 100%;
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const ImgList = styled.li`
  display: flex;
  width: 100%;
  height: 40px;

  &.activeOne {
    transform: translateX(26%);
    transition: 1s ease-in;
  }
  &.activeTwo {
    transform: translateX(56%);
    transition: 1s ease-in;
  }
  &.activeThree {
    transform: translateX(86%);
    transition: 1s ease-in;
  }
`;
export const Img = styled.img`
  /*  */
`;
export const StepperBg = styled.ul`
  width: 100%;
  display: flex;
`;
export const StepperBgLine = styled.li`
  width: 100%;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    top: 15px;
    background-color: #ddd;
  }
`;
export const Stepper = styled.ul`
  width: 100%;
  display: flex;
`;
export const StepperLine = styled.li`
  width: 0%;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    top: 15px;
    background-color: rebeccapurple;
  }
  &.active {
    transition: 1s ease-in;
    width: 20%;
  }
  &.activeOne {
    width: 30%;
    transition: 1s ease-in;
  }
  &.activeTwo {
    width: 60%;
    transition: 1s ease-in;
  }
  &.activeThree {
    width: 90%;
    transition: 1s ease-in;
  }
`;
