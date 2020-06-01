using System;
using System.ComponentModel.DataAnnotations;

namespace projectpractice.Models
{
  public class News
  {
    [Key]
    public int id { get; set; }
    public string name { get; set; }
    public string content { get; set; }
    public string description { get; set; }
    public string publishedAt { get; set; }
    public string title { get; set; }
    public string url { get; set; }
    public string urlToImage { get; set; }
  }
}
