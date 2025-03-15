using Cartify.Business.Model;
using Cartify.Data;

namespace Cartify.Business.Services
{
    public class ProductTypeService
    {
        private readonly RepositoryManager _repositoryManager;

        public ProductTypeService(RepositoryManager repositoryManager)
        {
            _repositoryManager = repositoryManager;
        }
        public async Task<List<ProductTypeModel>> GetAllProductTypes()
        {
            var result = await _repositoryManager.ProductTypeRepository.GetAllProductTypes();
            var productTypes = result.Select(pt => new ProductTypeModel
            {
                Id = pt.Id,
                ProductTypeName = pt.TypeName,
                IsActive = pt.IsActive
            }).ToList();
            return productTypes;
        }
    }
}
