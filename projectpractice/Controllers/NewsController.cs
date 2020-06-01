using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using projectpractice.Context;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace projectpractice.Controllers
{
  [ApiController]
  [Route("api")]
  public class NewsController : Controller
  {
    private readonly MovieContext _context;
    public NewsController(MovieContext context)
    {
      _context = context;
    }

    // GET: /<controller>/
    [HttpGet]
    [Route("get_news")]
    public IActionResult Get()
    {
      var news = _context.NewsAPI.ToList();
      return Ok(news);
    }

    [HttpGet]
    [Route("get_news/{id}")]
    public IActionResult GetId(int id)
    {
      var news_id = _context.NewsAPI.Find(id);
      if (news_id != null)
      {
        return Ok(news_id);
      }
      return NotFound(new { message = "Data is not found!" });
    }
  }
}
