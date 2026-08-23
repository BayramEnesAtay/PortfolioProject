import { ContactContainer, CTAWrapper, Title, Description, ContactButton } from './ContactCTA.styles';

const ContactCTA = () => {
  const handleAlert = () => {
    alert("Backend hazır olunca burası doğrudan veritabanına (Geri Bildirim Modülü) bağlanacak!");
  };

  return (
    <ContactContainer id="contact">
      <CTAWrapper>
        <Title>Let's build your architecture</Title>
        <Description>
          Performanslı ve güvenli backend sistemlerine mi ihtiyacınız var? Bana bir mesaj gönderin.
        </Description>
        <ContactButton onClick={handleAlert}>Send us message</ContactButton>
      </CTAWrapper>
    </ContactContainer>
  );
};

export default ContactCTA;
