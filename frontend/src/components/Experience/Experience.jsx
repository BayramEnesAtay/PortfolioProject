import { useLanguage } from '../../context/LanguageContext';
import { experiencesData } from '../../data/experiences';
import { 
  ExperienceContainer, 
  HeaderBox, 
  Title, 
  Subtitle, 
  TreeWrapper,
  BranchItem,
  NodePoint,
  ConnectorArm,
  BranchCard,
  BranchCardHeader,
  HeaderLeft,
  PeriodBadge,
  RoleTitle,
  CompanyName,
  CardBody,
  MetaText,
  ResponsibilitiesList,
  ResponsibilityItem,
  SkillsWrapper,
  SkillTag
} from './Experience.styles';

const Experience = () => {
  const { language, t } = useLanguage();

  return (
    <ExperienceContainer id="experience">
      <HeaderBox>
        <Title>{t.experience.title}</Title>
        <Subtitle>{t.experience.subtitle}</Subtitle>
      </HeaderBox>

      <TreeWrapper>
        {experiencesData.map((exp, index) => {
          const isRight = index % 2 !== 0;
          const isCurrent = index === 0;

          const role = language === 'tr' ? exp.role_tr : exp.role_en;
          const company = language === 'tr' ? exp.company : (exp.company_en || exp.company);
          const period = language === 'tr' ? exp.period_tr : exp.period_en;
          const location = language === 'tr' ? exp.location_tr : exp.location_en;
          const responsibilities = language === 'tr' ? exp.responsibilities_tr : exp.responsibilities_en;

          return (
            <BranchItem key={exp.id} $isRight={isRight}>
              {/* Ağaç Düğüm Noktası */}
              <NodePoint $bg={exp.bg} $isCurrent={isCurrent} />

              {/* Daldan Karta Bağlantı Çizgisi */}
              <ConnectorArm $isRight={isRight} />

              {/* Deneyim Detay Kartı */}
              <BranchCard>
                <BranchCardHeader $bg={exp.bg}>
                  <HeaderLeft>
                    <RoleTitle>{role}</RoleTitle>
                    <CompanyName>{company}</CompanyName>
                  </HeaderLeft>
                  <PeriodBadge>{period}</PeriodBadge>
                </BranchCardHeader>

                <CardBody>
                  {/* Birleştirilmiş ve Düzleştirilmiş Meta Bilgisi */}
                  <MetaText>{location}</MetaText>

                  {/* Kısaltılmış ve Okunabilir Maddeler */}
                  <ResponsibilitiesList>
                    {responsibilities.map((resp, rIdx) => (
                      <ResponsibilityItem key={rIdx}>
                        {resp}
                      </ResponsibilityItem>
                    ))}
                  </ResponsibilitiesList>

                  {/* Korunan Brutalist Tech Stack Etiketleri */}
                  <SkillsWrapper>
                    {exp.skills.map((skill, sIdx) => (
                      <SkillTag key={sIdx}>{skill}</SkillTag>
                    ))}
                  </SkillsWrapper>
                </CardBody>
              </BranchCard>
            </BranchItem>
          );
        })}
      </TreeWrapper>
    </ExperienceContainer>
  );
};

export default Experience;
