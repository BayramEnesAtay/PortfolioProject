import styled from 'styled-components';

export const TestimonialsContainer = styled.section`
  padding: var(--spacing-xl) var(--spacing-lg);
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  min-height: 600px;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  margin-bottom: var(--spacing-xl);
`;

export const CardsWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    gap: 20px;
  }
`;

export const ReviewCard = styled.div`
  position: absolute;
  width: 320px;
  background-color: #fff;
  border: var(--border-main);
  padding: 20px;
  box-shadow: 4px 4px 0px 0px #000;
  transform: ${props => props.$rotation ? `rotate(${props.$rotation}deg)` : 'none'};
  transition: all 0.3s ease;
  z-index: ${props => props.$zIndex || 1};
  
  top: ${props => props.$top || 'auto'};
  left: ${props => props.$left || 'auto'};
  right: ${props => props.$right || 'auto'};
  bottom: ${props => props.$bottom || 'auto'};

  &:hover {
    z-index: 10;
    transform: rotate(0deg) scale(1.05);
    box-shadow: 8px 8px 0px 0px #000;
  }
  
  @media (max-width: 768px) {
    position: relative;
    top: auto !important;
    left: auto !important;
    right: auto !important;
    bottom: auto !important;
    transform: none !important;
  }
`;

export const ReviewText = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 16px;
  text-align: left;
`;

export const ReviewAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const AuthorAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: var(--border-thin);
  background-color: ${props => props.$bgColor || '#ccc'};
`;

export const AuthorInfo = styled.div`
  text-align: left;
`;

export const AuthorName = styled.h4`
  font-size: 14px;
  font-weight: 800;
`;

export const AuthorTitle = styled.p`
  font-size: 12px;
  color: #666;
`;
