using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using projectpractice.Models;
using AutoMapper;
using projectpractice.Services;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace projectpractice.Controllers
{
    [ApiController]
    [Route("api/auth")]
    public class UserController : Controller
    {
        private IUserService _userService;
        private IMapper _mapper;
        private readonly SignInManager<Identity> _signInManager;

        // Dependency Injection
        public UserController(IUserService userService, IMapper mapper) {
            _userService = userService;
            _mapper = mapper;
        }


        [HttpPost, Route("register")]
        public IActionResult Register([FromBody] Register user)
        {
            //var users = _mapper.Map<Register>(user);

            try
            {
              // create user
              _userService.Create(user, user.Password);
              return Ok(user);
            }
            catch (Exception ex)
            {
              // return error message if there was an exception
              return BadRequest(new { message = ex.Message });
            }
    } 

        [HttpPost, Route("login")]
        public IActionResult Login([FromBody] User user)
        {
            var loginUser = _userService.Authenticate(user.UserName, user.Password);

            if (user == null)
            {
                return BadRequest("Invalid client request");
            }

            if (user.UserName == "phil" && user.Password == "linhph")
            {
                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("PhilliplovesNguyet"));
                var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
                var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, user.UserName),
                    new Claim(ClaimTypes.Role, "Admin")
                };

                var tokeOptions = new JwtSecurityToken(
                    issuer: "https://127.0.0.1:5001",
                    audience: "https://127.0.0.1:5001",
                    claims: claims,
                    expires: DateTime.Now.AddHours(1),
                    signingCredentials: signinCredentials
                );

                var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
                return Ok(new { Token = tokenString });
            }

            else if (user.UserName == "nguyet" && user.Password == "nguyet")
            {
                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("NguyetlovesPhillip"));
                var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
                var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, user.UserName),
                    new Claim(ClaimTypes.Role, "Manager")
                };

                var tokeOptions = new JwtSecurityToken(
                    issuer: "https://127.0.0.1:5001",
                    audience: "https://127.0.0.1:5001",
                    claims: claims,
                    expires: DateTime.Now.AddMinutes(30),
                    signingCredentials: signinCredentials
                );

                var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
                return Ok(new { Token = tokenString });
            }

            else if (user.UserName != "phil" || user.UserName != "nguyet")
            {
                if (loginUser == null) {
                    return NotFound("User is not found");
                }
                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("Thisisforuseronly"));
                var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
                var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, loginUser.UserName),
                    new Claim(ClaimTypes.Role, "User")
                };

                var tokeOptions = new JwtSecurityToken(
                    issuer: "https://127.0.0.1:5001",
                    audience: "https://127.0.0.1:5001",
                    claims: claims,
                    expires: DateTime.Now.AddMinutes(10),
                    signingCredentials: signinCredentials
                );

                var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);

                return Ok(new {
                  Id = loginUser.Id,
                  UserName = loginUser.UserName,
                  FirstName = loginUser.FirstName,
                  LastName = loginUser.LastName,
                  Token = tokenString
                });
              
            }
            return Unauthorized(new { message = "Username/Password is incorrect. Please try again!" });
        }
    }
}
