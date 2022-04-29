using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ToDoAPI.Models
{
    public class ToDo
    {
        [Key]
        public int Id { get; set; }

        public string title { get; set; }

        public string text { get; set; }

        [Column(TypeName = "bit")]
        public bool status { get; set; }

        public DateTime date { get; set; }


    }
}
