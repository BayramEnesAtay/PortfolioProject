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

const Portfolio = ({ onNavigate }) => {
  const handleCardClick = (project) => {
    if (onNavigate) {
      onNavigate('projectDetail', project);
    }
  };

  return (
    <PortfolioContainer id="portfolio">
      <Title>My Portfolio 💠</Title>
      <Grid>
        {projectsData.map((project) => (
          <ProjectCard 
            key={project.id} 
            onClick={() => handleCardClick(project)} 
            style={{ cursor: 'pointer' }}
          >
            <ProjectImage style={{ backgroundColor: project.bg }}>
              {project.title}
            </ProjectImage>
            <ProjectInfo>
              <div>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDesc>{project.desc}</ProjectDesc>
              </div>
              <LinkButton 
                onClick={(e) => {
                  e.stopPropagation();
                  handleCardClick(project);
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
