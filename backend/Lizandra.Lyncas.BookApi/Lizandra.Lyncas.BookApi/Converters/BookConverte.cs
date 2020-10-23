using System;
using System.Collections.Generic;
using System.Linq;
using Lizandra.Lyncas.BookApi.Entities;
using Lizandra.Lyncas.BookApi.Models;
using Lizandra.Lyncas.BookApi.ViewModels;

namespace Lizandra.Lyncas.BookApi.Converters
{
    public static class BookConverte
    {
        public static List<Book> ParaViewModels(this BooksApi api)
        {
            var teste = api.Items.Select(x => Conversor(x)).ToList();

            return teste;
        }

        private static Book Conversor(Item x)
        {
            try
            {
                var livro = new Book();
                livro.Autor = x.VolumeInfo?.Authors;
                livro.Descricao = x.VolumeInfo?.Description;
                livro.Imagem = x.VolumeInfo?.ImageLinks?.SmallThumbnail?.ToString();
                livro.Pagina = x.VolumeInfo?.PageCount;
                livro.Titulo = x.VolumeInfo?.Title;
                livro.Classificacao = x.VolumeInfo?.AverageRating;
                livro.Avaliacao = x.VolumeInfo?.RatingsCount;
                livro.Categorias = x.VolumeInfo?.Categories;
                livro.Subtitulo = x.VolumeInfo?.Subtitle;
                livro.AnoPublicacao = x.VolumeInfo?.PublishedDate;
                livro.IdBook = x.Id;

                return livro;
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }

            return null;
        }
    }
}