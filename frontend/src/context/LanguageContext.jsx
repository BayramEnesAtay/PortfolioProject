import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Varsayılan dil Türkçe ('tr')
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('app_language');
    return saved === 'en' ? 'en' : 'tr';
  });

  const [isLangTransitioning, setIsLangTransitioning] = useState(false);

  useEffect(() => {
    localStorage.setItem('app_language', language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    if (isLangTransitioning) return;

    setIsLangTransitioning(true);

    // Yükleme ekranı görünürken (300ms sonra) dili değiştir
    setTimeout(() => {
      setLanguage(prev => (prev === 'tr' ? 'en' : 'tr'));
    }, 300);

    // Geçiş tamamlandığında yükleyiciyi kapat (650ms sonra)
    setTimeout(() => {
      setIsLangTransitioning(false);
    }, 650);
  };

  const t = translations[language] || translations.tr;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, isLangTransitioning, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
