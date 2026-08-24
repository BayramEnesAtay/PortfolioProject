import { useLanguage } from '../../context/LanguageContext';
import { experiencesData } from '../../data/experiences';
import { 
  ExperienceContainer, 
  HeaderBox, 
  Title, 
  Subtitle, 
  TreeWrapper,
  RootNode,
  RootBadge,
  BranchItem,
  NodePoint,
  ConnectorArm,
  BranchCard,
  BranchCardHeader,
  BranchTagRow,
  BranchHash,
  PeriodBadge,
  RoleTitle,
  CompanyName,
  CardBody,
  MetaRow,
  MetaPill,
  SummaryText,
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
        {/* KÖK DÜĞÜMÜ (ROOT DÜĞÜM) */}
        <RootNode>
          <RootBadge>
            <span>●</span> ROOT // ARCHITECTURE_GRAPH_INIT
          </RootBadge>
        </RootNode>

        {/* DALLANAN AĞAÇ DÜĞÜMLERİ */}
        {experiencesData.map((exp, index) => {
          const isRight = index % 2 !== 0; // Masaüstünde çiftler solda, tekler sağda
          const isCurrent = index === 0;

          const role = language === 'tr' ? exp.role_tr : exp.role_en;
          const company = language === 'tr' ? exp.company : (exp.company_en || exp.company);
          const period = language === 'tr' ? exp.period_tr : exp.period_en;
          const type = language === 'tr' ? exp.type_tr : exp.type_en;
          const badge = language === 'tr' ? exp.badge_tr : exp.badge_en;
          const summary = language === 'tr' ? exp.summary_tr : exp.summary_en;
          const responsibilities = language === 'tr' ? exp.responsibilities_tr : exp.responsibilities_en;

          return (
            <BranchItem key={exp.id} $isRight={isRight}>
              {/* Ağaç Gövdesindeki Düğüm Noktası */}
              <NodePoint $bg={exp.bg} $isCurrent={isCurrent} />

              {/* Daldan Karta Uzanan Bağlantı Kolu */}
              <ConnectorArm $isRight={isRight} />

              {/* Dallanan Deneyim Kartı */}
              <BranchCard>
                <BranchCardHeader $bg={exp.bg}>
                  <BranchTagRow>
                    <BranchHash>
                      // BRANCH: {isCurrent ? 'MAIN_PROD' : `NODE_0${experiencesData.length - index}`}
                    </BranchHash>
                    <PeriodBadge>{period}</PeriodBadge>
                  </BranchTagRow>

                  <RoleTitle>{role}</RoleTitle>
                  <CompanyName>{company}</CompanyName>
                </BranchCardHeader>

                <CardBody>
                  <MetaRow>
                    <MetaPill>{exp.location}</MetaPill>
                    <MetaPill>{type}</MetaPill>
                    {badge && <MetaPill style={{ backgroundColor: 'var(--bg-accent-yellow)', fontWeight: 900 }}>{badge}</MetaPill>}
                  </MetaRow>

                  <SummaryText>{summary}</SummaryText>

                  <div>
                    <ResponsibilitiesList>
                      {responsibilities.map((resp, rIdx) => (
                        <ResponsibilityItem key={rIdx}>
                          {resp}
                        </ResponsibilityItem>
                      ))}
                    </ResponsibilitiesList>
                  </div>

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
