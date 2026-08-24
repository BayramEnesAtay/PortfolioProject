import { useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { 
  NotFoundContainer, 
  ErrorCard, 
  DigitsRow,
  DigitCard,
  ErrorTitle, 
  ErrorDescription, 
  WireframePanel,
  WireframeHeader,
  WindowControls,
  WindowDot,
  WireframeBody,
  SkeletonRow,
  SkeletonCard,
  SkeletonLine,
  TerminalStatus,
  StatusPill,
  HomeButton 
} from './NotFound.styles';

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <NotFoundContainer>
      <ErrorCard>
        {/* 3 Boyutlu Yüzen Neo-Brutalist 404 Sayı Kartları */}
        <DigitsRow>
          <DigitCard $bg="var(--bg-accent-yellow)">4</DigitCard>
          <DigitCard $bg="var(--bg-accent-pink)" style={{ animationDelay: '0.4s' }}>0</DigitCard>
          <DigitCard $bg="var(--bg-accent-blue)" style={{ animationDelay: '0.8s' }}>4</DigitCard>
        </DigitsRow>
        
        <ErrorTitle>
          {t.notFound.title}
        </ErrorTitle>

        <ErrorDescription>
          {t.notFound.description} (<code>{location.pathname}</code>)
        </ErrorDescription>

        {/* İnteraktif Skeleton & Wireframe Simülasyon Paneli */}
        <WireframePanel>
          <WireframeHeader>
            <span>{t.notFound.scannerTitle}</span>
            <WindowControls>
              <WindowDot $color="var(--bg-accent-pink)" />
              <WindowDot $color="var(--bg-accent-yellow)" />
              <WindowDot $color="var(--bg-accent-blue)" />
            </WindowControls>
          </WireframeHeader>

          <WireframeBody>
            <SkeletonRow>
              <SkeletonCard>
                <SkeletonLine $height="14px" $width="50%" />
                <SkeletonLine $height="10px" $width="90%" />
                <SkeletonLine $height="10px" $width="70%" />
              </SkeletonCard>
              <SkeletonCard>
                <SkeletonLine $height="14px" $width="65%" />
                <SkeletonLine $height="10px" $width="100%" />
                <SkeletonLine $height="10px" $width="40%" />
              </SkeletonCard>
            </SkeletonRow>

            <TerminalStatus>
              <StatusPill>{t.notFound.scanningPill}</StatusPill>
              <span>&gt; {t.notFound.scannedStatus} "{location.pathname}"</span>
            </TerminalStatus>
          </WireframeBody>
        </WireframePanel>

        <HomeButton onClick={() => navigate('/')}>
          {t.notFound.homeBtn}
        </HomeButton>
      </ErrorCard>
    </NotFoundContainer>
  );
};

export default NotFound;
