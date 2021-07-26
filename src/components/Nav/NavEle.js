import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.nav`
  ${({ theme }) => theme.flex('center', 'center', null)};
  border-bottom: 1px solid #ccc;
`;

export const Navbar = styled.div`
  ${({ theme }) => theme.flex('space-between', 'center', null)};
  position: relative;
  width: 100%;
  max-width: 1200px;
  padding: 10px 0;
`;

export const NavLeft = styled.div`
  ${({ theme }) => theme.flex('center', 'center', null)};
`;

export const LogoBox = styled.div`
  ${({ theme }) => theme.flex('center', 'center', null)};
  width: 120px;
  height: 100%;
  margin: 0 30px;
`;

export const LogoImg = styled.img`
  width: 100%;
  cursor: pointer;
`;

export const MenuBox = styled.ul`
  ${({ theme }) => theme.flex('center', 'center', null)};
  margin-top: 5px;
`;

export const MenuList = styled(Link)`
  margin: 0 10px;
  color: #323232;
  text-decoration: none;
  cursor: pointer;
`;

export const UserBox = styled.div`
  ${({ theme }) => theme.flex('center', 'center', null)};
`;

export const Button = styled.button`
  background-color: transparent;
  font-size: 15px;
  color: #323232;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const Login = styled(Button)``;

export const Signup = styled(Button)`
  margin: 0 30px;
`;
export const UserImgBox = styled.div`
  ${({ theme }) => theme.flex(null, 'center', null)};
`;
export const UserImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
  object-fit: cover;
  cursor: pointer;
`;
export const User = styled.div`
  ${({ theme }) => theme.flex('center', 'center', null)};
  margin: 0 20px;

  .userIcons {
    margin: 0 10px 2px;
    color: #aaa;
    cursor: pointer;
  }
`;
export const UserName = styled.p`
  color: gery;
  font-size: 15px;
  cursor: pointer;
`;
