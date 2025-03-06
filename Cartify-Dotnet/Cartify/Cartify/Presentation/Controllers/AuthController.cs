using Microsoft.AspNetCore.Mvc;
using System.Reflection.Metadata;
using System;
using Cartify.Business;
using Cartify.Business.Model;

namespace Cartify.Presentation.Controllers
{
    [Route("api/Auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {

        private readonly ServiceManager _serviceManager;

        public AuthController(ServiceManager serviceManager)
        {
            _serviceManager = serviceManager;
        }
        [HttpPost("SignUp")]
        public ActionResult SignUp([FromBody] SignUp model)
        {
            if (model == null)
            {
                return BadRequest("Invalid request");
            }
            else
            {

            }

            return Ok(new { Message = "User signed up successfully!" });
        }
    }

}
