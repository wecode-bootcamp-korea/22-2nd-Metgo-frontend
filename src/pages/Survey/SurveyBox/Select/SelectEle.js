import styled from 'styled-components';

export const SelectBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;

  h2 {
    padding: 2rem 0;
    font-size: 1.5rem;
  }

  .select {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;

    select {
      width: 100%;
      font-size: 15px;
      margin-bottom: 14px;
      padding: 12px;
    }
  }
`;
