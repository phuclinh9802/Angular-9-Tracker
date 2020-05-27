using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using projectpractice.Context;
using projectpractice.Models;


// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace projectpractice.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MovieController : Controller
    {
        private readonly MovieContext _context;
        public MovieController(MovieContext context)
        {
            _context = context;
        }
        // GET: /<controller>/
        [HttpGet, Authorize]
        public IActionResult Get()
        {
            var movie = _context.NewMovie.ToList();

            return Ok(movie);
        }

        [Route("{id}")]
        public IActionResult GetById(int id)
        {
            var movie = _context.NewMovie.Find(id);
            if (ModelState.IsValid)
            {
                if (movie != null)
                {
                    return Ok(movie);
                }
            }
            return NotFound();
        }

        [HttpPost]
        public IActionResult Post([FromBody] NewMovie movie)
        {
            if (ModelState.IsValid)
            {
                _context.Add(movie);
                _context.SaveChanges();
                return Ok(movie);
            }
            return BadRequest();
        }

        [HttpPut]
        [Route("{id}")]
        public IActionResult Update(NewMovie movies, int id)
        {
            var movie = _context.NewMovie.SingleOrDefault(m => m.Id == id);

            if (ModelState.IsValid)
            {
                if (movie != null)
                {
                    movie.Name = movies.Name;
                    movie.Genre = movies.Genre;
                    _context.Update(movie);
                    _context.SaveChanges();
                    return Ok(movie);
                }
            }
            return BadRequest();
        }

        [HttpDelete]
        [Route("{id}")]
        public IActionResult Delete(int id)
        {
            var movie = _context.NewMovie.Find(id);

            if (ModelState.IsValid && movie != null)
            {
                _context.Remove(movie);
                _context.SaveChanges();
                return Ok(_context.NewMovie.ToList());
            }
            return BadRequest();
        }
    }
}
