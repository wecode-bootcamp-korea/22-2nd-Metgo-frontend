import styled from 'styled-components';

export const Stepper = styled.div`
  padding: 2rem 0;
  width: 100%;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .u1 {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;

      li {
        display: flex;
        width: 100%;
        height: 40px;
        transform: translateX(0%);
      }
      .active {
        transform: translateX(15%);
        transition: 1s ease-in;
      }
    }
    .u2 {
      width: 100%;
      display: flex;

      li {
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
        /* &.active:after {
          transition: 2s ease-in;
          background-color: rebeccapurple;
        } */
      }
    }
    .u3 {
      width: 100%;
      display: flex;

      li {
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

        /* &.active:after {
          transition: 2s ease-in;
          background-color: rebeccapurple;
        } */
      }
      .active {
        transition: 1s ease-in;
        width: 20%;
      }
    }
  }
`;
