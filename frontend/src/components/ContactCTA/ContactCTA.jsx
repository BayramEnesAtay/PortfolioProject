import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { 
  ContactContainer, 
  CTAWrapper, 
  StatusBadge,
  Title, 
  Description, 
  InfoPills,
  InfoPill,
  ContactButton,
  ModalOverlay,
  ModalContainer,
  CloseButton,
  ModalHeader,
  ModalTitle,
  ModalSubtitle,
  Form,
  FormGroup,
  Label,
  Input,
  Textarea,
  SubmitButton,
  SuccessBox
} from './ContactCTA.styles';

const ContactCTA = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating API call for feedback module
    setSubmitted(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    // Reset after closing
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 200);
  };

  return (
    <ContactContainer id="contact">
      <CTAWrapper>
        <StatusBadge>{t.contact.statusBadge}</StatusBadge>
        
        <Title>{t.contact.title}</Title>
        
        <Description>
          {t.contact.description}
        </Description>

        <InfoPills>
          <InfoPill>{t.contact.pillResponse}</InfoPill>
          <InfoPill>{t.contact.pillStack}</InfoPill>
          <InfoPill>{t.contact.pillArch}</InfoPill>
        </InfoPills>

        <ContactButton onClick={() => setIsOpen(true)}>
          {t.contact.button}
        </ContactButton>
      </CTAWrapper>

      {/* POPUP / MODAL DİYALOGU */}
      {isOpen && (
        <ModalOverlay onClick={handleClose}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={handleClose} title="Kapat">
              ✕
            </CloseButton>

            <ModalHeader>
              <ModalTitle>{t.contact.modalTitle}</ModalTitle>
              <ModalSubtitle>
                {t.contact.modalSubtitle}
              </ModalSubtitle>
            </ModalHeader>

            {submitted ? (
              <SuccessBox>
                <h4 style={{ fontSize: '18px', fontWeight: 900, textTransform: 'uppercase' }}>
                  {t.contact.successTitle}
                </h4>
                <p style={{ fontSize: '14px', lineHeight: 1.5, fontWeight: 600 }}>
                  {t.contact.successText}
                </p>
                <SubmitButton onClick={handleClose} style={{ marginTop: '12px' }}>
                  {t.contact.successClose}
                </SubmitButton>
              </SuccessBox>
            ) : (
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label>{t.contact.labelName}</Label>
                  <Input 
                    type="text" 
                    name="name"
                    required
                    placeholder={t.contact.namePlaceholder}
                    value={formData.name}
                    onChange={handleChange}
                  />
                </FormGroup>

                <FormGroup>
                  <Label>{t.contact.labelEmail}</Label>
                  <Input 
                    type="email" 
                    name="email"
                    required
                    placeholder={t.contact.emailPlaceholder}
                    value={formData.email}
                    onChange={handleChange}
                  />
                </FormGroup>

                <FormGroup>
                  <Label>{t.contact.labelSubject}</Label>
                  <Input 
                    type="text" 
                    name="subject"
                    required
                    placeholder={t.contact.subjectPlaceholder}
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </FormGroup>

                <FormGroup>
                  <Label>{t.contact.labelMessage}</Label>
                  <Textarea 
                    name="message"
                    required
                    placeholder={t.contact.messagePlaceholder}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </FormGroup>

                <SubmitButton type="submit">
                  {t.contact.submitBtn}
                </SubmitButton>
              </Form>
            )}
          </ModalContainer>
        </ModalOverlay>
      )}
    </ContactContainer>
  );
};

export default ContactCTA;
