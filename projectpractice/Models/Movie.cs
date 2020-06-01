using System;
using System.ComponentModel.DataAnnotations;

namespace projectpractice.Models
{
    public class NewMovie
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Genre { get; set; }
    }
}
