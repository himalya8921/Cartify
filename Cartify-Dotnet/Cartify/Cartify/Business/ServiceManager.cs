using Cartify.Business.Services;
using Cartify.Data;

namespace Cartify.Business
{
    public class ServiceManager
    {
        public AuthService AuthService { get; }
        public ProductTypeService ProductTypeService { get; }

        public ServiceManager(RepositoryManager repositoryManager)
        {
            AuthService = new AuthService(repositoryManager);
            ProductTypeService = new ProductTypeService(repositoryManager);
        }
    }
}
