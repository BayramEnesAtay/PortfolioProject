namespace PortfolioAPI.Entities;

public class Project
{
    public int Id { get; set; }
    
    // URL ve route eşleşmesi için (örn: "ecommerce-api", "task-management")
    public string Slug { get; set; } = string.Empty;
    
    public string Title { get; set; } = string.Empty;
    public string Subtitle { get; set; } = string.Empty;
    
    // Neo-brutalist tema rengi (örn: "var(--bg-accent-blue)" veya "#8ae0ff")
    public string BgColor { get; set; } = string.Empty;

    // Çoklu dil (TR / EN) metin alanları
    public string BadgeTr { get; set; } = string.Empty;
    public string BadgeEn { get; set; } = string.Empty;
    
    public string DescTr { get; set; } = string.Empty;
    public string DescEn { get; set; } = string.Empty;
    
    public string OverviewTr { get; set; } = string.Empty;
    public string OverviewEn { get; set; } = string.Empty;
    
    public string ProblemTr { get; set; } = string.Empty;
    public string ProblemEn { get; set; } = string.Empty;
    
    public string SolutionTr { get; set; } = string.Empty;
    public string SolutionEn { get; set; } = string.Empty;

    // Dizi / Liste alanları (.NET 8/9 EF Core ile SQLite'ta yerel JSON veya ayrık saklanır)
    public List<string> Technologies { get; set; } = new();
    public List<string> LearningsTr { get; set; } = new();
    public List<string> LearningsEn { get; set; } = new();

    // Dış bağlantılar
    public string? GithubUrl { get; set; }
    public string? DocsUrl { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    // Navigation Property: Bir projenin birden çok yorumu olabilir (1-to-Many)
    public ICollection<Comment> Comments { get; set; } = new List<Comment>();
}
