import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FormBox = styled.form`
  display: flex;
  align-items: center;
  width: 500px;
  height: 700px;
  margin: 0 auto;
  flex-direction: column;
  background-color: #fff;
  padding: ${({ paddingBig }) => (paddingBig ? `50px 20px` : `20px 20px`)};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  position: relative;
`;

export const Logo = styled.div`
  width: 250px;
  height: 100px;
  margin-bottom: 60px;
`;

export const LogoImg = styled.img`
  width: 100%;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const AskAccount = styled(Link)`
  font-size: 15px;
  margin: 10px 0;
  color: #000;
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;
`;

export const CloseBtn = styled.p`
  position: absolute;
  top: 20px;
  right: 20px;
  color: rebeccapurple;
  font-size: 40px;
  cursor: pointer;
`;