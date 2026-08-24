import { useState, useEffect } from 'react';
import { NavWrapper, NavContainer, Logo, NavLinks, NavLink } from './Navbar.styles';

const Navbar = ({ activeSection, onNavClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <NavWrapper $scrolled={scrolled}>
      <NavContainer>
        <Logo onClick={() => onNavClick('home')}>
          Bayram Enes Atay
        </Logo>
        <NavLinks>
          <NavLink 
            onClick={() => onNavClick('home')} 
            $isActive={activeSection === 'home'}
            $activeColor="var(--bg-accent-blue)"
          >
            About
          </NavLink>
          <NavLink 
            onClick={() => onNavClick('portfolio')} 
            $isActive={activeSection === 'portfolio'}
            $activeColor="var(--bg-accent-yellow)"
          >
            Portfolio
          </NavLink>
          <NavLink 
            onClick={() => onNavClick('contact')} 
            $isActive={activeSection === 'contact'}
            $activeColor="var(--bg-accent-pink)"
            $isLast
          >
            Hire Me
          </NavLink>
        </NavLinks>
      </NavContainer>
    </NavWrapper>
  );
};

export default Navbar;
