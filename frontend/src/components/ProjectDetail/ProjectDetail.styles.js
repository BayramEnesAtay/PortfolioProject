import styled from 'styled-components';

export const DetailContainer = styled.section`
  padding: 140px var(--spacing-lg) var(--spacing-xl);
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 28px;
  min-height: calc(100vh - 200px);
`;

export const HeaderBox = styled.div`
  background-color: ${props => props.$bg || 'var(--bg-accent-yellow)'};
  border: var(--border-main);
  box-shadow: var(--box-shadow-main);
  padding: 44px 32px 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;

  @media (max-width: 768px) {
    padding: 44px 20px 24px;
  }
`;

export const BackButton = styled.button`
  position: absolute;
  top: -20px;
  left: 24px;
  background-color: #fff;
  border: var(--border-main);
  box-shadow: 4px 4px 0px 0px #000;
  padding: 8px 20px;
  font-weight: 800;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.15s ease;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  z-index: 10;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0px 0px #000;
    background-color: var(--bg-accent-yellow);
  }
  
  &:active {
    transform: translate(2px, 2px);
    box-shadow: 0px 0px 0px 0px #000;
  }
`;

export const Badge = styled.span`
  align-self: flex-start;
  background-color: #000;
  color: #fff;
  font-weight: 800;
  font-size: 12px;
  padding: 5px 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 900;
  line-height: 1.1;
  text-transform: uppercase;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const Subtitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #222;
  line-height: 1.4;
`;

/* 2 SÜTUNLU MASTER BENTO ÇERÇEVESİ */
export const TwoColumnBentoGrid = styled.div`
  display: flex;
  flex-direction: column;
  border: var(--border-main);
  box-shadow: var(--box-shadow-main);
  background-color: #fff;
  overflow: hidden;
`;

export const BentoRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: ${props => props.$isLast ? 'none' : 'var(--border-main)'};

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

export const BentoCell = styled.div`
  padding: 28px 32px;
  background-color: ${props => props.$bg || '#fff'};
  border-right: ${props => props.$noBorderRight ? 'none' : 'var(--border-main)'};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 850px) {
    border-right: none !important;
    border-bottom: ${props => props.$noBorderBottomMobile ? 'none' : 'var(--border-main)'};
    padding: 24px 20px;
  }
`;

export const CellHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  padding-bottom: 10px;
  border-bottom: 2px dashed #000;
`;

export const CellTitle = styled.h3`
  font-size: 17px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.3px;
  color: ${props => props.$color || '#000'};
`;

export const CellTag = styled.span`
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  padding: 3px 8px;
  background-color: ${props => props.$bg || '#000'};
  color: #fff;
  border-radius: 2px;
`;

export const TextContent = styled.p`
  font-size: 15px;
  line-height: 1.7;
  font-weight: 500;
  color: #222;
`;

export const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const TechTag = styled.span`
  background-color: #000;
  color: #fff;
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 700;
  border-radius: 3px;
  box-shadow: 2px 2px 0px 0px rgba(0,0,0,0.15);
  border: 1px solid #222;
`;

/* AYRI MÜHENDİSLİK KAZANIMLARI BÖLÜMÜ */
export const LearningsSection = styled.div`
  border: var(--border-main);
  box-shadow: var(--box-shadow-main);
  background-color: var(--bg-accent-blue);
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 24px 20px;
  }
`;

export const LearningsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #000;
  padding-bottom: 12px;
`;

export const LearningsTitle = styled.h3`
  font-size: 20px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.3px;
`;

export const LearningsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const LearningCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: #fff;
  padding: 16px 20px;
  border: 2px solid #000;
  box-shadow: 4px 4px 0px 0px #000;
`;

export const LearningIndex = styled.span`
  font-size: 12px;
  font-weight: 900;
  color: #000;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

export const LearningText = styled.p`
  font-size: 14px;
  line-height: 1.6;
  font-weight: 600;
  color: #111;
`;

export const ActionRow = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 8px;
`;

export const ActionButton = styled.a`
  background-color: ${props => props.$primary ? 'var(--bg-accent-yellow)' : '#fff'};
  color: #000;
  font-size: 16px;
  font-weight: 900;
  padding: 14px 28px;
  border: var(--border-main);
  box-shadow: var(--box-shadow-main);
  text-decoration: none;
  cursor: pointer;
  transition: all 0.15s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: var(--box-shadow-hover);
    background-color: ${props => props.$primary ? 'var(--bg-accent-blue)' : 'var(--bg-accent-yellow)'};
  }
  
  &:active {
    transform: translate(3px, 3px);
    box-shadow: 0px 0px 0px 0px #000;
  }
