using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Cartify.Data.Entities
{
    public partial class User
    {
        [Key]
        [Column("ID")]
        public int Id { get; set; }
        public int Role { get; set; }
        [StringLength(50)]
        [Unicode(false)]
        public string? Name { get; set; }
        [StringLength(200)]
        [Unicode(false)]
        public string? Address { get; set; }
        [StringLength(20)]
        [Unicode(false)]
        public string? PhoneNumber { get; set; }
        [StringLength(100)]
        [Unicode(false)]
        public string Email { get; set; } = null!;
        [StringLength(200)]
        [Unicode(false)]
        public string Password { get; set; } = null!;
        [Column("OTP")]
        [StringLength(10)]
        [Unicode(false)]
        public string Otp { get; set; } = null!;
        public bool? IsVerified { get; set; }
        public bool? IsActive { get; set; }
        public bool? IsDeleted { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime CreatedAt { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime UpdatedAt { get; set; }
    }
}
