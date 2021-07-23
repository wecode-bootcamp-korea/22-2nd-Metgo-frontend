import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ccc;
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 10px 0;
`;

export const NavLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100%;
  margin: 0 30px;
`;

export const LogoImg = styled.img`
  width: 100%;
  cursor: pointer;
`;

export const MenuBox = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuList = styled(Link)`
  margin: 0 10px;
  cursor: pointer;
  text-decoration: none;
  color: #000;
`;

export const UserBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Login = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  font-size: 15px;
  border-radius: 5px;
  cursor: pointer;
`;

export const Signup = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  font-size: 15px;
  border-radius: 5px;
  margin: 0 30px;
  cursor: pointer;
`;
