using System;
using Lizandra.Lyncas.BookApi.Services;
using Lizandra.Lyncas.BookApi.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace Lizandra.Lyncas.BookApi.Controllers
{
    [ApiController]
    [Route("api/favoritos")]
    public class FavoritosController : Controller
    {
        private readonly FavoritoService _favoritoServices;

        public FavoritosController(FavoritoService favoritoServices)
        {
            _favoritoServices = favoritoServices;
        }
        
        
        [HttpPost]
        public IActionResult Criar(Book book)
        {
            var result = _favoritoServices.Adicionar(book);
            return Ok(result);
        }
        
        [HttpGet]
        public IActionResult Listar()
        {
            var result = _favoritoServices.Listar();
            return Ok(result);
        }
        
        [HttpDelete("{id:guid}")]
        public IActionResult Deletar([FromRoute] Guid id)
        {
            var result = _favoritoServices.Deletar(id);
            return Ok(result);
        }
        
       
    }
}