import { projectsData } from '../../data/projects';
import { 
  DetailContainer, 
  HeaderBox, 
  BackButton, 
  Badge,
  Title, 
  Subtitle, 
  TwoColumnBentoGrid,
  BentoRow,
  BentoCell,
  CellHeader,
  CellTitle,
  CellTag,
  TextContent, 
  TechTags, 
  TechTag, 
  LearningsSection,
  LearningsHeader,
  LearningsTitle,
  LearningsGrid,
  LearningCard,
  LearningIndex,
  LearningText,
  ActionRow,
  ActionButton
} from './ProjectDetail.styles';

const ProjectDetail = ({ project, onBack }) => {
  // Eger project prop'u bos gelirse varsayilan olarak ilk projeyi al
  const currentProject = project || projectsData[0];

  return (
    <DetailContainer>
      {/* Üst Başlık Kartı */}
      <HeaderBox $bg={currentProject.bg}>
        <BackButton onClick={onBack}>
          ← Geri Dön
        </BackButton>
        {currentProject.badge && <Badge>{currentProject.badge}</Badge>}
        <Title>{currentProject.title}</Title>
        <Subtitle>{currentProject.desc}</Subtitle>
      </HeaderBox>

      {/* 2 SÜTUNLU BİRLEŞİK BENTO GRID */}
      <TwoColumnBentoGrid>
        {/* Satır 1: Teknik Genel Bakış (Sol) | Tech Stack (Sağ) */}
        <BentoRow>
          <BentoCell $bg="var(--bg-accent-pink)">
            <CellHeader>
              <CellTitle>Teknik Genel Bakış</CellTitle>
              <CellTag>Architecture</CellTag>
            </CellHeader>
            <TextContent>
              {currentProject.overview}
            </TextContent>
          </BentoCell>

          <BentoCell $bg="#fff" $noBorderRight>
            <CellHeader>
              <CellTitle>Tech Stack</CellTitle>
              <CellTag>Stack</CellTag>
            </CellHeader>
            <TextContent style={{ marginBottom: '14px', fontSize: '13px', color: '#555' }}>
              Kullanılan diller, kütüphaneler ve altyapı araçları:
            </TextContent>
            <TechTags>
              {currentProject.technologies?.map((tech, index) => (
                <TechTag key={index}>{tech}</TechTag>
              ))}
            </TechTags>
          </BentoCell>
        </BentoRow>

        {/* Satır 2: Karşılaşılan Sorun (Sol) | Nasıl Çözüldü? (Sağ) */}
        <BentoRow $isLast>
          <BentoCell $bg="#fff">
            <CellHeader>
              <CellTitle $color="#b71c1c">Karşılaşılan Sorun</CellTitle>
              <CellTag $bg="#b71c1c">Challenge</CellTag>
            </CellHeader>
            <TextContent>
              {currentProject.problem}
            </TextContent>
          </BentoCell>

          <BentoCell $bg="var(--bg-accent-yellow)" $noBorderRight $noBorderBottomMobile>
            <CellHeader>
              <CellTitle>Nasıl Çözüldü? (Mühendislik Çözümü)</CellTitle>
              <CellTag>Solution</CellTag>
            </CellHeader>
            <TextContent>
              {currentProject.solution}
            </TextContent>
          </BentoCell>
        </BentoRow>
      </TwoColumnBentoGrid>

      {/* AYRI BÖLÜM: Mühendislik Kazanımları / Bana Ne Kattı? */}
      {currentProject.learnings && currentProject.learnings.length > 0 && (
        <LearningsSection>
          <LearningsHeader>
            <LearningsTitle>Mühendislik Kazanımları // Bana Ne Kattı?</LearningsTitle>
            <CellTag>Takeaways</CellTag>
          </LearningsHeader>
          <LearningsGrid>
            {currentProject.learnings.map((learning, index) => (
              <LearningCard key={index}>
                <LearningIndex>// {String(index + 1).padStart(2, '0')}</LearningIndex>
                <LearningText>{learning}</LearningText>
              </LearningCard>
            ))}
          </LearningsGrid>
        </LearningsSection>
      )}

      {/* Aksiyon Butonları */}
      <ActionRow>
        <ActionButton 
          href={currentProject.githubUrl || "#"} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          GitHub Deposu ↗
        </ActionButton>
        <ActionButton 
          $primary 
          href={currentProject.docsUrl || "#"} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Swagger API Canlı Dokümantasyon ↗
        </ActionButton>
      </ActionRow>
    </DetailContainer>
  );
};

export default ProjectDetail;
