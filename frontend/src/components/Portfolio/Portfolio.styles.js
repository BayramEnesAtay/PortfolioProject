import styled from 'styled-components';

export const PortfolioContainer = styled.section`
  padding: 140px var(--spacing-lg) var(--spacing-xl);
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  margin-bottom: var(--spacing-lg);
  text-align: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.div`
  border: var(--border-main);
  background-color: #fff;
  padding: 16px;
  box-shadow: var(--box-shadow-main);
  transition: all 0.2s ease;
  
  &:hover {
    transform: translate(-4px, -4px);
    box-shadow: var(--box-shadow-hover);
  }
`;

export const ProjectImage = styled.div`
  width: 100%;
  height: 250px;
  border: var(--border-main);
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  padding: 20px;
`;

export const ProjectInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProjectTitle = styled.h3`
  font-size: 20px;
  font-weight: 800;
`;

export const ProjectDesc = styled.p`
  font-size: 14px;
  color: #555;
  margin-top: 8px;
  line-height: 1.5;
`;

export const LinkButton = styled.button`
  background-color: #000;
  color: #fff;
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
  
  &:hover {
    background-color: var(--bg-accent-yellow);
    color: #000;
  }
`;

/* NEO-BRUTALIST PAGINATION */
export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 48px;
  flex-wrap: wrap;
`;

export const PaginationNavButton = styled.button`
  background-color: #fff;
  color: #000;
  border: var(--border-main);
  box-shadow: 4px 4px 0px 0px #000;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 900;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.35 : 1};
  transition: all 0.15s ease;
  user-select: none;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover:not(:disabled) {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0px 0px #000;
    background-color: var(--bg-accent-blue);
  }

  &:active:not(:disabled) {
    transform: translate(2px, 2px);
    box-shadow: 0px 0px 0px 0px #000;
  }
`;

export const PageNumberButton = styled.button`
  width: 44px;
  height: 44px;
  background-color: ${props => props.$isActive ? 'var(--bg-accent-yellow)' : '#fff'};
  color: #000;
  border: var(--border-main);
  box-shadow: ${props => props.$isActive ? '4px 4px 0px 0px #000' : '3px 3px 0px 0px #000'};
  transform: ${props => props.$isActive ? 'translate(-2px, -2px)' : 'none'};
  font-size: 16px;
  font-weight: 900;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;
  user-select: none;

  &:hover {
    background-color: ${props => props.$isActive ? 'var(--bg-accent-yellow)' : 'var(--bg-accent-pink)'};
    transform: translate(-2px, -2px);
    box-shadow: 5px 5px 0px 0px #000;
  }

  &:active {
    transform: translate(2px, 2px);
    box-shadow: 0px 0px 0px 0px #000;
  }
`;
