using Cartify.Business.Services;
using Cartify.Data.Entities;
using Cartify.Data.Repository;

namespace Cartify.Data
{
    public class RepositoryManager
    {
        public AuthRepository AuthRepository { get; }

        public RepositoryManager(ApplicationDbContext dbContext)
        {
            AuthRepository = new AuthRepository(dbContext);
        }
    }
}
