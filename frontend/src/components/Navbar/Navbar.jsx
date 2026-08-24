import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { NavWrapper, NavContainer, Logo, NavLinks, NavLink, LangToggle } from './Navbar.styles';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomeActive = location.pathname === '/' || location.pathname === '/about';
  const isExperienceActive = location.pathname.startsWith('/experience');
  const isPortfolioActive = location.pathname.startsWith('/portfolio');
  const isContactActive = location.pathname === '/contact' || location.pathname === '/hire-me';

  return (
    <NavWrapper $scrolled={scrolled}>
      <NavContainer>
        <Logo onClick={() => navigate('/')}>
          Bayram Enes Atay
        </Logo>
        <NavLinks>
          <NavLink 
            onClick={() => navigate('/')} 
            $isActive={isHomeActive}
            $activeColor="var(--bg-accent-blue)"
          >
            {t.navbar.about}
          </NavLink>
          <NavLink 
            onClick={() => navigate('/experience')} 
            $isActive={isExperienceActive}
            $activeColor="var(--bg-accent-orange)"
          >
            {t.navbar.experience || 'Deneyim'}
          </NavLink>
          <NavLink 
            onClick={() => navigate('/portfolio')} 
            $isActive={isPortfolioActive}
            $activeColor="var(--bg-accent-yellow)"
          >
            {t.navbar.portfolio}
          </NavLink>
          <NavLink 
            onClick={() => navigate('/contact')} 
            $isActive={isContactActive}
            $activeColor="var(--bg-accent-pink)"
          >
            {t.navbar.hireMe}
          </NavLink>
          <LangToggle 
            $lang={language} 
            onClick={toggleLanguage}
            title={language === 'tr' ? 'Switch to English' : 'Türkçe\'ye Geç'}
          >
            {language === 'tr' ? 'TR' : 'EN'}
          </LangToggle>
        </NavLinks>
      </NavContainer>
    </NavWrapper>
  );
};

export default Navbar;
