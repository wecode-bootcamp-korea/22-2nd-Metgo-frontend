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
  position: relative;
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
  width: 120px;
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
  margin-top: 5px;
`;

export const MenuList = styled(Link)`
  margin: 0 10px;
  cursor: pointer;
  text-decoration: none;
  color: #323232;
`;

export const UserBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  font-size: 15px;
  border-radius: 5px;
  cursor: pointer;
  color: #323232;
`;

export const Login = styled(Button)``;

export const Signup = styled(Button)`
  margin: 0 30px;
`;
export const UserImgBox = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
`;
export const UserImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
`;
export const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;

  .userIcons {
    margin: 0 10px 2px;
    color: #aaa;
    cursor: pointer;
  }
`;
export const UserName = styled.p`
  font-size: 15px;
  color: gery;
  cursor: pointer;
`;
