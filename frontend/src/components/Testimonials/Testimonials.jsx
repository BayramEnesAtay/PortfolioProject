import { useLanguage } from '../../context/LanguageContext';
import { TestimonialsContainer, Title, CardsWrapper, ReviewCard, ReviewText, ReviewAuthor, AuthorAvatar, AuthorInfo, AuthorName, AuthorTitle } from './Testimonials.styles';

const Testimonials = () => {
  const { t } = useLanguage();

  const cardLayouts = [
    { bg: "var(--bg-accent-pink)", rotation: -4, top: "10%", left: "10%", zIndex: 2 },
    { bg: "var(--bg-accent-yellow)", rotation: 3, top: "20%", right: "10%", zIndex: 3 },
    { bg: "var(--bg-accent-blue)", rotation: -2, bottom: "10%", left: "35%", zIndex: 4 }
  ];

  return (
    <TestimonialsContainer>
      <Title dangerouslySetInnerHTML={{ __html: t.testimonials.title }} />
      <CardsWrapper>
        {t.testimonials.reviews.map((review, index) => {
          const layout = cardLayouts[index] || cardLayouts[0];
          return (
            <ReviewCard 
              key={index} 
              $rotation={layout.rotation}
              $top={layout.top}
              $left={layout.left}
              $right={layout.right}
              $bottom={layout.bottom}
              $zIndex={layout.zIndex}
            >
              <ReviewText>"{review.text}"</ReviewText>
              <ReviewAuthor>
                <AuthorAvatar $bgColor={layout.bg} />
                <AuthorInfo>
                  <AuthorName>{review.name}</AuthorName>
                  <AuthorTitle>{review.title}</AuthorTitle>
                </AuthorInfo>
              </ReviewAuthor>
            </ReviewCard>
          );
        })}
      </CardsWrapper>
    </TestimonialsContainer>
  );
};

export default Testimonials;
