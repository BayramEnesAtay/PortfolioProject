using AutoMapper;
using System.Globalization;
using PortfolioAPI.DTOs;
using PortfolioAPI.Entities;

namespace PortfolioAPI.Mapping;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        // 1. Project -> ProjectDto Eşleşmesi
        // İki sınıftaki aynı isimli özellikler (Title, Slug, Technologies vb.) otomatik eşleşir
        CreateMap<Project, ProjectDto>();

        // 2. Experience -> ExperienceDto Eşleşmesi
        CreateMap<Experience, ExperienceDto>();

        // 3. Comment -> CommentDto Eşleşmesi
        // CreatedAt (DateTime) alanını Frontend'in beklediği formatlı metne ("15 Ağu 2026") dönüştürürüz
        CreateMap<Comment, CommentDto>()
            .ForMember(dest => dest.Date, opt => opt.MapFrom(src => 
                src.CreatedAt.ToString("dd MMM yyyy", new CultureInfo("tr-TR"))));

        // 4. CreateCommentDto -> Comment (Girdi -> Veritabanı Entity)
        // Kullanıcıdan gelen DTO'yu veritabanına kaydedilecek Entity'ye dönüştürür
        CreateMap<CreateCommentDto, Comment>()
            .ForMember(dest => dest.TextTr, opt => opt.MapFrom(src => src.Text))
            .ForMember(dest => dest.TextEn, opt => opt.MapFrom(src => src.Text))
            .ForMember(dest => dest.Upvotes, opt => opt.MapFrom(_ => 0))
            .ForMember(dest => dest.CreatedAt, opt => opt.MapFrom(_ => DateTime.UtcNow));

        // 5. ContactMessageDto -> ContactMessage (Girdi -> Veritabanı Entity)
        CreateMap<ContactMessageDto, ContactMessage>()
            .ForMember(dest => dest.IsRead, opt => opt.MapFrom(_ => false))
            .ForMember(dest => dest.CreatedAt, opt => opt.MapFrom(_ => DateTime.UtcNow));
    }
}
