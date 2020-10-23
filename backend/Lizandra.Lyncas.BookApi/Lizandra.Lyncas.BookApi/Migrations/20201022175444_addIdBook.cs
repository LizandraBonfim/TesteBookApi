using Microsoft.EntityFrameworkCore.Migrations;

namespace Lizandra.Lyncas.BookApi.Migrations
{
    public partial class addIdBook : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "IdBook",
                table: "TB_Favoritos",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IdBook",
                table: "TB_Favoritos");
        }
    }
}
