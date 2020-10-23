using System.Collections.Generic;

namespace Lizandra.Lyncas.BookApi.ViewModels
{
    public class Book
    {
        public string IdBook { get; set; }
        public string Titulo { get; set; }
        public string Descricao { get; set; }
        public List<string> Autor { get; set; }
        public string Imagem { get; set; }

        public long? Pagina { get; set; }
        
        public double? Classificacao { get; set; }
        public long? Avaliacao { get; set; }
        
        public string Subtitulo { get; set; }
        public string AnoPublicacao { get; set; }
        public List<string> Categorias { get; set; }

    }
}