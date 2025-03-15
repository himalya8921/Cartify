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
    }
}
