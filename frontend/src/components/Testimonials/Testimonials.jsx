import { TestimonialsContainer, Title, CardsWrapper, ReviewCard, ReviewText, ReviewAuthor, AuthorAvatar, AuthorInfo, AuthorName, AuthorTitle } from './Testimonials.styles';

const Testimonials = () => {
  const reviews = [
    {
      text: "Mükemmel bir mimari kurguladı. Projemiz %40 daha hızlı çalışıyor ve ölçeklenmeye hazır.",
      name: "Ahmet Y.",
      title: "Tech Lead",
      bg: "var(--bg-accent-pink)",
      rotation: -4,
      top: "10%",
      left: "10%",
      zIndex: 2
    },
    {
      text: "Temiz kod ve anlaşılır API dokümantasyonu sayesinde frontend ekibi olarak hiç zorlanmadık.",
      name: "Ayşe K.",
      title: "Frontend Developer",
      bg: "var(--bg-accent-yellow)",
      rotation: 3,
      top: "20%",
      right: "10%",
      zIndex: 3
    },
    {
      text: "Veritabanı tasarımı konusundaki uzmanlığı tartışılmaz. Çok memnun kaldık.",
      name: "Mehmet D.",
      title: "Product Manager",
      bg: "var(--bg-accent-blue)",
      rotation: -2,
      bottom: "10%",
      left: "35%",
      zIndex: 4
    }
  ];

  return (
    <TestimonialsContainer>
      <Title>Here's what my clients <br/> are saying about my work 🚀</Title>
      <CardsWrapper>
        {reviews.map((review, index) => (
          <ReviewCard 
            key={index} 
            $rotation={review.rotation}
            $top={review.top}
            $left={review.left}
            $right={review.right}
            $bottom={review.bottom}
            $zIndex={review.zIndex}
          >
            <ReviewText>"{review.text}"</ReviewText>
            <ReviewAuthor>
              <AuthorAvatar $bgColor={review.bg} />
              <AuthorInfo>
                <AuthorName>{review.name}</AuthorName>
                <AuthorTitle>{review.title}</AuthorTitle>
              </AuthorInfo>
            </ReviewAuthor>
          </ReviewCard>
        ))}
      </CardsWrapper>
    </TestimonialsContainer>
  );
};

export default Testimonials;
