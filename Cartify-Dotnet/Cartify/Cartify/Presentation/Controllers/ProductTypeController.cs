using Cartify.Business;
using Cartify.Business.Model;
using Microsoft.AspNetCore.Mvc;

namespace Cartify.Presentation.Controllers
{
    [Route("api/ProductType")]
    [ApiController]
    public class ProductTypeController : Controller
    {
        private readonly ServiceManager _serviceManager;
        public ProductTypeController(ServiceManager serviceManager)
        {
            _serviceManager = serviceManager;
        }
        [HttpGet("GetAllProductTypes")]
        public async Task<IActionResult> GetAllProductTypes()
        {
            var result = await _serviceManager.ProductTypeService.GetAllProductTypes();
            if (result.Any())
            {
                return Ok(new { message = result });
            }

            return Unauthorized(new { message = "Failed" });
        }
    }
}
