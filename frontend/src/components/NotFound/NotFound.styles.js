import styled, { keyframes } from 'styled-components';

const float1 = keyframes`
  0%, 100% { transform: translateY(0px) rotate(-3deg); }
  50% { transform: translateY(-8px) rotate(-1deg); }
`;

const float2 = keyframes`
  0%, 100% { transform: translateY(0px) rotate(2deg); }
  50% { transform: translateY(-10px) rotate(4deg); }
`;

const float3 = keyframes`
  0%, 100% { transform: translateY(0px) rotate(-2deg); }
  50% { transform: translateY(-6px) rotate(0deg); }
`;

const pulseScan = keyframes`
  0% { transform: scale(0.95); opacity: 0.7; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(0.95); opacity: 0.7; }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const scanline = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(300%); }
`;

export const NotFoundContainer = styled.section`
  padding: 140px var(--spacing-lg) var(--spacing-xl);
  max-width: 900px;
  margin: 0 auto;
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;
  text-align: center;
`;

export const ErrorCard = styled.div`
  background-color: #fff;
  border: var(--border-main);
  box-shadow: 12px 12px 0px 0px #000;
  padding: 48px 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  position: relative;

  @media (max-width: 768px) {
    padding: 36px 20px;
    gap: 20px;
  }
`;

/* 404 FLOATING BRUTALIST DIGITS */
export const DigitsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin: 10px 0;
`;

export const DigitCard = styled.div`
  width: 90px;
  height: 110px;
  background-color: ${props => props.$bg || '#fff'};
  border: var(--border-main);
  box-shadow: 6px 6px 0px 0px #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 64px;
  font-weight: 900;
  line-height: 1;
  user-select: none;
  animation: ${props => props.$anim || float1} 3s ease-in-out infinite;

  @media (max-width: 600px) {
    width: 70px;
    height: 90px;
    font-size: 48px;
  }
`;

export const ErrorTitle = styled.h2`
  font-size: 32px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const ErrorDescription = styled.p`
  font-size: 15px;
  max-width: 580px;
  color: #222;
  line-height: 1.6;
  font-weight: 600;

  code {
    background: #000;
    color: var(--bg-accent-yellow);
    padding: 3px 8px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 14px;
    border-radius: 2px;
    font-weight: 700;
  }
`;

/* MODERN SKELETON WIREFRAME PANEL */
export const WireframePanel = styled.div`
  width: 100%;
  max-width: 600px;
  border: 3px solid #000;
  background-color: var(--bg-primary);
  box-shadow: 6px 6px 0px 0px #000;
  overflow: hidden;
  position: relative;
  text-align: left;
`;

export const WireframeHeader = styled.div`
  background-color: #000;
  color: #fff;
  padding: 8px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Courier New', Courier, monospace;
  font-size: 12px;
  font-weight: 700;
`;

export const WindowControls = styled.div`
  display: flex;
  gap: 6px;
`;

export const WindowDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.$color || '#fff'};
  border: 1px solid #000;
`;

export const WireframeBody = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 30px;
    background: linear-gradient(
      180deg,
      rgba(255, 222, 89, 0.25) 0%,
      transparent 100%
    );
    animation: ${scanline} 2.5s linear infinite;
    pointer-events: none;
  }
`;

export const SkeletonRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const SkeletonCard = styled.div`
  background: #fff;
  border: 2px solid #000;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-shadow: 2px 2px 0px 0px #000;
`;

export const SkeletonLine = styled.div`
  height: ${props => props.$height || '12px'};
  width: ${props => props.$width || '100%'};
  background: linear-gradient(
    90deg,
    #e8e8e8 25%,
    #ffffff 50%,
    #e8e8e8 75%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.4s infinite;
  border: 1px solid #000;
`;

export const TerminalStatus = styled.div`
  font-family: 'Courier New', Courier, monospace;
  font-size: 11px;
  font-weight: 800;
  color: #000;
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 4px;
  border-top: 1px dashed #000;
`;

export const StatusPill = styled.span`
  background-color: var(--bg-accent-yellow);
  color: #000;
  border: 1px solid #000;
  padding: 2px 6px;
  font-size: 10px;
  font-weight: 900;
  animation: ${pulseScan} 1.2s infinite;
`;

export const HomeButton = styled.button`
  background-color: var(--bg-accent-blue);
  color: #000;
  font-size: 16px;
  font-weight: 900;
  padding: 14px 36px;
  border: var(--border-main);
  box-shadow: var(--box-shadow-main);
  cursor: pointer;
  transition: all 0.15s ease;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: var(--box-shadow-hover);
    background-color: var(--bg-accent-yellow);
  }

  &:active {
    transform: translate(3px, 3px);
    box-shadow: 0px 0px 0px 0px #000;
  }
`;
