using Cartify.Business;
using Microsoft.AspNetCore.Mvc;

namespace Cartify.Presentation.Controllers
{
    public class ProductTypeController : Controller
    {
        private readonly ServiceManager _serviceManager;
        public ProductTypeController(ServiceManager serviceManager)
        {
            _serviceManager = serviceManager;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}
