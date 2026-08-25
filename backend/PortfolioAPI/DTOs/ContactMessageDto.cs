using System.ComponentModel.DataAnnotations;

namespace PortfolioAPI.DTOs;

public class ContactMessageDto
{
    [Required(ErrorMessage = "Ad Soyad alanı zorunludur.")]
    [StringLength(100, ErrorMessage = "Ad Soyad en fazla 100 karakter olabilir.")]
    public string Name { get; set; } = string.Empty;

    [Required(ErrorMessage = "E-Posta adresi zorunludur.")]
    [EmailAddress(ErrorMessage = "Geçerli bir e-posta adresi giriniz.")]
    public string Email { get; set; } = string.Empty;

    [Required(ErrorMessage = "Konu başlığı zorunludur.")]
    [StringLength(150, ErrorMessage = "Konu en fazla 150 karakter olabilir.")]
    public string Subject { get; set; } = string.Empty;

    [Required(ErrorMessage = "Mesaj içeriği zorunludur.")]
    [StringLength(2000, ErrorMessage = "Mesaj en fazla 2000 karakter olabilir.")]
    public string Message { get; set; } = string.Empty;
}
