import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--spacing-md) var(--spacing-lg);
  border-top: var(--border-main);
  background-color: var(--bg-primary);
  margin-top: var(--spacing-xl);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const Logo = styled.div`
  font-weight: 900;
  font-size: 20px;
`;

export const Copyright = styled.div`
  font-size: 14px;
  font-weight: 600;

`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
  font-size: 20px;
  cursor: pointer;

  span {
    transition: transform 0.2s ease;
    &:hover {
      transform: scale(1.2);
    }
  }
`;
