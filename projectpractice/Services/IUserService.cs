using System;
using System.Collections.Generic;
using System.Linq;
using projectpractice.Context;
using projectpractice.Models;

namespace projectpractice.Services
{
    public interface IUserService
    {
        Register Authenticate(string username, string password);
        IEnumerable<Register> GetAll();
        Register GetById(int id);
        Register Create(Register user, string password);
        void Update(Register user, string password = null);
        void Delete(int id);
    }

  public class UserService : IUserService
  {
    private MovieContext _context;

    public UserService(MovieContext context)
    {
      _context = context;
    }

    public Register Authenticate(string username, string password)
    {
      if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
        return null;

      var user = _context.Users.SingleOrDefault(x => x.UserName == username);

      // check if username exists
      if (user == null)
        return null;

      // check if password is correct
      //if (!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
      //    return null;

      // authentication successful
      return user;
    }
    public IEnumerable<Register> GetAll()
    {
      return _context.Users;
    }

    public Register GetById(int id)
    {
      return _context.Users.Find(id);
    }
    public Register Create(Register user, string password)
    {
      // validation
      if (string.IsNullOrWhiteSpace(password))
        throw new Exception("Password is required");

      if (_context.Users.Any(x => x.UserName == user.UserName))
        throw new Exception("Username \"" + user.UserName + "\" is already taken");



      _context.Users.Add(user);
      _context.SaveChanges();

      return user;
    }
    public void Update(Register userParam, string password = null)
    {
      var user = _context.Users.Find(userParam.Id);

      if (user == null)
        throw new Exception("User not found");

      // update username if it has changed
      if (!string.IsNullOrWhiteSpace(userParam.UserName) && userParam.UserName != user.UserName)
      {
        // throw error if the new username is already taken
        if (_context.Users.Any(x => x.UserName == userParam.UserName))
          throw new Exception("Username " + userParam.UserName + " is already taken");

        user.UserName = userParam.UserName;
      }

      // update user properties if provided
      if (!string.IsNullOrWhiteSpace(userParam.FirstName))
        user.FirstName = userParam.FirstName;

      if (!string.IsNullOrWhiteSpace(userParam.LastName))
        user.LastName = userParam.LastName;

      // update password if provided
      if (!string.IsNullOrWhiteSpace(password))
      {
        user.Password = userParam.Password;
      }

      _context.Users.Update(user);
      _context.SaveChanges();
    }
    public void Delete(int id)
    {
      var user = _context.Users.Find(id);
      if (user != null)
      {
        _context.Users.Remove(user);
        _context.SaveChanges();
      }
    }
  }
    }