`;

export const DrawerTriggerButton = styled.button`
  background-color: var(--bg-accent-pink);
  color: #000;
  font-size: 16px;
  font-weight: 900;
  padding: 14px 28px;
  border: var(--border-main);
  box-shadow: var(--box-shadow-main);
  cursor: pointer;
  transition: all 0.15s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  position: relative;

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

/* SAĞDAN AÇILAN PANEL (DRAWER / OFFCANVAS) */
export const DrawerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  z-index: 100000;
  opacity: ${props => props.$isOpen ? 1 : 0};
  pointer-events: ${props => props.$isOpen ? 'auto' : 'none'};
  transition: opacity 0.3s ease;
`;

export const DrawerContainer = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 480px;
  height: 100vh;
  background-color: #fff;
  border-left: var(--border-main);
  box-shadow: -10px 0px 0px 0px #000;
  z-index: 100001;
  transform: translateX(${props => props.$isOpen ? '0%' : '100%'});
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const DrawerHeader = styled.div`
  padding: 24px 28px;
  background-color: var(--bg-accent-yellow);
  border-bottom: var(--border-main);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const DrawerTitle = styled.h3`
  font-size: 20px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.5px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const DrawerCloseButton = styled.button`
  background-color: var(--bg-accent-pink);
  border: var(--border-main);
  box-shadow: 3px 3px 0px 0px #000;
  width: 36px;
  height: 36px;
  font-weight: 900;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 5px 5px 0px 0px #000;
    background-color: #fff;
  }

  &:active {
    transform: translate(2px, 2px);
    box-shadow: 0px 0px 0px 0px #000;
  }
`;

export const DrawerBody = styled.div`
  overflow-y: auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
`;

/* FORM IN DRAWER */
export const CommentFormCard = styled.div`
  background-color: var(--bg-primary);
  border: var(--border-main);
  box-shadow: 4px 4px 0px 0px #000;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const FormTitle = styled.h4`
  font-size: 15px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  border-bottom: 2px dashed #000;
  padding-bottom: 8px;
`;

export const FormInput = styled.input`
  border: 2px solid #000;
  background-color: #fff;
  padding: 10px 12px;
  font-family: inherit;
  font-size: 13px;
  font-weight: 600;
  outline: none;
  box-shadow: 2px 2px 0px 0px #000;

  &:focus {
    box-shadow: 4px 4px 0px 0px var(--bg-accent-yellow);
  }
`;

export const FormTextarea = styled.textarea`
  border: 2px solid #000;
  background-color: #fff;
  padding: 10px 12px;
  font-family: inherit;
  font-size: 13px;
  font-weight: 600;
  outline: none;
  box-shadow: 2px 2px 0px 0px #000;
  resize: vertical;
  min-height: 80px;

  &:focus {
    box-shadow: 4px 4px 0px 0px var(--bg-accent-yellow);
  }
`;

export const FormSubmitBtn = styled.button`
  background-color: var(--bg-accent-blue);
  color: #000;
  font-size: 14px;
  font-weight: 900;
  padding: 10px 20px;
  border: var(--border-main);
  box-shadow: 3px 3px 0px 0px #000;
  cursor: pointer;
  transition: all 0.15s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  align-self: flex-start;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 5px 5px 0px 0px #000;
    background-color: var(--bg-accent-yellow);
  }

  &:active {
    transform: translate(2px, 2px);
    box-shadow: 0px 0px 0px 0px #000;
  }
`;

/* COMMENT ITEMS IN DRAWER */
export const CommentsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CommentCard = styled.div`
  background-color: #fff;
  border: var(--border-main);
  box-shadow: 4px 4px 0px 0px #000;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CommentHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding-bottom: 8px;
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AuthorName = styled.span`
  font-size: 14px;
  font-weight: 900;
  color: #000;
`;

export const AuthorRole = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: #666;
`;

export const CommentDate = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: #888;
`;

export const CommentText = styled.p`
  font-size: 13px;
  line-height: 1.6;
  font-weight: 500;
  color: #222;
`;

export const CommentFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 4px;
`;

export const UpvoteButton = styled.button`
  background-color: ${props => props.$liked ? 'var(--bg-accent-yellow)' : '#fff'};
  border: 2px solid #000;
  box-shadow: 2px 2px 0px 0px #000;
  padding: 4px 10px;
  font-size: 12px;
  font-weight: 800;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.15s ease;

  &:hover {
    transform: translate(-1px, -1px);
    box-shadow: 3px 3px 0px 0px #000;
  }

  &:active {
    transform: translate(1px, 1px);
    box-shadow: 0px 0px 0px 0px #000;
  }
`;
