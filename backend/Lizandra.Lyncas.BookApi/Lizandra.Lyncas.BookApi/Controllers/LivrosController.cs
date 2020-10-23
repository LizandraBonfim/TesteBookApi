using System;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using Lizandra.Lyncas.BookApi.Converters;
using Lizandra.Lyncas.BookApi.Entities;
using Lizandra.Lyncas.BookApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace Lizandra.Lyncas.BookApi.Controllers
{
    [Route("api")]
    [ApiController]
    public class LivrosController : Controller
    {
        [HttpGet("books")]
        public async Task<IActionResult> Pesquisar([FromQuery]string p, [FromQuery]decimal page)
        {
            var url = $"https://www.googleapis.com/books/v1/volumes?q={p}&startIndex={page}";
            var client = new HttpClient();
            var response = await client.GetAsync(url);
            var json = await response.Content.ReadAsStringAsync();
            
            var options = new JsonSerializerOptions();
            options.PropertyNameCaseInsensitive = true;
            var result = JsonSerializer.Deserialize<BooksApi>(json, options);

            var livros = result.ParaViewModels();
            return Ok(livros);

        }
        
    }
    
}