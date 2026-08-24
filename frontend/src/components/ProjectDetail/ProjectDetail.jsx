import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { projectsData } from '../../data/projects';
import NotFound from '../NotFound/NotFound';
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
  ActionButton, 
  DrawerTriggerButton, 
  DrawerOverlay, 
  DrawerContainer, 
  DrawerHeader, 
  DrawerTitle, 
  DrawerCloseButton, 
  DrawerBody, 
  CommentFormCard, 
  FormTitle, 
  FormInput, 
  FormTextarea, 
  FormSubmitBtn, 
  CommentsList, 
  CommentCard, 
  CommentHeader, 
  AuthorInfo, 
  AuthorName, 
  AuthorRole, 
  CommentDate, 
  CommentText, 
  CommentFooter, 
  UpvoteButton 
} from './ProjectDetail.styles';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language, t } = useLanguage();

  // URL'deki id parametresine gore projeyi bul
  const currentProject = projectsData.find(p => p.id === id);

  // Eger URL'deki id bulunamazsa NotFound skeleton goster
  if (!currentProject) {
    return <NotFound />;
  }

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [comments, setComments] = useState(currentProject.comments || []);
  const [likedMap, setLikedMap] = useState({});
  const [newComment, setNewComment] = useState({
    author: '',
    role: '',
    text: ''
  });

  const handleFormChange = (e) => {
    setNewComment(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!newComment.author || !newComment.text) return;

    const created = {
      id: Date.now(),
      author: newComment.author,
      role: newComment.role || (language === 'tr' ? 'Ziyaretçi Mühendis' : 'Visiting Engineer'),
      date: language === 'tr' ? 'Bugün' : 'Today',
      text_tr: newComment.text,
      text_en: newComment.text,
      upvotes: 1
    };

    setComments(prev => [created, ...prev]);
    setNewComment({ author: '', role: '', text: '' });
  };

  const handleUpvote = (commentId) => {
    setLikedMap(prev => {
      const isAlreadyLiked = prev[commentId];
      const nextState = { ...prev, [commentId]: !isAlreadyLiked };

      setComments(prevComments => 
        prevComments.map(c => {
          if (c.id === commentId) {
            return {
              ...c,
              upvotes: isAlreadyLiked ? c.upvotes - 1 : c.upvotes + 1
            };
          }
          return c;
        })
      );

      return nextState;
    });
  };

  const desc = language === 'tr' ? currentProject.desc_tr : currentProject.desc_en;
  const badge = language === 'tr' ? currentProject.badge_tr : currentProject.badge_en;
  const overview = language === 'tr' ? currentProject.overview_tr : currentProject.overview_en;
  const problem = language === 'tr' ? currentProject.problem_tr : currentProject.problem_en;
  const solution = language === 'tr' ? currentProject.solution_tr : currentProject.solution_en;
  const learnings = language === 'tr' ? currentProject.learnings_tr : currentProject.learnings_en;

  return (
    <DetailContainer>
      {/* Üst Başlık Kartı - Tek Vurgu Rengi (Mavi) */}
      <HeaderBox $bg={currentProject.bg}>
        <BackButton onClick={() => navigate('/portfolio')}>
          {t.projectDetail.back}
        </BackButton>
        {badge && <Badge>{badge}</Badge>}
        <Title>{currentProject.title}</Title>
        <Subtitle>{desc}</Subtitle>
      </HeaderBox>

      {/* 2 SÜTUNLU BENTO GRID - Tüm Hücreler Beyaz Arka Plan */}
      <TwoColumnBentoGrid>
        {/* Satır 1: Teknik Genel Bakış (Sol) | Tech Stack (Sağ) */}
        <BentoRow>
          <BentoCell>
            <CellHeader>
              <CellTitle>{t.projectDetail.overviewTitle}</CellTitle>
              <CellTag>{t.projectDetail.overviewTag}</CellTag>
            </CellHeader>
            <TextContent>
              {overview}
            </TextContent>
          </BentoCell>

          <BentoCell $noBorderRight>
            <CellHeader>
              <CellTitle>{t.projectDetail.techStackTitle}</CellTitle>
              <CellTag>{t.projectDetail.techStackTag}</CellTag>
            </CellHeader>
            <TextContent style={{ marginBottom: '16px', fontSize: '14px', color: '#444' }}>
              {t.projectDetail.techStackSub}
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
          <BentoCell>
            <CellHeader>
              <CellTitle>{t.projectDetail.problemTitle}</CellTitle>
              <CellTag>{t.projectDetail.problemTag}</CellTag>
            </CellHeader>
            <TextContent>
              {problem}
            </TextContent>
          </BentoCell>

          <BentoCell $noBorderRight $noBorderBottomMobile>
            <CellHeader>
              <CellTitle>{t.projectDetail.solutionTitle}</CellTitle>
              <CellTag>{t.projectDetail.solutionTag}</CellTag>
            </CellHeader>
            <TextContent>
              {solution}
            </TextContent>
          </BentoCell>
        </BentoRow>
      </TwoColumnBentoGrid>

      {/* DÜZLEŞTİRİLMİŞ MÜHENDİSLİK KAZANIMLARI BÖLÜMÜ */}
      {learnings && learnings.length > 0 && (
        <LearningsSection>
          <LearningsHeader>
            <LearningsTitle>{t.projectDetail.learningsTitle}</LearningsTitle>
          </LearningsHeader>
          <LearningsGrid>
            {learnings.map((learning, index) => (
              <LearningCard key={index}>
                <LearningIndex>// {String(index + 1).padStart(2, '0')}</LearningIndex>
                <LearningText>{learning}</LearningText>
              </LearningCard>
            ))}
          </LearningsGrid>
        </LearningsSection>
      )}

      {/* Aksiyon Butonları & Drawer Tetikleyici */}
      <ActionRow>
        <ActionButton 
          href={currentProject.githubUrl || "#"} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {t.projectDetail.githubBtn}
        </ActionButton>

        <ActionButton 
          $primary 
          href={currentProject.docsUrl || "#"} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {t.projectDetail.swaggerBtn}
        </ActionButton>

        <DrawerTriggerButton onClick={() => setIsDrawerOpen(true)}>
          {t.projectDetail.commentsBtn} ({comments.length})
        </DrawerTriggerButton>
      </ActionRow>

      {/* SAĞDAN KAYARAK AÇILAN PANEL (OFFCANVAS DRAWER) */}
      <DrawerOverlay $isOpen={isDrawerOpen} onClick={() => setIsDrawerOpen(false)} />
      
      <DrawerContainer $isOpen={isDrawerOpen}>
        <DrawerHeader>
          <DrawerTitle>
            {t.projectDetail.drawerTitle}
            <CellTag>{comments.length}</CellTag>
          </DrawerTitle>
          <DrawerCloseButton onClick={() => setIsDrawerOpen(false)} title="Close">
            ✕
          </DrawerCloseButton>
        </DrawerHeader>

        <DrawerBody>
          {/* Yorum Ekleme Formu */}
          <CommentFormCard>
            <FormTitle>{t.projectDetail.drawerFormTitle}</FormTitle>
            <form onSubmit={handleCommentSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <FormInput 
                type="text" 
                name="author"
                placeholder={t.projectDetail.drawerNamePlaceholder}
                required
                value={newComment.author}
                onChange={handleFormChange}
              />
              <FormInput 
                type="text" 
                name="role"
                placeholder={t.projectDetail.drawerRolePlaceholder}
                value={newComment.role}
                onChange={handleFormChange}
              />
              <FormTextarea 
                name="text"
                placeholder={t.projectDetail.drawerTextPlaceholder}
                required
                value={newComment.text}
                onChange={handleFormChange}
              />
              <FormSubmitBtn type="submit">
                {t.projectDetail.drawerSubmit}
              </FormSubmitBtn>
            </form>
          </CommentFormCard>

          {/* Yorumlar Listesi */}
          <CommentsList>
            {comments.map((comment) => (
              <CommentCard key={comment.id}>
                <CommentHeader>
                  <AuthorInfo>
                    <AuthorName>{comment.author}</AuthorName>
                    <AuthorRole>{comment.role}</AuthorRole>
                  </AuthorInfo>
                  <CommentDate>{comment.date}</CommentDate>
                </CommentHeader>
                <CommentText>
                  {language === 'tr' ? (comment.text_tr || comment.text) : (comment.text_en || comment.text)}
                </CommentText>
                <CommentFooter>
                  <UpvoteButton 
                    $liked={likedMap[comment.id]} 
                    onClick={() => handleUpvote(comment.id)}
                  >
                    {t.projectDetail.drawerUpvote} ({comment.upvotes})
                  </UpvoteButton>
                </CommentFooter>
              </CommentCard>
            ))}
          </CommentsList>
        </DrawerBody>
      </DrawerContainer>
    </DetailContainer>
  );
};

export default ProjectDetail;
