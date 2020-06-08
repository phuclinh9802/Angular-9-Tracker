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
  [Route("getuser")]
  public class GetUsersController : Controller
  {
    private readonly MovieContext _context;
    public GetUsersController(MovieContext context)
    {
      _context = context;
    }
    // GET: /<controller>/
    [HttpGet]
    public IActionResult Index()
    {
      var users = _context.Users.ToList();
      return Ok(users);
    }

    [HttpGet]
    [Route("{id}")]
    public IActionResult GetById(int id)
    {
      var user = _context.Users.Find(id);
      return Ok();
    }
  }
}
