namespace PortfolioAPI.Entities;

public class Experience
{
    public int Id { get; set; }
    
    // Şirket adı
    public string Company { get; set; } = string.Empty;
    public string CompanyEn { get; set; } = string.Empty;
    
    // Pozisyon / Ünvan
    public string RoleTr { get; set; } = string.Empty;
    public string RoleEn { get; set; } = string.Empty;
    
    // Çalışma dönemi (örn: "2025 — Günümüz")
    public string PeriodTr { get; set; } = string.Empty;
    public string PeriodEn { get; set; } = string.Empty;
    
    // Lokasyon & Çalışma Şekli (örn: "Ankara, TR • Hibrit • Tam Zamanlı")
    public string LocationTr { get; set; } = string.Empty;
    public string LocationEn { get; set; } = string.Empty;
    
    // Kart tema rengi
    public string BgColor { get; set; } = string.Empty;

    // Sorumluluk maddeleri ve yetkinlik rozetleri
    public List<string> ResponsibilitiesTr { get; set; } = new();
    public List<string> ResponsibilitiesEn { get; set; } = new();
    public List<string> Skills { get; set; } = new();

    // Zaman çizelgesinde sıralama (örn: 1 = en güncel, 2, 3...)
    public int SortOrder { get; set; }
    
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
