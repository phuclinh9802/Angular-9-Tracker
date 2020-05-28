using System;
using AutoMapper;
using projectpractice.Models;

namespace projectpractice.Services
{
  public class AutoMapperProfile : Profile
  {
    public AutoMapperProfile()
    {
      CreateMap<Register, RegisterModel>();
      CreateMap<RegisterModel, Register>();
    }
    
  }
}
