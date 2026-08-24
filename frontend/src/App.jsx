import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import TechStack from './components/TechStack/TechStack';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import ContactCTA from './components/ContactCTA/ContactCTA';
import Footer from './components/Footer/Footer';
import ProjectDetail from './components/ProjectDetail/ProjectDetail';
import { projectsData } from './data/projects';

const MainContent = styled.main`
  width: 100%;
`;

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(projectsData[0]);

  useEffect(() => {
    // Sayfa değiştiğinde her zaman en üste kaydır
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleNavigate = (page, data = null) => {
    setCurrentPage(page);
    if (data) {
      if (typeof data === 'string') {
        const found = projectsData.find(p => p.id === data);
        if (found) setSelectedProject(found);
      } else {
        setSelectedProject(data);
      }
    }
  };

  return (
    <>
      <GlobalStyles />
      <Navbar 
        activeSection={currentPage === 'projectDetail' ? 'portfolio' : currentPage} 
        onNavClick={handleNavigate} 
      />
      
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
            <Portfolio onNavigate={handleNavigate} />
            <Testimonials />
          </>
        )}

        {currentPage === 'projectDetail' && (
          <ProjectDetail 
            project={selectedProject || projectsData[0]} 
            onBack={() => handleNavigate('portfolio')} 
          />
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
