import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

export const TechContainer = styled.div`
  background-color: #000;
  color: #fff;
  padding: 24px 0;
  overflow: hidden;
  border-top: var(--border-main);
  border-bottom: var(--border-main);
  white-space: nowrap;
  position: relative;
`;

export const TechTrack = styled.div`
  display: inline-block;
  animation: ${scroll} 20s linear infinite;
`;

export const TechItem = styled.span`
  font-size: 28px;
  font-weight: 800;
  margin: 0 40px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
