import styled from 'styled-components';

export const RadioBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;

  h2 {
    padding: 2rem 0;
    font-size: 1.5rem;
  }
  ul {
    width: 100%;
    li {
      width: 100%;
      border: 1px solid #f2f2f2;
      border-radius: 5px;
      padding: 1rem 0;
      border-bottom: none;

      &:last-child {
        border: 1px solid #f2f2f2;
      }

      div {
        padding: 0 1rem;

        input {
          margin-right: 1rem;
        }
      }
    }
  }
`;
