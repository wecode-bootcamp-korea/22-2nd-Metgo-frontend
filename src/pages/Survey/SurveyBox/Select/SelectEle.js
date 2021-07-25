import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;
export const Title = styled.h2`
  padding: 2rem 0;
  font-size: 1.5rem;
`;
export const SelectBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
export const Select = styled.select`
  width: 100%;
  font-size: 15px;
  margin-bottom: 14px;
  padding: 12px;
  appearance: none;
  border-radius: 5px;
  outline-color: rebeccapurple;
`;
export const SelectCity = styled(Select)`
  .icon {
    font-size: 50px;
  }
`;
export const OptionCity = styled.option``;
export const SelectTown = styled(Select)``;
export const OptionTown = styled.option``;
export const OptionTownList = styled.option``;
