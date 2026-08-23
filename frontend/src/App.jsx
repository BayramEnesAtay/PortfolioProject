import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import Navbar from './components/Navbar/Navbar';
import IntroScreen from './components/IntroScreen/IntroScreen';
import Hero from './components/Hero/Hero';
import TechStack from './components/TechStack/TechStack';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import ContactCTA from './components/ContactCTA/ContactCTA';
import Footer from './components/Footer/Footer';

// MainContent'in padding'ini kaldırdık, çünkü her sayfanın kendi üst boşluğu (140px) var
const MainContent = styled.main`
  width: 100%;
`;

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Sayfa değiştiğinde her zaman en üste kaydır
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <GlobalStyles />
      <Navbar activeSection={currentPage} onNavClick={handleNavigate} />
      
      <MainContent>
        {currentPage === 'home' && (
          <>
            <Hero onNavigate={() => handleNavigate('portfolio')} />
            <TechStack />
            <Services />
          </>
        )}

        {currentPage === 'portfolio' && (
          <>
            <Portfolio />
            <Testimonials />
          </>
        )}

        {currentPage === 'contact' && (
          <ContactCTA />
        )}

        <Footer />
      </MainContent>
    </>
  );
}

export default App;
