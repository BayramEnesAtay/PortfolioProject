export const projectsData = [
  {
    id: "ecommerce-api",
    title: "E-Commerce API",
    subtitle: "Enterprise Backend Architecture",
    desc: "Spring Boot, PostgreSQL ve Katmanlı Mimari ile sıfırdan geliştirilmiş, kurumsal standartlarda E-Ticaret RESTful API altyapısı.",
    bg: "var(--bg-accent-blue)",
    badge: "API Architecture",
    overview: "Bu projede herhangi bir hazır BaaS veya CMS çözümü kullanılmamıştır. Savunma sanayi ve kurumsal teknoloji firmalarının (Havelsan vb.) standartlarına uygun şekilde Controller, Service ve Repository katmanları tamamen izole edilmiş, Global Exception Handling mekanizması ve Swagger dokümantasyonu entegre edilmiştir.",
    technologies: ["Java 17", "Spring Boot 3", "PostgreSQL", "Hibernate / JPA", "Docker", "Swagger (OpenAPI)", "JUnit 5"],
    problem: "Geleneksel monolitik yapılarda kontrolsüz exception fırlatmaları istemciye anlamsız 500 hataları döndürüyor, karmaşık ilişkisel veri modellerinde ise N+1 sorgu problemleri ciddi gecikmelere ve veri tutarsızlıklarına yol açıyordu.",
    solution: "Controller, Service ve Repository katmanları tamamen izole edildi. Global Exception Handler (@ControllerAdvice) ile standart hata nesneleri kurgulandı. JPA @EntityGraph ve özel indekslemeler ile veritabanı sorgu süreleri optimize edildi.",
    learnings: [
      "Kurumsal seviyede katmanlı mimari izolasyonu kurularak kodun test edilebilirliği ve sürdürülebilirliği güvenceye alındı.",
      "Global Exception Handler ile istemciye anlamsız 500 hataları yerine standartlaştırılmış hata nesneleri dönüldü.",
      "PostgreSQL üzerinde karmaşık ilişkisel veri modelleri ve performanslı sorgu optimizasyonları yapıldı.",
      "Swagger/OpenAPI entegrasyonuyla ekip içi API şeffaflığı ve dokümantasyon standardı sağlandı."
    ],
    githubUrl: "https://github.com",
    docsUrl: "https://swagger.io"
  },
  {
    id: "task-management",
    title: "Task Management System",
    subtitle: "Security & Role-Based Access Control",
    desc: "Spring Security ve JWT tabanlı, rol bazlı yetkilendirme (RBAC) ve yüksek güvenlik standartlarına sahip görev yönetim sistemi.",
    bg: "var(--bg-accent-pink)",
    badge: "Security & Auth",
    overview: "Kullanıcıların ve ekiplerin görevlerini güvenli bir şekilde yönetebileceği, stateless JWT kimlik doğrulaması ve Redis önbellekleme (caching) ile güçlendirilmiş güvenli backend altyapısı.",
    technologies: ["Spring Boot", "Spring Security", "JWT (JSON Web Token)", "Redis", "PostgreSQL", "BCrypt"],
    problem: "Kullanıcı ve rol sayısı arttıkça session bazlı oturumların yatayda ölçeklenememesi, yetkisiz endpoint erişimleri ve sık tekrarlanan izin sorgularının veritabanını aşırı yorması.",
    solution: "Spring Security Filter Chain özelleştirilerek stateless JWT ve Refresh Token mekanizması kuruldu. Metod seviyesinde @PreAuthorize ile rol bazlı yetkilendirme (RBAC) sağlandı ve sık okunan kullanıcı yetkileri Redis üzerinde önbelleklendi.",
    learnings: [
      "Spring Security filtre zincirini (Filter Chain) özelleştirerek stateless JWT mekanizmasını sıfırdan kurgulama.",
      "Redis entegrasyonuyla veritabanı yükünü %60 azaltacak akıllı önbellek stratejileri geliştirme.",
      "Şifreleme (BCrypt) ve güvenli oturum yönetimi prensiplerini uygulama."
    ],
    githubUrl: "https://github.com",
    docsUrl: "https://swagger.io"
  },
  {
    id: "analytics-dashboard",
    title: "Analytics & Metrics Engine",
    subtitle: "Data Aggregation & Caching",
    desc: "Büyük veri setlerini işleyen, dinamik görüntülenme/beğeni etkileşim analizlerini anlık toplayan veri işleme servisi.",
    bg: "var(--bg-accent-yellow)",
    badge: "Data Processing",
    overview: "Kullanıcı etkileşimlerini (sayfa görüntülenme, beğeni/upvote, reaksiyonlar) anlık olarak işleyen, zaman serisi veri agregasyonu sağlayan asenkron backend motoru.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Spring WebFlux", "Prometheus", "Grafana"],
    problem: "Binlerce anlık beğeni (upvote) ve sayfa görüntülenme isteğinin senkron olarak veritabanına yazılması, satır kilitlenmelerine (row lock), yüksek gecikmelere ve veritabanı darboğazına yol açıyordu.",
    solution: "Senkron DB yazımları yerine Spring WebFlux ve asenkron kuyruk yapıları kurgulandı. İstekler hafızada gruplanarak (batch aggregation) veritabanına toplu aktarıldı ve Materialized Views ile anlık raporlama sağlandı.",
    learnings: [
      "Yüksek trafikli etkileşimleri (Upvote/View) veritabanını kilitlemeden işlemek için asenkron yapıları kurgulama.",
      "İlişkisel veritabanında agregasyon sorgularını indeksleyerek sorgu sürelerini milisaniyelere indirme.",
      "Sistem sağlığı ve metrik takibi için APM entegrasyonu sağlama."
    ],
    githubUrl: "https://github.com",
    docsUrl: "https://swagger.io"
  },
  {
    id: "inventory-system",
    title: "Distributed Inventory System",
    subtitle: "Microservices & Event Streaming",
    desc: "Kafka tabanlı dağıtık mesajlaşma ve mikroservis mimarisi ile tasarlanmış stok ve envanter yönetim platformu.",
    bg: "var(--bg-accent-orange)",
    badge: "Microservices",
    overview: "Servisler arası haberleşmeyi Apache Kafka ile asenkron yürüten, API Gateway ve Eureka Service Discovery ile koordine edilen ölçeklenebilir mikroservis ekosistemi.",
    technologies: ["Spring Cloud", "Apache Kafka", "Eureka Discovery", "Spring Cloud Gateway", "Docker Compose", "PostgreSQL"],
    problem: "Sipariş ve stok servislerinin birbirine sıkı bağımlı (tightly coupled) REST çağrıları yapması nedeniyle ağ kesintilerinde veri tutarsızlığı ve basamaklı çökmeler (cascading failures) yaşanması.",
    solution: "Servisler arası haberleşme Apache Kafka event streaming ile asenkron hale getirildi. Dağıtık veri tutarlılığı için SAGA deseni ve Circuit Breaker mekanizmaları kurgulanarak sistem dayanıklılığı maksimuma çıkarıldı.",
    learnings: [
      "Monolitik yapıdan mikroservis mimarisine geçiş adımları ve servis sınırlarının (Domain-Driven Design) belirlenmesi.",
      "Kafka topic ve partition mimarisi ile veri kaybı olmadan yüksek işlem hacmi yönetimi.",
      "Mikroservis ortamında dağıtık loglama ve tracing altyapısı."
    ],
    githubUrl: "https://github.com",
    docsUrl: "https://swagger.io"
  }
];
