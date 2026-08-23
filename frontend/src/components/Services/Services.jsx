import { ServicesContainer, Title, Grid, Cell, CellHeader, IconWrapper, CellTitle, CellText, LargeNumber } from './Services.styles';

const Services = () => {
  return (
    <ServicesContainer id="about">
      <Title>Backend & Architecture <span>☻</span></Title>
      <Grid>
        <Cell style={{ backgroundColor: 'var(--bg-primary)' }}>
          <div>
            <LargeNumber>15+</LargeNumber>
            <CellText>Backend Projects</CellText>
          </div>
          <div style={{ marginTop: '32px' }}>
            <LargeNumber>99%</LargeNumber>
            <CellText>Uptime Focus</CellText>
          </div>
        </Cell>

        <Cell>
          <CellHeader>
            <IconWrapper $bgColor="var(--bg-accent-yellow)">⚙️</IconWrapper>
            <CellTitle>API Design</CellTitle>
          </CellHeader>
          <CellText>RESTful mimariler ve temiz kod prensipleriyle ölçeklenebilir, dökümante edilmiş (Swagger) sistemler inşa ediyorum.</CellText>
        </Cell>

        <Cell>
          <CellHeader>
            <IconWrapper $bgColor="var(--bg-accent-pink)">#</IconWrapper>
            <CellTitle>Database</CellTitle>
          </CellHeader>
          <CellText>PostgreSQL ile kompleks veri modelleme, performans optimizasyonu ve veri bütünlüğü yönetimi.</CellText>
        </Cell>

        <Cell style={{ backgroundColor: 'var(--bg-primary)' }}>
          {/* Boş bırakılabilir veya ek metin konabilir */}
        </Cell>

        <Cell>
          <CellHeader>
            <IconWrapper $bgColor="var(--bg-accent-orange)">🛡️</IconWrapper>
            <CellTitle>Security</CellTitle>
          </CellHeader>
          <CellText>Spring Security ile güvenli, JWT tabanlı ve role dayalı yetkilendirme (authorization) altyapıları kuruyorum.</CellText>
        </Cell>

        <Cell>
          <CellHeader>
            <IconWrapper $bgColor="var(--bg-accent-blue)">⚡</IconWrapper>
            <CellTitle>Architecture</CellTitle>
          </CellHeader>
          <CellText>Katmanlı mimari (Layered Architecture) ve sürdürülebilir sistem tasarımı ile kurumsal standartlarda kodlama yapıyorum.</CellText>
        </Cell>
      </Grid>
    </ServicesContainer>
  );
};

export default Services;
