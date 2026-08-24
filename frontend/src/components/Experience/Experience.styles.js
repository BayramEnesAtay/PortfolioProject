import styled, { keyframes } from 'styled-components';

const pulseNode = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.15); }
`;

export const ExperienceContainer = styled.section`
  padding: 140px var(--spacing-lg) var(--spacing-xl);
  max-width: 1100px;
  margin: 0 auto;
  min-height: 100vh;
`;

export const HeaderBox = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.5px;
  margin-bottom: 12px;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: #444;
  font-weight: 600;
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.5;
`;

/* TREE GRAPH WRAPPER */
export const TreeWrapper = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 10px 0 40px;

  /* Ana Dikey Gövde / Trunk Çizgisi */
  &::before {
    content: '';
    position: absolute;
    top: 24px;
    bottom: 24px;
    left: 32px;
    width: 6px;
    background-color: #000;
    z-index: 1;

    @media (min-width: 769px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

/* DALLANAN DÜĞÜM SIRASI (BRANCH ITEM) */
export const BranchItem = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 44px;
  width: 100%;
  align-items: flex-start;

  @media (min-width: 769px) {
    justify-content: ${props => props.$isRight ? 'flex-end' : 'flex-start'};
  }
`;

/* DÜĞÜM NOKTASI (CIRCUIT / GIT COMMIT NODE) */
export const NodePoint = styled.div`
  position: absolute;
  top: 24px;
  left: 32px;
  transform: translate(-50%, -50%);
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${props => props.$bg || 'var(--bg-accent-yellow)'};
  border: 4px solid #000;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 0px 0px #000;

  &::after {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #000;
    animation: ${props => props.$isCurrent ? pulseNode : 'none'} 1.5s infinite;
  }

  @media (min-width: 769px) {
    left: 50%;
  }
`;

/* DALDAN KARTA BAĞLANTI KOLU (CONNECTOR ARM) */
export const ConnectorArm = styled.div`
  position: absolute;
  top: 24px;
  height: 4px;
  background-color: #000;
  z-index: 2;

  /* Mobil görünüm */
  left: 32px;
  width: 32px;

  /* Masaüstü sol / sağ görünüm */
  @media (min-width: 769px) {
    left: ${props => props.$isRight ? '50%' : 'auto'};
    right: ${props => props.$isRight ? 'auto' : '50%'};
    width: 45px;
  }
`;

/* DALLANAN KART İÇERİĞİ */
export const BranchCard = styled.div`
  background-color: #fff;
  border: var(--border-main);
  box-shadow: var(--box-shadow-main);
  width: calc(100% - 64px);
  margin-left: 64px;
  transition: all 0.2s ease;
  overflow: hidden;
  position: relative;

  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: var(--box-shadow-hover);
  }

  @media (min-width: 769px) {
    width: calc(50% - 50px);
    margin-left: 0;
  }
`;

export const BranchCardHeader = styled.div`
  background-color: ${props => props.$bg || 'var(--bg-accent-yellow)'};
  border-bottom: var(--border-main);
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
`;

export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const RoleTitle = styled.h2`
  font-size: 18px;
  font-weight: 900;
  color: #000;
  letter-spacing: -0.3px;
`;

export const CompanyName = styled.span`
  font-size: 14px;
  font-weight: 800;
  color: #222;
`;

export const PeriodBadge = styled.span`
  background-color: #fff;
  color: #000;
  border: 2px solid #000;
  font-size: 11px;
  font-weight: 900;
  padding: 4px 10px;
  box-shadow: 2px 2px 0px 0px #000;
  text-transform: uppercase;
  white-space: nowrap;
`;

export const CardBody = styled.div`
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const MetaText = styled.p`
  font-size: 13px;
  font-weight: 700;
  color: #555;
  margin: 0;
`;

export const ResponsibilitiesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ResponsibilityItem = styled.li`
  font-size: 13.5px;
  line-height: 1.55;
  font-weight: 600;
  color: #222;
  display: flex;
  align-items: flex-start;
  gap: 10px;

  &::before {
    content: '→';
    font-weight: 900;
    color: #000;
    font-size: 15px;
    line-height: 1.3;
    flex-shrink: 0;
  }
`;

export const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding-top: 10px;
  border-top: 1px dashed #ccc;
`;

export const SkillTag = styled.span`
  background-color: #fff;
  border: 1.5px solid #000;
  padding: 4px 10px;
  font-size: 11px;
  font-weight: 800;
  box-shadow: 2px 2px 0px 0px #000;
`;
