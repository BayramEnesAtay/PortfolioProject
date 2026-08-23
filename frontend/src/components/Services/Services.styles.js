import styled from 'styled-components';

export const ServicesContainer = styled.section`
  padding: var(--spacing-xl) var(--spacing-lg);
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  margin-bottom: var(--spacing-lg);
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: var(--border-main);
  box-shadow: var(--box-shadow-main);
  background-color: #fff;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Cell = styled.div`
  padding: var(--spacing-lg);
  border-right: var(--border-thin);
  border-bottom: var(--border-thin);
  display: flex;
  flex-direction: column;

  &:nth-child(3n) {
    border-right: none;
  }

  /* Alt satırdaki öğelerin alt çizgisini kaldıralım (son 3 öğe) */
  &:nth-last-child(-n+3) {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    border-right: none !important;
    border-bottom: var(--border-thin) !important;
    &:last-child {
      border-bottom: none !important;
    }
  }
`;

export const CellHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

export const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: var(--border-thin);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.$bgColor || '#fff'};
  font-size: 20px;
  font-weight: bold;
`;

export const CellTitle = styled.h3`
  font-size: 18px;
  font-weight: 800;
`;

export const CellText = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #333;
`;

export const LargeNumber = styled.div`
  font-size: 48px;
  font-weight: 900;
  margin-bottom: 8px;
`;
