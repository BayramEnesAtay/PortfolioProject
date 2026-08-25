namespace PortfolioAPI.DTOs;

public class ProjectDto
{
    public int Id { get; set; }
    public string Slug { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string Subtitle { get; set; } = string.Empty;
    public string BgColor { get; set; } = string.Empty;

    // Çoklu dil metinleri
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

    // Teknoloji ve mühendislik kazanım listeleri
    public List<string> Technologies { get; set; } = new();
    public List<string> LearningsTr { get; set; } = new();
    public List<string> LearningsEn { get; set; } = new();

    public string? GithubUrl { get; set; }
    public string? DocsUrl { get; set; }

    // Projeye ait yorumların DTO listesi (Circular dependency engellenir)
    public List<CommentDto> Comments { get; set; } = new();
}
