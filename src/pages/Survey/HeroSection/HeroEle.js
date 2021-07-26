import styled from 'styled-components';

export const HeroSection = styled.div`
  background-image: url('https://dmmj3ljielax6.cloudfront.net/upload/service/075c038f-1021-4184-b9aa-1e3a6fc145fc.jpg');
`;

export const HeroTextBox = styled.div`
  width: 970px;
  margin: 0 auto;
  padding: 7rem 0;
`;

export const MainTitle = styled.h1`
  margin-bottom: 1rem;
  color: #fff;
  font-weight: 500;
  font-size: 60px;
`;

export const StarsBox = styled.div`
  ${({ theme }) => theme.flex(null, 'center', null)}
  margin-bottom: 1rem;
`;

export const Stars = styled.ul`
  ${({ theme }) => theme.flex('center', 'center', null)}
`;

export const Star = styled.li`
  ${({ theme }) => theme.flex('center', 'center', null)}
  color: #fff;
`;

export const Rating = styled.span`
  margin-left: 0.5rem;
  color: #ffce21;
  font-weight: 500;
`;

export const TotalBox = styled.div`
  ${({ theme }) => theme.flex(null, 'center', null)}
`;

export const Total = styled.div`
  margin-right: 2rem;
  padding-right: 1rem;
  color: #fff;
  border-right: 1px solid #fff;

  &:last-child {
    border: none;
  }
`;
