import styled from 'styled-components';

export const FooterContainer = styled.footer`
  border-top: var(--border-main);
  background-color: var(--bg-primary);
  margin-top: var(--spacing-xl);
  padding: 18px var(--spacing-lg);
`;

export const FooterInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 14px;
    text-align: center;
  }
`;

export const FooterLeft = styled.div`
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.3px;
  color: #111;
  text-transform: uppercase;
  justify-self: start;
`;

export const FooterCenter = styled.div`
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.5px;
  color: #111;
  text-transform: uppercase;
  justify-self: center;
`;

export const FooterRight = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-self: end;
`;

export const SocialIconLink = styled.a`
  width: 38px;
  height: 38px;
  background-color: #fff;
  border: 2px solid #000;
  box-shadow: 3px 3px 0px 0px #000;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.15s ease;

  svg {
    width: 18px;
    height: 18px;
    fill: currentColor;
  }

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 5px 5px 0px 0px #000;
    background-color: ${props => props.$hoverBg || 'var(--bg-accent-yellow)'};
  }

  &:active {
    transform: translate(2px, 2px);
    box-shadow: 0px 0px 0px 0px #000;
  }
`;
