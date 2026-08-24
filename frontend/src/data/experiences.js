export const experiencesData = [
  {
    id: "exp-1",
    company: "Kurumsal Savunma & Yazılım Sistemleri",
    company_en: "Enterprise Defense & Software Systems",
    role_tr: "Backend Yazılım Mühendisi",
    role_en: "Backend Software Engineer",
    period_tr: "2025 — Günümüz",
    period_en: "2025 — Present",
    location_tr: "Ankara, TR • Hibrit • Tam Zamanlı",
    location_en: "Ankara, TR • Hybrid • Full-Time",
    bg: "var(--bg-accent-blue)",
    responsibilities_tr: [
      "Controller-Service-Repository katmanlı mimarisiyle ölçeklenebilir RESTful API'lar geliştirdi.",
      "PostgreSQL üzerinde yüksek performanslı indeksleme ve ilişkisel veri modelleme uyguladı.",
      "Spring Security ile stateless JWT kimlik doğrulama ve RBAC altyapısını yönetti.",
      "Docker ve API Gateway ile konteynerize mikroservis dağıtımlarını sürdürdü."
    ],
    responsibilities_en: [
      "Engineered scalable RESTful APIs using strict Controller-Service-Repository layered architecture.",
      "Executed high-performance indexing and complex relational schema modeling on PostgreSQL.",
      "Orchestrated stateless JWT authentication and RBAC via Spring Security.",
      "Maintained containerized microservice deployments with Docker and API Gateways."
    ],
    skills: ["Java 17", "Spring Boot 3", "PostgreSQL", "Docker", "RESTful API", "Hibernate/JPA", "Git"]
  },
  {
    id: "exp-2",
    company: "Fintech & Dağıtık Sistemler Ar-Ge",
    company_en: "Fintech & Distributed Systems R&D",
    role_tr: "Backend Geliştirici",
    role_en: "Backend Developer",
    period_tr: "2024 — 2025",
    period_en: "2024 — 2025",
    location_tr: "İstanbul, TR • Uzaktan • Proje Bazlı",
    location_en: "Istanbul, TR • Remote • Project-Based",
    bg: "var(--bg-accent-yellow)",
    responsibilities_tr: [
      "Mükerrer finansal işlemleri önleyen Redis Distributed Lock ve Idempotency mekanizmalarını kurdu.",
      "RabbitMQ DLQ ve exponential backoff ile sıfır veri kayıplı mesaj kuyrukları geliştirdi.",
      "Stratejik Redis önbellekleme ile yoğun trafik anında veritabanı yükünü %55 azalttı."
    ],
    responsibilities_en: [
      "Built Redis Distributed Locks and Idempotency key filters to prevent duplicate financial transactions.",
      "Configured zero-loss message ingestion pipelines using RabbitMQ DLQ and exponential backoff.",
      "Reduced database load by 55% during peak query traffic through strategic Redis caching."
    ],
    skills: ["Spring Boot", "RabbitMQ", "Redis", "PostgreSQL", "Swagger/OpenAPI", "JUnit 5"]
  },
  {
    id: "exp-3",
    company: "Teknoloji & Yazılım Geliştirme Stajı",
    company_en: "Software Engineering Internship",
    role_tr: "Aday Yazılım Mühendisi / Stajyer",
    role_en: "Software Engineer Intern",
    period_tr: "2023 — 2024",
    period_en: "2023 — 2024",
    location_tr: "Ankara, TR • Ofis • Staj",
    location_en: "Ankara, TR • On-Site • Internship",
    bg: "var(--bg-accent-pink)",
    responsibilities_tr: [
      "JUnit 5 ve Mockito birim/entegrasyon testleriyle kod test kapsamını %85 üzerine çıkardı.",
      "Spring Global Exception Handling (@ControllerAdvice) ile standart hata kontratları oluşturdu.",
      "İlişkisel şema normalizasyonu ve karmaşık SQL sorgu optimizasyonlarına katkı sağladı."
    ],
    responsibilities_en: [
      "Increased automated test coverage beyond 85% by writing unit and integration tests with JUnit 5 and Mockito.",
      "Enforced application-wide error contracts via Spring Global Exception Handling (@ControllerAdvice).",
      "Contributed to relational schema normalization reviews and complex SQL query tuning."
    ],
    skills: ["Java", "Spring Framework", "JUnit / Mockito", "SQL", "Clean Code", "Design Patterns"]
  }
];
