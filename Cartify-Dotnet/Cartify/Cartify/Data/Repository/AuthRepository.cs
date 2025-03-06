using Cartify.Data.Entities;

namespace Cartify.Data.Repository
{
    public class AuthRepository
    {
        private readonly ApplicationDbContext _dbContext;

        public AuthRepository(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }
    }
}
