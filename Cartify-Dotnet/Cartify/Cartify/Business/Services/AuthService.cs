using Cartify.Data;

namespace Cartify.Business.Services
{
    public class AuthService
    {

        private readonly RepositoryManager _repositoryManager;

        public AuthService(RepositoryManager repositoryManager)
        {
            _repositoryManager = repositoryManager;
        }
    }
}
