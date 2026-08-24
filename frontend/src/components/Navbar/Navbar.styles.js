import styled from 'styled-components';

export const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 9999;
  padding: 32px 16px;
  background-color: ${props => props.$scrolled ? 'rgba(252, 252, 245, 0.6)' : 'transparent'};
  backdrop-filter: ${props => props.$scrolled ? 'blur(8px)' : 'none'};
  transition: all 0.3s ease;
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  background-color: #fff;
  border: var(--border-main);
  box-shadow: var(--box-shadow-main);
  
  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 400px;
  }
`;

export const Logo = styled.div`
  padding: 12px 24px;
  font-weight: 900;
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-right: var(--border-main);
  cursor: pointer;
  background-color: #fff;

  @media (max-width: 768px) {
    border-right: none;
    border-bottom: var(--border-main);
    justify-content: center;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  border-left: var(--border-main);

  @media (max-width: 768px) {
    width: 100%;
    border-left: none;
  }
`;

export const NavLink = styled.a`
  padding: 12px 24px;
  font-weight: 700;
  font-size: 14px;
  border-right: ${props => props.$isLast ? 'none' : 'var(--border-main)'};
  background-color: ${props => props.$isActive ? props.$activeColor : 'transparent'};
  cursor: pointer;
  transition: background-color 0.2s ease;
  flex: 1;
  text-align: center;
  white-space: nowrap;

  &:hover {
    background-color: ${props => props.$activeColor};
  }

  @media (max-width: 768px) {
    padding: 12px 8px;
  }
`;
