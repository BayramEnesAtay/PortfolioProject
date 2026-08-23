import { HeroContainer, LeftColumn, Title, Highlight, CTAButton, RightColumn, Frame, FrameDecoration, BulbIcon, StarIcon } from './Hero.styles';

const Hero = ({ onNavigate }) => {
  return (
    <HeroContainer id="home">
      <LeftColumn>
        <Title>
          I design ✍️ top notch <br /> <Highlight>backends</Highlight>
        </Title>
        <CTAButton onClick={() => onNavigate('portfolio')}>See Portfolio</CTAButton>
      </LeftColumn>
      
      <RightColumn>
        <Frame>
          <FrameDecoration>☻ B. ENES</FrameDecoration>
          <BulbIcon>💡</BulbIcon>
          <StarIcon />
          <span>☻</span>
        </Frame>
      </RightColumn>
    </HeroContainer>
  );
};

export default Hero;
