import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { HeroContainer, LeftColumn, Title, Highlight, CTAButton, RightColumn, Frame, FrameDecoration, BulbIcon, StarIcon } from './Hero.styles';

const Hero = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <HeroContainer id="home">
      <LeftColumn>
        <Title>
          {t.hero.titlePart1} <br /> 
          <Highlight>{t.hero.titleHighlight}</Highlight> {t.hero.titlePart2}
        </Title>
        <CTAButton onClick={() => navigate('/portfolio')}>
          {t.hero.seePortfolio}
        </CTAButton>
      </LeftColumn>
      
      <RightColumn>
        <Frame>
          <FrameDecoration>{t.hero.badge}</FrameDecoration>
          <BulbIcon>💡</BulbIcon>
          <StarIcon />
          <span>☻</span>
        </Frame>
      </RightColumn>
    </HeroContainer>
  );
};

export default Hero;
