import styled from 'styled-components';

export const HeroContainer = styled.section`
  padding: 165px var(--spacing-lg) 60px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    gap: 60px;
    padding: 140px var(--spacing-lg) 40px;
  }
`;

export const LeftColumn = styled.div`
  flex: 1;
  position: relative;
`;

export const Title = styled.h1`
  font-size: 38px;
  font-weight: 900;
  line-height: 1.25;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: -0.5px;
  color: #000;
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const Highlight = styled.span`
  background-color: var(--bg-accent-yellow);
  padding: 2px 8px;
  display: inline-block;
  transform: rotate(-1.5deg);
  border: 2px solid #000;
  box-shadow: 3px 3px 0px 0px #000;
`;

export const BioText = styled.p`
  font-size: 21px;
  line-height: 1.7;
  color: #1a1a1a;
  font-weight: 600;
  max-width: 600px;
  margin-bottom: 32px;

  @media (max-width: 900px) {
    margin-left: auto;
    margin-right: auto;
    font-size: 17px;
    line-height: 1.65;
  }
`;

export const CTAButton = styled.button`
  background-color: var(--bg-accent-blue);
  color: #000;
  font-size: 18px;
  font-weight: 900;
  padding: 15px 38px;
  border: var(--border-main);
  border-radius: 50px;
  cursor: pointer;
  box-shadow: var(--box-shadow-main);
  transition: all 0.2s ease;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: var(--box-shadow-hover);
    background-color: var(--bg-accent-yellow);
  }

  &:active {
    transform: translate(4px, 4px);
    box-shadow: var(--box-shadow-active);
  }
`;

export const RightColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  position: relative;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

export const Frame = styled.div`
  width: 380px;
  height: 380px;
  border: var(--border-main);
  background-color: #d8d8d8;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80px;

  &::before, &::after {
    content: '';
    position: absolute;
    background-color: #000;
  }
  
  &::before {
    width: 110%;
    height: 4px;
    top: -10px;
    left: -5%;
  }
  &::after {
    height: 110%;
    width: 4px;
    left: -10px;
    top: -5%;
  }
  
  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

export const FrameDecoration = styled.div`
  position: absolute;
  top: -40px;
  left: 20%;
  font-weight: 900;
  font-size: 18px;
  transform: rotate(-15deg);
  font-family: 'Comic Sans MS', cursive, sans-serif;
`;

export const BulbIcon = styled.div`
  position: absolute;
  left: -25px;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 60px;
  background-color: var(--bg-accent-yellow);
  border: var(--border-main);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  z-index: 10;
`;

export const StarIcon = styled.div`
  position: absolute;
  bottom: -30px;
  right: -30px;
  width: 80px;
  height: 80px;
  background-color: var(--bg-accent-pink);
  border: var(--border-main);
  z-index: 10;
  transform: rotate(15deg);
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
`;
