import { InfinitySpin } from 'react-loader-spinner';
import { useLanguage } from '../../context/LanguageContext';
import { 
  TransitionOverlay, 
  InfinityCard, 
  HeaderTag, 
  InfinityWrapper, 
  FooterText 
} from './TransitionScreen.styles';

const TransitionScreen = ({ label, status }) => {
  const { t } = useLanguage();

  return (
    <TransitionOverlay>
      <InfinityCard>
        <HeaderTag>
          {label || t.transition.loading}
        </HeaderTag>

        <InfinityWrapper>
          <InfinitySpin
            width="180"
            color="#000"
          />
        </InfinityWrapper>

        <FooterText>
          {status || t.transition.status}
        </FooterText>
      </InfinityCard>
    </TransitionOverlay>
  );
};

export default TransitionScreen;
