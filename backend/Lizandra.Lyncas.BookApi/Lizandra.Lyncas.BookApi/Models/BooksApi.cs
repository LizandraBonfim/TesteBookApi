using System.Collections.Generic;
using Lizandra.Lyncas.BookApi.Entities;

namespace Lizandra.Lyncas.BookApi.Models
{
    public class BooksApi
    {
        public string Kind { get; set; }
        public long TotalItems { get; set; }
        public List<Item> Items { get; set; }
    }
}