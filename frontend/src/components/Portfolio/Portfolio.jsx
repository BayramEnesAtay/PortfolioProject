import { PortfolioContainer, Title, Grid, ProjectCard, ProjectImage, ProjectInfo, ProjectTitle, ProjectDesc, LinkButton } from './Portfolio.styles';

const Portfolio = () => {
  const projects = [
    { title: "E-Commerce API", desc: "Spring Boot - PostgreSQL - Layered Architecture", bg: "var(--bg-accent-blue)" },
    { title: "Task Management", desc: "Spring Security - JWT - RESTful", bg: "var(--bg-accent-pink)" },
    { title: "Analytics Dashboard", desc: "Java - Data Aggregation - Caching", bg: "var(--bg-accent-yellow)" },
    { title: "Inventory System", desc: "Microservices Architecture", bg: "var(--bg-accent-orange)" }
  ];

  const handleLink = () => {
    alert("Proje detayına veya Github reposuna yönlendirilecek!");
  };

  return (
    <PortfolioContainer id="portfolio">
      <Title>My Portfolio 💠</Title>
      <Grid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectImage style={{ backgroundColor: project.bg }}>
              {project.title} API
            </ProjectImage>
            <ProjectInfo>
              <div>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDesc>{project.desc}</ProjectDesc>
              </div>
              <LinkButton onClick={handleLink}>↗</LinkButton>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </Grid>
    </PortfolioContainer>
  );
};

export default Portfolio;
