using Microsoft.EntityFrameworkCore.Migrations;

namespace projectpractice.Migrations
{
    public partial class populate_new_movie : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO NewMovie VALUES (1, \"Cars\", \"Cartoon\")");
            migrationBuilder.Sql("INSERT INTO NewMovie VALUES (2, \"Walle\", \"Cartoon\")");
            migrationBuilder.Sql("INSERT INTO NewMovie VALUES (3, \"Avengers\", \"Action\")");
            migrationBuilder.Sql("INSERT INTO NewMovie VALUES (4, \"Lalaland\", \"Music\")");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
