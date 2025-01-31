using Microsoft.AspNetCore.Mvc;

namespace Cartify.Controllers
{
    public class AuthController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
