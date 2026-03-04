import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // 페이지 이동을 위한 hook
import logoImg from '../assets/nav_logo.svg';

const NavContainer = styled.nav`
  position: fixed;
  top: ${props => props.theme.vh(50)};
  left: 0;
  width: 100%;
  height: ${props => props.theme.vh(100)};
  display: flex;
  align-items: center;
  z-index: 1000;
  
  transition: transform 0.4s ease-in-out;
  transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0)' : 'translateY(-200%)')};
`;

const NavInner = styled.div`
  width: 100%;
  padding: 0 ${props => props.theme.vw(150)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Logo = styled.img`
  width: ${props => props.theme.vw(60)};
  height: ${props => props.theme.vw(60)};
  cursor: pointer;
  flex-shrink: 0;
`;

const MenuWrapper = styled.ul`
  display: flex;
  list-style: none;
  gap: ${props => props.theme.vw(78)};
  padding: 0;
  margin: 0;
  
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const MenuItem = styled.li`
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  font-size: ${props => props.theme.vw(22)};
  color: #939396;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    color: #717172ff;
  }
`;

const ApplyButton = styled.button`
  width: ${props => props.theme.vw(133)};
  height: ${props => props.theme.vh(64)};
  padding: ${props => props.theme.vh(19)} ${props => props.theme.vw(28)};
  
  background-color: #6BFBE6;
  color: #04001B;
  border: none;
  border-radius: ${props => props.theme.vw(19)};
  
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: ${props => props.theme.vw(20)};
  cursor: pointer;
  flex-shrink: 0;
  
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Navbar = ({ $isVisible }) => {
  const navigate = useNavigate();

  // 1. 로고 클릭 시 최상단 스크롤
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 2. 메뉴 및 버튼 클릭 시 페이지 이동
  const handleMenuClick = (path) => {
    navigate(path);
  };

  // 외부 링크 이동 함수 
  const handleExternalClick = (url) => {
    window.location.href = url;
  };

  return (
    <NavContainer $isVisible={$isVisible}>
      <NavInner>
        <Logo src={logoImg} alt="logo" onClick={handleLogoClick} />

        <MenuWrapper>
          <MenuItem onClick={() => handleMenuClick('/')}>HOME</MenuItem>
          <MenuItem onClick={() => handleMenuClick('/members')}>MEMBERS</MenuItem>
          <MenuItem onClick={() => handleMenuClick('/question')}>Q&A</MenuItem>
        </MenuWrapper>

        <ApplyButton onClick={() => handleExternalClick('https://www.instagram.com/cpu_mirim/')}>
          @cpu_mirm
        </ApplyButton>      
        </NavInner>
    </NavContainer>
  );
};

export default Navbar;