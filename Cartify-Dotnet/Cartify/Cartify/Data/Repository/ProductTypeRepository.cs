using Cartify.Data.Entities;

namespace Cartify.Data.Repository
{
    public class ProductTypeRepository
    {
        private readonly ApplicationDbContext _dbContext;

        public ProductTypeRepository(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }
    }
}
