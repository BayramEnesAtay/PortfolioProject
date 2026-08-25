namespace PortfolioAPI.DTOs;

public class CommentDto
{
    public int Id { get; set; }
    public string Author { get; set; } = string.Empty;
    public string Role { get; set; } = string.Empty;
    public string TextTr { get; set; } = string.Empty;
    public string TextEn { get; set; } = string.Empty;
    public int Upvotes { get; set; }
    public string Date { get; set; } = string.Empty; // Formatlanmış tarih çıktısı (örn: "15 Ağu 2026")
}
