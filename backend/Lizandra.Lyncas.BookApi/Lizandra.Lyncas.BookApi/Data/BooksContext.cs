using Lizandra.Lyncas.BookApi.Entities;
using Microsoft.EntityFrameworkCore;

namespace Lizandra.Lyncas.BookApi.Data
{
    public class BooksContext : DbContext
    {
        public BooksContext(DbContextOptions<BooksContext> options): base(options)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        { 
            modelBuilder.ApplyConfigurationsFromAssembly(typeof( BooksContext).Assembly);
        }

        public DbSet<Favorito> Favoritos { get; set; }
        
    }
}