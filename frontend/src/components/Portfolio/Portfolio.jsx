import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { projectsData } from '../../data/projects';
import { 
  PortfolioContainer, 
  Title, 
  Grid, 
  ProjectCard, 
  ProjectImage, 
  ProjectInfo, 
  ProjectTitle, 
  ProjectDesc, 
  LinkButton 
} from './Portfolio.styles';

const Portfolio = () => {
  const navigate = useNavigate();
  const { language, t } = useLanguage();

  const handleCardClick = (projectId) => {
    navigate(`/portfolio/${projectId}`);
  };

  return (
    <PortfolioContainer id="portfolio">
      <Title>{t.portfolio.title}</Title>
      <Grid>
        {projectsData.map((project) => (
          <ProjectCard 
            key={project.id} 
            onClick={() => handleCardClick(project.id)} 
            style={{ cursor: 'pointer' }}
          >
            <ProjectImage style={{ backgroundColor: project.bg }}>
              {project.title}
            </ProjectImage>
            <ProjectInfo>
              <div>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDesc>
                  {language === 'tr' ? project.desc_tr : project.desc_en}
                </ProjectDesc>
              </div>
              <LinkButton 
                onClick={(e) => {
                  e.stopPropagation();
                  handleCardClick(project.id);
                }}
              >
                ↗
              </LinkButton>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </Grid>
    </PortfolioContainer>
  );
};

export default Portfolio;
