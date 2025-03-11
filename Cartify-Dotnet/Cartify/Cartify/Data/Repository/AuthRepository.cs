using Cartify.Business.Model;
using Cartify.Data.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Runtime.Intrinsics.X86;

namespace Cartify.Data.Repository
{
    public class AuthRepository
    {
        private readonly ApplicationDbContext _dbContext;

        public AuthRepository(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<string> SignUp(SignUp model)
        {
            var user = new User();
            user.Email = model.Email ?? string.Empty;
            user.Password = model.Password ?? string.Empty;
            user.Name = model.Name ?? string.Empty;
            user.PhoneNumber = model.PhoneNumber ?? string.Empty;
            user.Address = model.Address ?? string.Empty;
            user.CreatedAt = DateTime.UtcNow;
            user.UpdatedAt = DateTime.UtcNow;
            user.Otp = "1234";
            await _dbContext.Users.AddAsync(user);
            await _dbContext.SaveChangesAsync();
            return "Success";
        }
        public async Task<string> SignIn(SignIn model)
        {
            if (model == null || string.IsNullOrWhiteSpace(model.Email) || string.IsNullOrWhiteSpace(model.Password))
            {
                return "Invalid Input";
            }

            var userExists = await _dbContext.Users
                .AnyAsync(user => user.Email == model.Email && user.Password == model.Password);

            return userExists ? "Success" : "Failed";
        }

    }
}
