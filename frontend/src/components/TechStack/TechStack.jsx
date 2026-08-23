import { TechContainer, TechTrack, TechItem } from './TechStack.styles';

const TechStack = () => {
  const technologies = ['Spring Boot', 'PostgreSQL', 'React', 'Java', 'Docker', 'REST API', 'Hibernate'];
  
  const displayTechs = [...technologies, ...technologies, ...technologies];

  return (
    <TechContainer>
      <TechTrack>
        {displayTechs.map((tech, index) => (
          <TechItem key={index}>{tech}</TechItem>
        ))}
      </TechTrack>
    </TechContainer>
  );
};

export default TechStack;
