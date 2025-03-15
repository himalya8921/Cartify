using Cartify.Business.Services;
using Cartify.Data.Entities;
using Cartify.Data.Repository;

namespace Cartify.Data
{
    public class RepositoryManager
    {
        public AuthRepository AuthRepository { get; }
        public ProductTypeRepository ProductTypeRepository { get; }

        public RepositoryManager(ApplicationDbContext dbContext)
        {
            AuthRepository = new AuthRepository(dbContext);
            ProductTypeRepository = new ProductTypeRepository(dbContext);
        }
    }
}
