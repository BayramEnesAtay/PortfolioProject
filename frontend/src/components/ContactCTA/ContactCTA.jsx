import { useState } from 'react';
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
        <StatusBadge>Available for Backend / Architecture Roles</StatusBadge>
        
        <Title>Let's build your architecture</Title>
        
        <Description>
          Performanslı, güvenli ve ölçeklenebilir backend sistemleri, RESTful API mimarileri veya veritabanı modellemesi için doğrudan mesaj bırakabilirsiniz.
        </Description>

        <InfoPills>
          <InfoPill>Yanıt Süresi: &lt; 24 Saat</InfoPill>
          <InfoPill>Stack: Spring Boot & PostgreSQL</InfoPill>
          <InfoPill>Mimari: Clean Code & Layered</InfoPill>
        </InfoPills>

        <ContactButton onClick={() => setIsOpen(true)}>
          Send us message ↗
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
              <ModalTitle>Mesaj Gönder //</ModalTitle>
              <ModalSubtitle>
                Geri Bildirim Modülü: Doğrudan backend ve veritabanı katmanına iletilir.
              </ModalSubtitle>
            </ModalHeader>

            {submitted ? (
              <SuccessBox>
                <h4 style={{ fontSize: '18px', fontWeight: 900, textTransform: 'uppercase' }}>
                  Mesajınız Alındı!
                </h4>
                <p style={{ fontSize: '14px', lineHeight: 1.5, fontWeight: 600 }}>
                  Geri bildiriminiz başarıyla iletildi. Backend servisleriniz bağlandığında bu mesaj doğrudan PostgreSQL veritabanınıza kaydedilecektir.
                </p>
                <SubmitButton onClick={handleClose} style={{ marginTop: '12px' }}>
                  Tamam
                </SubmitButton>
              </SuccessBox>
            ) : (
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label>Ad Soyad</Label>
                  <Input 
                    type="text" 
                    name="name"
                    required
                    placeholder="Adınız ve Soyadınız"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </FormGroup>

                <FormGroup>
                  <Label>E-Posta Adresi</Label>
                  <Input 
                    type="email" 
                    name="email"
                    required
                    placeholder="ornek@sirket.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Konu Başlığı</Label>
                  <Input 
                    type="text" 
                    name="subject"
                    required
                    placeholder="Proje Teklifi / İş Birliği / Soru"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Mesaj İçeriği</Label>
                  <Textarea 
                    name="message"
                    required
                    placeholder="Projeniz veya iletmek istediğiniz detayları buraya yazabilirsiniz..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </FormGroup>

                <SubmitButton type="submit">
                  Mesajı Gönder ↗
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
