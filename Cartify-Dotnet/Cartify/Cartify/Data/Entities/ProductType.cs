using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Cartify.Data.Entities
{
    [Table("ProductType")]
    public partial class ProductType
    {
        [Key]
        [Column("ID")]
        public int Id { get; set; }
        [Unicode(false)]
        public string? TypeName { get; set; }
        public bool? IsActive { get; set; }
    }
}
