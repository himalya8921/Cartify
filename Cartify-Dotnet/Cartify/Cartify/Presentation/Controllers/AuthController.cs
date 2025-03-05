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
        [HttpPost("SignUp")]
        public ActionResult SignUp([FromBody] SignUp model)
        {
            if (model == null)
            {
                return BadRequest("Invalid request");
            }

            // Log the received data for debugging
            Console.WriteLine($"Email: {model.Email}, Name: {model.Name}");

            return Ok(new { Message = "User signed up successfully!" });
        }
    }

}
