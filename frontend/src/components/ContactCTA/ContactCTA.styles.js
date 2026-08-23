import styled from 'styled-components';

export const ContactContainer = styled.section`
  padding: 140px var(--spacing-lg) var(--spacing-xl);
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  min-height: 100vh;
`;

export const CTAWrapper = styled.div`
  background-color: #fff;
  border: var(--border-main);
  padding: 60px 40px;
  box-shadow: 8px 8px 0px 0px #000;
  position: relative;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 16px;
`;

export const Description = styled.p`
  font-size: 16px;
  margin-bottom: 32px;
  color: #333;
`;

export const ContactButton = styled.button`
  background-color: var(--bg-accent-blue);
  color: #000;
  font-size: 20px;
  font-weight: 800;
  padding: 16px 40px;
  border: var(--border-main);
  border-radius: 50px;
  cursor: pointer;
  box-shadow: var(--box-shadow-main);
  transition: all 0.2s ease;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: var(--box-shadow-hover);
  }

  &:active {
    transform: translate(6px, 6px);
    box-shadow: var(--box-shadow-active);
  }
`;
