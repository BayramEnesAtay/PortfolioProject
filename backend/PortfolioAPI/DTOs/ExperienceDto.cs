namespace PortfolioAPI.DTOs;

public class ExperienceDto
{
    public int Id { get; set; }
    public string Company { get; set; } = string.Empty;
    public string CompanyEn { get; set; } = string.Empty;
    public string RoleTr { get; set; } = string.Empty;
    public string RoleEn { get; set; } = string.Empty;
    public string PeriodTr { get; set; } = string.Empty;
    public string PeriodEn { get; set; } = string.Empty;
    public string LocationTr { get; set; } = string.Empty;
    public string LocationEn { get; set; } = string.Empty;
    public string BgColor { get; set; } = string.Empty;
    public List<string> ResponsibilitiesTr { get; set; } = new();
    public List<string> ResponsibilitiesEn { get; set; } = new();
    public List<string> Skills { get; set; } = new();
    public int SortOrder { get; set; }
}
