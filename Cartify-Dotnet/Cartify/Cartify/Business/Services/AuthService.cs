using Cartify.Business.Model;
using Cartify.Data;
using Microsoft.AspNetCore.Mvc;

namespace Cartify.Business.Services
{
    public class AuthService
    {

        private readonly RepositoryManager _repositoryManager;

        public AuthService(RepositoryManager repositoryManager)
        {
            _repositoryManager = repositoryManager;
        }

        public async Task<string> SignUp(SignUp model)
        {
            var signUpModel = new SignUp();
            signUpModel.Email = model.Email;
            signUpModel.Password = model.Password;
            signUpModel.PhoneNumber = model.PhoneNumber;
            signUpModel.Name = model.Name;
            signUpModel.Address = model.Address;
            var result = await _repositoryManager.AuthRepository.SignUp(model);
            if (result == "Success")
                return result;
            else
                return "Failed";
        }

        public async Task<string> SignIn(SignIn model)
        {
            var signUpModel = new SignUp();
            signUpModel.Email = model.Email;
            signUpModel.Password = model.Password;
            
            var result = await _repositoryManager.AuthRepository.SignIn(model);
            if (result == "Success")
                return result;
            else
                return "Failed";
        }
    }
}
