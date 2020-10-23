using System;
using System.Collections.Generic;
using System.Linq;
using Lizandra.Lyncas.BookApi.Data;
using Lizandra.Lyncas.BookApi.Entities;
using Lizandra.Lyncas.BookApi.ViewModels;

namespace Lizandra.Lyncas.BookApi.Services
{
    public class FavoritoService
    {
        private readonly FavoritosRepository _favoritosRepository;

        public FavoritoService(FavoritosRepository favoritosRepository)
        {
            _favoritosRepository = favoritosRepository;
        }

        public string Adicionar(Book book)
        {

            var existe = _favoritosRepository.BuscarPorIdBook(book.IdBook);

            if (existe) return "Esse livro já foi adicionado.";
            
            var favorito = new Favorito(
                book.Titulo, book.Descricao,
                String.Join(", ", book.Autor),
                book.Imagem, book.Pagina, book.Classificacao, book.Avaliacao,
                book.Subtitulo, book.AnoPublicacao, 
                String.Join(", ", book.Categorias), book.IdBook);
            
            _favoritosRepository.Adicionar(favorito);
            var salvou = _favoritosRepository.Salvar();

            return salvou ? "Cadastrado com sucesso" : "Erro ao cadastrar";
        }

        public List<Favorito> Listar()
        {
            return _favoritosRepository.Listar();
        }

        public string Deletar(Guid id)
        {

            var favorito = _favoritosRepository.BuscarPorId(id);

            if (favorito == null)
            {
                return "Esse livro não existe";
            }

            _favoritosRepository.Deletar(id);
            _favoritosRepository.Salvar();
            // return _favoritosRepository.
            
            return "Removido com sucesso";

        }
    }
}