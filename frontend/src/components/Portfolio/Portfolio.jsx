import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { projectsData } from '../../data/projects';
import TransitionScreen from '../TransitionScreen/TransitionScreen';
import { 
  PortfolioContainer, 
  Title, 
  Grid, 
  ProjectCard, 
  ProjectImage, 
  ProjectInfo, 
  ProjectTitle, 
  ProjectDesc, 
  LinkButton,
  PaginationContainer,
  PaginationNavButton,
  PageNumberButton
} from './Portfolio.styles';

const ITEMS_PER_PAGE = 4;

const Portfolio = () => {
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);
  const [isPageTransitioning, setIsPageTransitioning] = useState(false);

  // Toplam sayfa sayısını hesapla
  const totalPages = Math.ceil(projectsData.length / ITEMS_PER_PAGE);

  // O anki sayfaya ait projeleri dilimle (slice)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = projectsData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleCardClick = (projectId) => {
    navigate(`/portfolio/${projectId}`);
  };

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages || newPage === currentPage || isPageTransitioning) return;
    
    // 1. Geçiş ekranını (TransitionScreen) aç
    setIsPageTransitioning(true);

    // 2. Ekran kapalıyken sayfayı değiştir ve tepeye kaydır
    setTimeout(() => {
      setCurrentPage(newPage);
      window.scrollTo(0, 0);
    }, 250);

    // 3. Geçiş tamamlandığında yükleme ekranını kapat
    setTimeout(() => {
      setIsPageTransitioning(false);
    }, 550);
  };

  return (
    <PortfolioContainer id="portfolio">
      {/* Sayfalama sırasındaki geçiş animasyonu */}
      {isPageTransitioning && <TransitionScreen />}

      <Title>{t.portfolio.title} 💠</Title>
      
      <Grid>
        {currentProjects.map((project) => (
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

      {/* SAYFALAMA (PAGINATION) BİLEŞENİ */}
      {totalPages > 1 && (
        <PaginationContainer>
          {/* Önceki Sayfa Butonu */}
          <PaginationNavButton 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1 || isPageTransitioning}
          >
            {t.portfolio.prevPage || '← Önceki'}
          </PaginationNavButton>

          {/* Sayfa Numaraları */}
          {Array.from({ length: totalPages }, (_, index) => {
            const pageNum = index + 1;
            return (
              <PageNumberButton
                key={pageNum}
                $isActive={currentPage === pageNum}
                onClick={() => handlePageChange(pageNum)}
                disabled={isPageTransitioning}
              >
                {pageNum}
              </PageNumberButton>
            );
          })}

          {/* Sonraki Sayfa Butonu */}
          <PaginationNavButton 
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages || isPageTransitioning}
          >
            {t.portfolio.nextPage || 'Sonraki →'}
          </PaginationNavButton>
        </PaginationContainer>
      )}
    </PortfolioContainer>
  );
};

export default Portfolio;
