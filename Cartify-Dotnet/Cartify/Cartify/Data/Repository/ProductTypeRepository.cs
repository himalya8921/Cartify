using Cartify.Business.Model;
using Cartify.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace Cartify.Data.Repository
{
    public class ProductTypeRepository
    {
        private readonly ApplicationDbContext _dbContext;

        public ProductTypeRepository(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<List<ProductType>> GetAllProductTypes()
        {
            var productTypes = await _dbContext.ProductTypes.ToListAsync();

            return productTypes ?? new List<ProductType>();
        }
    }
}
