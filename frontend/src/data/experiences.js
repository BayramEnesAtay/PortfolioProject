export const experiencesData = [
  {
    id: "exp-1",
    company: "Kurumsal Savunma & Yazılım Sistemleri",
    company_en: "Enterprise Defense & Software Systems",
    role_tr: "Backend Yazılım Mühendisi",
    role_en: "Backend Software Engineer",
    period_tr: "2025 — Günümüz",
    period_en: "2025 — Present",
    location: "Ankara, TR // Hybrid",
    type_tr: "Tam Zamanlı",
    type_en: "Full-Time",
    bg: "var(--bg-accent-blue)",
    badge_tr: "Aktif Görev",
    badge_en: "Current Role",
    summary_tr: "Yüksek güvenlikli, dağıtık ve katmanlı backend servislerinin mimari tasarımı ve Spring Boot altyapısıyla sıfırdan geliştirilmesi.",
    summary_en: "Architectural design and greenfield implementation of high-security, distributed layered backend services using Spring Boot.",
    responsibilities_tr: [
      "Katmanlı mimari (Controller-Service-Repository) standartlarında ölçeklenebilir RESTful API'lar inşa etme.",
      "PostgreSQL üzerinde karmaşık ilişkisel veri modelleri ve performanslı indeksleme stratejileri uygulama.",
      "Spring Security ve JWT tabanlı rol bazlı erişim denetimi (RBAC) mekanizmalarını yönetme.",
      "Docker ve mikroservis ekosistemlerinde dağıtık loglama ve API Gateway entegrasyonlarını yürütme."
    ],
    responsibilities_en: [
      "Engineered scalable RESTful API services adhering to strict layered architecture (Controller-Service-Repository).",
      "Applied high-performance indexing and complex relational schema modeling on PostgreSQL.",
      "Orchestrated Spring Security stateless JWT authentication and role-based access control (RBAC).",
      "Maintained containerized microservice deployments with Docker, API Gateways, and distributed logging."
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
    location: "İstanbul, TR // Remote",
    type_tr: "Proje Bazlı",
    type_en: "Project-Based",
    bg: "var(--bg-accent-yellow)",
    badge_tr: "Fintech & Kuyruk",
    badge_en: "Fintech & Queues",
    summary_tr: "Finansal işlemler için Idempotency desenleri, RabbitMQ asenkron mesaj kuyrukları ve Redis önbellekleme altyapılarının kurulumu.",
    summary_en: "Engineered financial transaction idempotency pipelines, RabbitMQ asynchronous message queues, and Redis distributed caching layers.",
    responsibilities_tr: [
      "Mükerrer para çekimlerini engelleyen Redis Distributed Lock ve Idempotency mekanizmalarını kurma.",
      "RabbitMQ Dead Letter Queue (DLQ) ve Exponential Backoff ile sıfır veri kayıplı webhook kuyrukları geliştirme.",
      "Yüksek trafikli sorgularda veritabanı yükünü %55 azaltan Redis önbellek optimizasyonları yapma."
    ],
    responsibilities_en: [
      "Built Redis Distributed Lock and Idempotency key validation to prevent duplicate transaction executions.",
      "Configured zero-loss message ingestion pipelines using RabbitMQ Dead Letter Queues and Exponential Backoff.",
      "Reduced database workload by 55% during traffic peaks through strategic Redis caching."
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
    location: "Ankara, TR // On-Site",
    type_tr: "Staj",
    type_en: "Internship",
    bg: "var(--bg-accent-pink)",
    badge_tr: "Mühendislik Temelleri",
    badge_en: "Core Foundations",
    summary_tr: "Clean Code prensipleri, SOLID yazılım prensipleri, birim test yazımı ve kurumsal veri tabanı tasarımı üzerine yoğunlaşma.",
    summary_en: "Focused on Clean Code practices, SOLID design patterns, unit testing with JUnit/Mockito, and relational database normalization.",
    responsibilities_tr: [
      "Birim ve entegrasyon testleri (JUnit 5, Mockito) yazarak kod kapsamını (test coverage) %85 üzerine çıkarma.",
      "Global Exception Handling (@ControllerAdvice) ile standart hata yakalama mekanizmasını projeye kazandırma.",
      "İlişkisel veritabanı normalizasyonu ve SQL sorgu optimizasyonu süreçlerine aktif katılım."
    ],
    responsibilities_en: [
      "Elevated automated test coverage beyond 85% by writing unit and integration tests with JUnit 5 and Mockito.",
      "Implemented uniform application-wide error handling contracts using Global Exception Handling (@ControllerAdvice).",
      "Contributed to database normalization schema reviews and complex SQL query tuning."
    ],
    skills: ["Java", "Spring Framework", "JUnit / Mockito", "SQL", "Clean Code", "Design Patterns"]
  }
];
