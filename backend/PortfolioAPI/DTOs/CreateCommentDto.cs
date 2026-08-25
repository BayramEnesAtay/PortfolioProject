using System.ComponentModel.DataAnnotations;

namespace PortfolioAPI.DTOs;

public class CreateCommentDto
{
    [Required(ErrorMessage = "Ad Soyad alanı zorunludur.")]
    [StringLength(100, ErrorMessage = "Ad Soyad en fazla 100 karakter olabilir.")]
    public string Author { get; set; } = string.Empty;

    [Required(ErrorMessage = "Ünvan / Şirket alanı zorunludur.")]
    [StringLength(100, ErrorMessage = "Ünvan en fazla 100 karakter olabilir.")]
    public string Role { get; set; } = string.Empty;

    [Required(ErrorMessage = "Yorum içeriği zorunludur.")]
    [StringLength(1000, ErrorMessage = "Yorum en fazla 1000 karakter olabilir.")]
    public string Text { get; set; } = string.Empty;
}
