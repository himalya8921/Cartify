using System.ComponentModel.DataAnnotations;

namespace Cartify.Business.Model
{
    public class SignUp
    {
        [Required]
        [EmailAddress]
        public string? Email { get; set; }
        [Required]
        public string? Password { get; set; }
        [Required]
        public string? Name { get; set; }
        [Required]
        public string? PhoneNumber { get; set; }
        [Required]
        public string? Address { get; set; }
    }
}
