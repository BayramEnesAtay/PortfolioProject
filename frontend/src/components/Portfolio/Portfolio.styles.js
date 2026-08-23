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
  
  &:hover {
    background-color: var(--bg-accent-yellow);
    color: #000;
  }
`;
