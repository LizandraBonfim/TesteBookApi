using System;
using System.Collections.Generic;
using System.Linq;
using Lizandra.Lyncas.BookApi.Entities;

namespace Lizandra.Lyncas.BookApi.Data
{
    public class FavoritosRepository
    {
        private readonly BooksContext _context;

        public FavoritosRepository(BooksContext context)
        {
            _context = context;
        }

        public void Adicionar(Favorito favorito)
        {
            _context.Favoritos.Add(favorito);
        }

        public bool Salvar()
        {
            return _context.SaveChanges() > 0;
            
        }

        public List<Favorito> Listar()
        {
            return _context.Favoritos.ToList();
        }

        public Favorito BuscarPorId(Guid id)
        {
            var favorito = _context.Favoritos.Find(id);
            return favorito;
        }

        public void Deletar(Guid id)
        {
            var favorito = BuscarPorId(id);
            _context.Favoritos.Remove(favorito);
        }

        public bool BuscarPorIdBook(string bookIdBook)
        {
            return _context.Favoritos.Any(x => x.IdBook == bookIdBook);
        }
    }
}