namespace PortfolioAPI.Entities;

public class Comment
{
    public int Id { get; set; }
    
    // Yorumu bırakan kişi bilgileri
    public string Author { get; set; } = string.Empty;
    public string Role { get; set; } = string.Empty; // örn: "Software Architect", "HR Specialist"
    
    // Yorum içeriği
    public string TextTr { get; set; } = string.Empty;
    public string TextEn { get; set; } = string.Empty;
    
    // Destek / Upvote sayısı
    public int Upvotes { get; set; } = 0;
    
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    // İlişki (Foreign Key): Hangi projeye ait olduğu
    public int ProjectId { get; set; }
    public Project Project { get; set; } = null!;
}
