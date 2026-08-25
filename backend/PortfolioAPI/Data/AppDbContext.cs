using Microsoft.EntityFrameworkCore;
using PortfolioAPI.Entities;

namespace PortfolioAPI.Data;

public class AppDbContext : DbContext
{
    // Constructor: Program.cs içerisindeki AddDbContext yapılandırmasını (bağlantı dizesi vb.) DbContext'e aktarır
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    // Veritabanındaki Tabloları temsil eden DbSet özellikleri
    public DbSet<Project> Projects => Set<Project>();
    public DbSet<Experience> Experiences => Set<Experience>();
    public DbSet<Comment> Comments => Set<Comment>();
    public DbSet<ContactMessage> ContactMessages => Set<ContactMessage>();

    // Model Oluşturma ve Tablo İlişkileri (Fluent API)
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // 1. Proje - Yorum İlişkisi (One-to-Many / Bire-Çok)
        modelBuilder.Entity<Comment>()
            .HasOne(c => c.Project)
            .WithMany(p => p.Comments)
            .HasForeignKey(c => c.ProjectId)
            .OnDelete(DeleteBehavior.Cascade); // Proje silinirse bağlı yorumları da otomatik silinir

        // 2. Slug Üzerinde Benzersiz (Unique) İndeks
        // Projeler URL'de /portfolio/ecommerce-api şeklinde aranacağı için Slug benzersiz ve hızlı sorgulanabilir olmalıdır
        modelBuilder.Entity<Project>()
            .HasIndex(p => p.Slug)
            .IsUnique();

        // 3. Deneyim Sıralama İndeksi
        // Deneyimler sürekli SortOrder (tarih sırası) baz alınarak listeleneceği için indeks oluşturulur
        modelBuilder.Entity<Experience>()
            .HasIndex(e => e.SortOrder);
    }
}
