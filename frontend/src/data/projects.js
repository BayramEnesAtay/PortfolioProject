export const projectsData = [
  {
    id: "ecommerce-api",
    title: "E-Commerce API",
    subtitle: "Enterprise Backend Architecture",
    bg: "var(--bg-accent-blue)",
    badge_tr: "API Mimarisi",
    badge_en: "API Architecture",
    desc_tr: "Spring Boot, PostgreSQL ve Katmanlı Mimari ile sıfırdan geliştirilmiş, kurumsal standartlarda E-Ticaret RESTful API altyapısı.",
    desc_en: "Enterprise-grade E-Commerce RESTful API platform custom-built from scratch with Spring Boot, PostgreSQL, and Layered Architecture.",
    overview_tr: "Bu projede herhangi bir hazır BaaS veya CMS çözümü kullanılmamıştır. Savunma sanayi ve kurumsal teknoloji firmalarının standartlarına uygun şekilde Controller, Service ve Repository katmanları tamamen izole edilmiş, Global Exception Handling mekanizması ve Swagger dokümantasyonu entegre edilmiştir.",
    overview_en: "No third-party BaaS or CMS solutions were used. Controller, Service, and Repository layers are strictly decoupled to meet enterprise standards, featuring custom Global Exception Handling and integrated interactive Swagger documentation.",
    technologies: ["Java 17", "Spring Boot 3", "PostgreSQL", "Hibernate / JPA", "Docker", "Swagger (OpenAPI)", "JUnit 5"],
    problem_tr: "Geleneksel monolitik yapılarda kontrolsüz exception fırlatmaları istemciye anlamsız 500 hataları döndürüyor, karmaşık ilişkisel veri modellerinde ise N+1 sorgu problemleri ciddi gecikmelere ve veri tutarsızlıklarına yol açıyordu.",
    problem_en: "Uncontrolled runtime exceptions returned ambiguous 500 error payloads to clients, while N+1 query problems in complex relational models caused substantial database latency and inconsistency.",
    solution_tr: "Controller, Service ve Repository katmanları tamamen izole edildi. Global Exception Handler (@ControllerAdvice) ile standart hata nesneleri kurgulandı. JPA @EntityGraph ve özel indekslemeler ile veritabanı sorgu süreleri optimize edildi.",
    solution_en: "Strict layered isolation was enforced across Controller, Service, and Repository tiers. Global Exception Handler (@ControllerAdvice) provides uniform JSON error contracts. JPA @EntityGraph and custom indexing optimized query latencies.",
    learnings_tr: [
      "Kurumsal seviyede katmanlı mimari izolasyonu kurularak kodun test edilebilirliği ve sürdürülebilirliği güvenceye alındı.",
      "Global Exception Handler ile istemciye anlamsız 500 hataları yerine standartlaştırılmış hata nesneleri dönüldü.",
      "PostgreSQL üzerinde karmaşık ilişkisel veri modelleri ve performanslı sorgu optimizasyonları yapıldı.",
      "Swagger/OpenAPI entegrasyonuyla ekip içi API şeffaflığı ve dokümantasyon standardı sağlandı."
    ],
    learnings_en: [
      "Secured enterprise-grade testability and maintainability through strict layer decoupling.",
      "Replaced arbitrary 500 server crashes with standardized, meaningful client-facing JSON error payloads.",
      "Optimized complex PostgreSQL schemas and executed performance-driven query indexing.",
      "Enforced seamless API transparency through live Swagger/OpenAPI documentation."
    ],
    comments: [
      { id: 1, author: "Ahmet Yılmaz", role: "Software Architect", date: "12 Ağu 2026", text_tr: "Controller ve Service katmanlarının izolasyonu çok temiz uygulanmış. Özellikle Global Exception Handling yapısı kurumsal standartlarda.", text_en: "Clean layer isolation across controllers and services. Global Exception Handling meets enterprise standards.", upvotes: 14 },
      { id: 2, author: "Merve Çelik", role: "Lead Backend Developer", date: "15 Ağu 2026", text_tr: "N+1 sorgu optimizasyonu ve EntityGraph kullanımı sorgu yükünü çok ciddi rahatlatır. Başarılı bir mimari.", text_en: "EntityGraph usage and N+1 query optimization significantly reduce database bottleneck. Great architecture.", upvotes: 8 }
    ],
    githubUrl: "https://github.com",
    docsUrl: "https://swagger.io"
  },
  {
    id: "task-management",
    title: "Task Management System",
    subtitle: "Security & Role-Based Access Control",
    bg: "var(--bg-accent-pink)",
    badge_tr: "Güvenlik & Yetkilendirme",
    badge_en: "Security & Auth",
    desc_tr: "Spring Security ve JWT tabanlı, rol bazlı yetkilendirme (RBAC) ve yüksek güvenlik standartlarına sahip görev yönetim sistemi.",
    desc_en: "Task and workflow management system featuring Spring Security, stateless JWT authentication, and fine-grained Role-Based Access Control (RBAC).",
    overview_tr: "Kullanıcıların ve ekiplerin görevlerini güvenli bir şekilde yönetebileceği, stateless JWT kimlik doğrulaması ve Redis önbellekleme (caching) ile güçlendirilmiş güvenli backend altyapısı.",
    overview_en: "A robust backend infrastructure enabling teams to manage tasks securely, powered by stateless JWT authentication, Redis caching, and granular authorization policies.",
    technologies: ["Spring Boot", "Spring Security", "JWT (JSON Web Token)", "Redis", "PostgreSQL", "BCrypt"],
    problem_tr: "Kullanıcı ve rol sayısı arttıkça session bazlı oturumların yatayda ölçeklenememesi, yetkisiz endpoint erişimleri ve sık tekrarlanan izin sorgularının veritabanını aşırı yorması.",
    problem_en: "Stateful session stores failed to scale horizontally as roles grew, leading to unauthorized endpoint exposures and repetitive authorization queries overloading the database.",
    solution_tr: "Spring Security Filter Chain özelleştirilerek stateless JWT ve Refresh Token mekanizması kuruldu. Metod seviyesinde @PreAuthorize ile rol bazlı yetkilendirme (RBAC) sağlandı ve sık okunan kullanıcı yetkileri Redis üzerinde önbelleklendi.",
    solution_en: "Customized Spring Security Filter Chain to implement stateless JWT and Refresh Token flows. Applied method-level @PreAuthorize RBAC rules and cached user privileges in Redis to offload DB traffic.",
    learnings_tr: [
      "Spring Security filtre zincirini (Filter Chain) özelleştirerek stateless JWT mekanizmasını sıfırdan kurgulama.",
      "Redis entegrasyonuyla veritabanı yükünü %60 azaltacak akıllı önbellek stratejileri geliştirme.",
      "Şifreleme (BCrypt) ve güvenli oturum yönetimi prensiplerini uygulama."
    ],
    learnings_en: [
      "Customized Spring Security Filter Chain from scratch for stateless JWT session management.",
      "Engineered intelligent Redis caching strategies, slashing database authorization load by 60%.",
      "Mastered robust cryptographic hashing (BCrypt) and enterprise token security best practices."
    ],
    comments: [
      { id: 1, author: "Burak Kaya", role: "Security Engineer", date: "18 Ağu 2026", text_tr: "Stateless JWT ve Redis caching kurgusu harika. Role-based erişim kontrolü method seviyesinde çok iyi korunmuş.", text_en: "Stateless JWT and Redis caching pipeline is excellent. Method-level RBAC is strictly safeguarded.", upvotes: 11 },
      { id: 2, author: "Can Demir", role: "Tech Lead", date: "20 Ağu 2026", text_tr: "Refresh token rotasyonu ve brute-force koruması dikkat çekici bir mühendislik detayı.", text_en: "Refresh token rotation and brute-force mitigation demonstrate solid engineering attention.", upvotes: 6 }
    ],
    githubUrl: "https://github.com",
    docsUrl: "https://swagger.io"
  },
  {
    id: "analytics-dashboard",
    title: "Analytics & Metrics Engine",
    subtitle: "Data Aggregation & Caching",
    bg: "var(--bg-accent-yellow)",
    badge_tr: "Veri İşleme",
    badge_en: "Data Processing",
    desc_tr: "Büyük veri setlerini işleyen, dinamik görüntülenme/beğeni etkileşim analizlerini anlık toplayan veri işleme servisi.",
    desc_en: "High-throughput asynchronous data aggregation engine processing real-time upvotes, views, and user analytics.",
    overview_tr: "Kullanıcı etkileşimlerini (sayfa görüntülenme, beğeni/upvote, reaksiyonlar) anlık olarak işleyen, zaman serisi veri agregasyonu sağlayan asenkron backend motoru.",
    overview_en: "An asynchronous backend engine performing time-series data aggregation and processing high-frequency user interactions (views, upvotes, reactions) in real time.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Spring WebFlux", "Prometheus", "Grafana"],
    problem_tr: "Binlerce anlık beğeni (upvote) ve sayfa görüntülenme isteğinin senkron olarak veritabanına yazılması, satır kilitlenmelerine (row lock), yüksek gecikmelere ve veritabanı darboğazına yol açıyordu.",
    problem_en: "Synchronous database writes under concurrent spikes (upvotes/views) triggered severe row locking, elevated latencies, and critical database IO bottlenecks.",
    solution_tr: "Senkron DB yazımları yerine Spring WebFlux ve asenkron kuyruk yapıları kurgulandı. İstekler hafızada gruplanarak (batch aggregation) veritabanına toplu aktarıldı ve Materialized Views ile anlık raporlama sağlandı.",
    solution_en: "Replaced synchronous writes with reactive Spring WebFlux pipelines and in-memory batch aggregation queues. Accelerated analytical queries via PostgreSQL Materialized Views.",
    learnings_tr: [
      "Yüksek trafikli etkileşimleri (Upvote/View) veritabanını kilitlemeden işlemek için asenkron yapıları kurgulama.",
      "İlişkisel veritabanında agregasyon sorgularını indeksleyerek sorgu sürelerini milisaniyelere indirme.",
      "Sistem sağlığı ve metrik takibi için APM entegrasyonu sağlama."
    ],
    learnings_en: [
      "Designed asynchronous non-blocking queues to digest high-volume user traffic without locking databases.",
      "Reduced aggregation query response times to single-digit milliseconds through strategic indexing.",
      "Configured Prometheus & Grafana APM metrics for live system observability."
    ],
    comments: [
      { id: 1, author: "Serkan Öztürk", role: "Data Platform Architect", date: "21 Ağu 2026", text_tr: "WebFlux ve asenkron batch aggregation ile PostgreSQL kilitleme sorununun çözülmesi çok profesyonelce.", text_en: "Resolving PostgreSQL lock contention via WebFlux batch aggregation is top-tier engineering.", upvotes: 19 },
      { id: 2, author: "Elif Kara", role: "DevOps Engineer", date: "22 Ağu 2026", text_tr: "Prometheus ve Grafana metrik entegrasyonu canlı sistem izleme için kusursuz kurgulanmış.", text_en: "Prometheus and Grafana metrics setup provides exceptional production-grade observability.", upvotes: 9 }
    ],
    githubUrl: "https://github.com",
    docsUrl: "https://swagger.io"
  },
  {
    id: "inventory-system",
    title: "Distributed Inventory System",
    subtitle: "Microservices & Event Streaming",
    bg: "var(--bg-accent-orange)",
    badge_tr: "Mikroservisler",
    badge_en: "Microservices",
    desc_tr: "Kafka tabanlı dağıtık mesajlaşma ve mikroservis mimarisi ile tasarlanmış stok ve envanter yönetim platformu.",
    desc_en: "Distributed inventory & stock orchestration ecosystem powered by Apache Kafka event streaming and microservice patterns.",
    overview_tr: "Servisler arası haberleşmeyi Apache Kafka ile asenkron yürüten, API Gateway ve Eureka Service Discovery ile koordine edilen ölçeklenebilir mikroservis ekosistemi.",
    overview_en: "A distributed microservice ecosystem leveraging Apache Kafka for asynchronous event orchestration, governed by Spring Cloud Gateway and Eureka Service Discovery.",
    technologies: ["Spring Cloud", "Apache Kafka", "Eureka Discovery", "Spring Cloud Gateway", "Docker Compose", "PostgreSQL"],
    problem_tr: "Sipariş ve stok servislerinin birbirine sıkı bağımlı (tightly coupled) REST çağrıları yapması nedeniyle ağ kesintilerinde veri tutarsızlığı ve basamaklı çökmeler (cascading failures) yaşanması.",
    problem_en: "Tightly coupled synchronous REST communications between order and stock services caused data inconsistency during network faults and triggered cascading system outages.",
    solution_tr: "Servisler arası haberleşme Apache Kafka event streaming ile asenkron hale getirildi. Dağıtık veri tutarlılığı için SAGA deseni ve Circuit Breaker mekanizmaları kurgulanarak sistem dayanıklılığı maksimuma çıkarıldı.",
    solution_en: "Decoupled inter-service communications using Apache Kafka event topics. Enforced eventual consistency with SAGA orchestration patterns and shielded services with Circuit Breakers.",
    learnings_tr: [
      "Monolitik yapıdan mikroservis mimarisine geçiş adımları ve servis sınırlarının (Domain-Driven Design) belirlenmesi.",
      "Kafka topic ve partition mimarisi ile veri kaybı olmadan yüksek işlem hacmi yönetimi.",
      "Mikroservis ortamında dağıtık loglama ve tracing altyapısı."
    ],
    learnings_en: [
      "Mastered monolithic-to-microservices migration and domain boundary definition (DDD).",
      "Handled high-throughput message streaming without data loss via Kafka topic & partition tuning.",
      "Built distributed tracing and centralized logging infrastructure across microservice nodes."
    ],
    comments: [
      { id: 1, author: "Volkan Arslan", role: "Enterprise Cloud Architect", date: "23 Ağu 2026", text_tr: "Kafka event streaming ve SAGA deseniyle dağıtık veri tutarlılığı sağlamak ileri seviye bir backend yetkinliği.", text_en: "SAGA patterns and Kafka event streaming for distributed consistency reflect advanced backend mastery.", upvotes: 22 }
    ],
    githubUrl: "https://github.com",
    docsUrl: "https://swagger.io"
  }
];
