import { useLanguage } from '../../context/LanguageContext';
import { ServicesContainer, Title, Grid, Cell, CellHeader, IconWrapper, CellTitle, CellText, LargeNumber } from './Services.styles';

const Services = () => {
  const { t } = useLanguage();

  return (
    <ServicesContainer id="about">
      <Title>{t.services.title} <span>☻</span></Title>
      <Grid>
        <Cell style={{ backgroundColor: 'var(--bg-primary)' }}>
          <div>
            <LargeNumber>{t.services.projectsCount}</LargeNumber>
            <CellText>{t.services.projectsLabel}</CellText>
          </div>
          <div style={{ marginTop: '32px' }}>
            <LargeNumber>{t.services.uptimeCount}</LargeNumber>
            <CellText>{t.services.uptimeLabel}</CellText>
          </div>
        </Cell>

        <Cell>
          <CellHeader>
            <IconWrapper $bgColor="var(--bg-accent-yellow)">⚙️</IconWrapper>
            <CellTitle>{t.services.apiDesignTitle}</CellTitle>
          </CellHeader>
          <CellText>{t.services.apiDesignText}</CellText>
        </Cell>

        <Cell>
          <CellHeader>
            <IconWrapper $bgColor="var(--bg-accent-pink)">#</IconWrapper>
            <CellTitle>{t.services.databaseTitle}</CellTitle>
          </CellHeader>
          <CellText>{t.services.databaseText}</CellText>
        </Cell>

        <Cell style={{ backgroundColor: 'var(--bg-primary)' }}>
          {/* Boş dekoratif hücre */}
        </Cell>

        <Cell>
          <CellHeader>
            <IconWrapper $bgColor="var(--bg-accent-orange)">🛡️</IconWrapper>
            <CellTitle>{t.services.securityTitle}</CellTitle>
          </CellHeader>
          <CellText>{t.services.securityText}</CellText>
        </Cell>

        <Cell>
          <CellHeader>
            <IconWrapper $bgColor="var(--bg-accent-blue)">⚡</IconWrapper>
            <CellTitle>{t.services.architectureTitle}</CellTitle>
          </CellHeader>
          <CellText>{t.services.architectureText}</CellText>
        </Cell>
      </Grid>
    </ServicesContainer>
  );
};

export default Services;
