import styled from 'styled-components';

export const HeroSection = styled.div`
  background-image: url('https://dmmj3ljielax6.cloudfront.net/upload/service/075c038f-1021-4184-b9aa-1e3a6fc145fc.jpg');
`;
export const HeroTextBox = styled.div`
  position: relative;
  width: 970px;
  margin: 0 auto;
  z-index: 2;
  padding: 7rem 0;
`;
export const MainTitle = styled.h1`
  color: #fff;
  margin: 0;
  font-weight: 500;
  font-size: 60px;
  margin-bottom: 1rem;
`;
export const StarsBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;
export const Stars = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Star = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;
export const Rating = styled.span`
  color: #ffce21;
  font-weight: 500;
  margin-left: 0.5rem;
`;
export const TotalBox = styled.div`
  display: flex;
  align-items: center;
`;
export const Total = styled.div`
  margin-right: 2rem;
  color: #fff;
  border-right: 1px solid #fff;
  padding-right: 1rem;

  &:last-child {
    border: none;
  }
`;
