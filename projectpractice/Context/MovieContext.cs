using System;
using Microsoft.EntityFrameworkCore;
using projectpractice.Models;

namespace projectpractice.Context
{
    public class MovieContext : DbContext
    {
        public MovieContext(DbContextOptions options): base(options) { }
        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    optionsBuilder.
        //}

        //public DbSet<Movie> Movie { get; set; }
        public DbSet<NewMovie> NewMovie { get; set; }
    }
}
