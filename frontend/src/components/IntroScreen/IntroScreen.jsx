import { IntroContainer, IntroCard, AvatarWrapper, Name, Role, FollowText, QueryText, EnterButton } from './IntroScreen.styles';

const IntroScreen = ({ onEnter }) => {
  return (
    <IntroContainer>
      <IntroCard>
        <AvatarWrapper>
          👨‍💻
        </AvatarWrapper>
        <Name>B. Enes Atay</Name>
        <Role>Backend Developer</Role>
        <FollowText onClick={() => window.open('https://github.com/benesatay', '_blank')}>
          Follow me
        </FollowText>

        <QueryText>Portfolyoyu incelemek ister misiniz?</QueryText>
        <EnterButton onClick={onEnter}>Enter Portfolio</EnterButton>
      </IntroCard>
    </IntroContainer>
  );
};

export default IntroScreen;
