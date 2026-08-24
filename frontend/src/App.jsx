import { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { PixelCursorTrail } from '@/components/ui/pixel-trail';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import TransitionScreen from './components/TransitionScreen/TransitionScreen';

// Code Splitting (Lazy Loading)
const Home = lazy(() => import('./components/Home/Home'));
const Experience = lazy(() => import('./components/Experience/Experience'));
const Portfolio = lazy(() => import('./components/Portfolio/Portfolio'));
const ProjectDetail = lazy(() => import('./components/ProjectDetail/ProjectDetail'));
const ContactCTA = lazy(() => import('./components/ContactCTA/ContactCTA'));
const NotFound = lazy(() => import('./components/NotFound/NotFound'));

const MainContent = styled.main`
  width: 100%;
`;

// Rota degistiginde otomatik tepeye kaydiran ve kisa gecis hissi veren yonetici
const RouteTransitionWatcher = () => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 450);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return isTransitioning ? <TransitionScreen /> : null;
};

function AppContent() {
  const { isLangTransitioning, t } = useLanguage();

  return (
    <>
      <GlobalStyles />
      <PixelCursorTrail colors={['#00f59b', '#ff4d4d']} />
      <Navbar />
      <RouteTransitionWatcher />
      
      {/* Dil degisimi sirasinda acilan yukleme ekrani */}
      {isLangTransitioning && (
        <TransitionScreen 
          label={t.transition.langSwitch} 
          status={t.transition.langStatus} 
        />
      )}
      
      <MainContent>
        <Suspense fallback={<TransitionScreen />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<ProjectDetail />} />
            <Route path="/contact" element={<ContactCTA />} />
            <Route path="/hire-me" element={<ContactCTA />} />
            {/* Gecersiz URL'ler icin 404 Skeleton Sayfasi */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        
        <Footer />
      </MainContent>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
