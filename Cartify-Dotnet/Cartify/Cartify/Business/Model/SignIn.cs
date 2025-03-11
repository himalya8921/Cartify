using System.ComponentModel.DataAnnotations;

namespace Cartify.Business.Model
{
    public class SignIn
    {
        [Required]
        [EmailAddress]
        public string? Email { get; set; }
        [Required]
        public string? Password { get; set; }
    }
}
