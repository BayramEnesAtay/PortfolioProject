import styled from 'styled-components';

export const ContactContainer = styled.section`
  padding: 140px var(--spacing-lg) var(--spacing-xl);
  max-width: 900px;
  margin: 0 auto;
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CTAWrapper = styled.div`
  background-color: #fff;
  border: var(--border-main);
  padding: 56px 48px;
  box-shadow: 10px 10px 0px 0px #000;
  position: relative;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 40px 24px;
  }
`;

export const StatusBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: #000;
  color: #fff;
  font-size: 12px;
  font-weight: 800;
  padding: 6px 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-radius: 2px;

  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #00ff66;
    box-shadow: 0 0 6px #00ff66;
  }
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 900;
  line-height: 1.15;
  text-transform: uppercase;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  max-width: 620px;
  color: #333;
  line-height: 1.6;
  font-weight: 500;
`;

export const InfoPills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin: 4px 0 12px;
`;

export const InfoPill = styled.span`
  background-color: var(--bg-primary);
  border: 2px solid #000;
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 700;
  box-shadow: 2px 2px 0px 0px #000;
`;

export const ContactButton = styled.button`
  background-color: var(--bg-accent-blue);
  color: #000;
  font-size: 18px;
  font-weight: 900;
  padding: 16px 44px;
  border: var(--border-main);
  border-radius: 50px;
  cursor: pointer;
  box-shadow: var(--box-shadow-main);
  transition: all 0.15s ease;
  display: inline-flex;
  align-items: center;
  gap: 10px;

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

/* MODAL / POPUP STYLES */
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100000;
  padding: 20px;
`;

export const ModalContainer = styled.div`
  background-color: #fff;
  border: var(--border-main);
  box-shadow: 12px 12px 0px 0px #000;
  width: 100%;
  max-width: 560px;
  position: relative;
  padding: 36px 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 600px) {
    padding: 28px 20px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -16px;
  right: -16px;
  background-color: var(--bg-accent-pink);
  border: var(--border-main);
  box-shadow: 4px 4px 0px 0px #000;
  width: 40px;
  height: 40px;
  font-weight: 900;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;

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

export const ModalHeader = styled.div`
  border-bottom: 2px solid #000;
  padding-bottom: 14px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ModalTitle = styled.h3`
  font-size: 24px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.5px;
`;

export const ModalSubtitle = styled.p`
  font-size: 14px;
  color: #555;
  font-weight: 500;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  text-align: left;
`;

export const Label = styled.label`
  font-size: 13px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.3px;
`;

export const Input = styled.input`
  border: 3px solid #000;
  background-color: var(--bg-primary);
  padding: 12px 14px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  outline: none;
  box-shadow: 3px 3px 0px 0px #000;
  transition: all 0.15s ease;

  &:focus {
    background-color: #fff;
    box-shadow: 5px 5px 0px 0px var(--bg-accent-yellow);
  }
`;

export const Textarea = styled.textarea`
  border: 3px solid #000;
  background-color: var(--bg-primary);
  padding: 12px 14px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  outline: none;
  box-shadow: 3px 3px 0px 0px #000;
  resize: vertical;
  min-height: 110px;
  transition: all 0.15s ease;

  &:focus {
    background-color: #fff;
    box-shadow: 5px 5px 0px 0px var(--bg-accent-yellow);
  }
`;

export const SubmitButton = styled.button`
  background-color: var(--bg-accent-yellow);
  color: #000;
  font-size: 16px;
  font-weight: 900;
  padding: 14px 28px;
  border: var(--border-main);
  box-shadow: var(--box-shadow-main);
  cursor: pointer;
  transition: all 0.15s ease;
  margin-top: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: var(--box-shadow-hover);
    background-color: var(--bg-accent-blue);
  }

  &:active {
    transform: translate(2px, 2px);
    box-shadow: 0px 0px 0px 0px #000;
  }
`;

export const SuccessBox = styled.div`
  background-color: var(--bg-accent-yellow);
  border: var(--border-main);
  padding: 24px;
  box-shadow: 4px 4px 0px 0px #000;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
