namespace PortfolioAPI.Entities;

public class ContactMessage
{
    public int Id { get; set; }
    
    // Gönderen bilgileri
    public string Name { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Subject { get; set; } = string.Empty;
    public string Message { get; set; } = string.Empty;
    
    // Okunma durumu & zaman damgası
    public bool IsRead { get; set; } = false;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
