import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const TransitionOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(252, 252, 245, 0.94);
  backdrop-filter: blur(6px);
  z-index: 999999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  animation: ${fadeIn} 0.15s ease;
`;

export const InfinityCard = styled.div`
  background-color: #fff;
  border: var(--border-main);
  box-shadow: 10px 10px 0px 0px #000;
  padding: 32px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
  max-width: 360px;
  width: 100%;
`;

export const HeaderTag = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: var(--bg-accent-yellow);
  border: 2px solid #000;
  box-shadow: 3px 3px 0px 0px #000;
  padding: 6px 16px;
  font-size: 13px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const InfinityWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
`;

export const FooterText = styled.span`
  font-size: 13px;
  font-weight: 800;
  color: #111;
  font-family: 'Courier New', Courier, monospace;
  letter-spacing: 0.3px;
  text-transform: uppercase;
`;
