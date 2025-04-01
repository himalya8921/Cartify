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
        private readonly JwtService _jwtService;

        public AuthController(ServiceManager serviceManager, JwtService jwtService)
        {
            _serviceManager = serviceManager;
            _jwtService = jwtService;
        }
        [HttpPost("SignUp")]
        public async Task<IActionResult> SignUp([FromBody] SignUp model)
        {
            if (model == null)
            {
                return BadRequest(new { message = "Invalid request" }); 
            }

            var result = await _serviceManager.AuthService.SignUp(model);

            if (result == "Success")
                return Ok(new { message = result }); 
            else
                return BadRequest(new { message = result }); 
        }

        [HttpPost("SignIn")]
        public async Task<IActionResult> SignIn([FromBody] SignIn model)
        {
            if (model == null)
            {
                return BadRequest(new { message = "Invalid request" });
            }

            var result = await _serviceManager.AuthService.SignIn(model);
            if(result.Item1 == "Success")
            {
                var token = _jwtService.GenerateToken(model.Email ?? string.Empty, result.Item2);
                return Ok(new { token, role = result.Item2 });
            }

            return Unauthorized(new { message = result });
        }

    }

}
