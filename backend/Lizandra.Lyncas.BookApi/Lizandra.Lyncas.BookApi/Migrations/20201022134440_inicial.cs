using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Lizandra.Lyncas.BookApi.Migrations
{
    public partial class inicial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "TB_Favoritos",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Titulo = table.Column<string>(nullable: true),
                    Descricao = table.Column<string>(nullable: true),
                    Autor = table.Column<string>(nullable: true),
                    Imagem = table.Column<string>(nullable: true),
                    Pagina = table.Column<long>(nullable: true),
                    Classificacao = table.Column<double>(nullable: true),
                    Avaliacao = table.Column<long>(nullable: true),
                    Subtitulo = table.Column<string>(nullable: true),
                    AnoPublicacao = table.Column<string>(nullable: true),
                    Categorias = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TB_Favoritos", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TB_Favoritos");
        }
    }
}
