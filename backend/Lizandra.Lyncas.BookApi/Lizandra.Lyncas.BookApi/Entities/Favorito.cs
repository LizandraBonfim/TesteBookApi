using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Lizandra.Lyncas.BookApi.Entities
{
    [Table("TB_Favoritos")]
    public class Favorito
    {
        [Key]
        public Guid Id { get; private set; }
       
        [Column]
        public string Titulo { get; private set;  }
       
        [Column]
        public string Descricao { get; private set;  }
        
        [Column]
        public string Autor { get; private set;  }
       
        [Column]
        public string Imagem { get; private set;  }
       
        [Column]
        public long? Pagina { get; private set;  }
        
        [Column]
        public double? Classificacao { get; private set;  }
        
        [Column]
        public long? Avaliacao { get; private set;  }
        
        [Column]
        public string Subtitulo { get; private set;  }
        
        [Column]
        public string AnoPublicacao { get; private set;  }
        
        [Column]
        public string Categorias { get; private set;  }
        
        [Column]
        public string IdBook { get; private set;  }

        public Favorito()
        {
            
        }

        public Favorito( 
            string titulo, string descricao, 
            string autor, string imagem, long? pagina, 
            double? classificacao, long? avaliacao,
            string subtitulo, string anoPublicacao, 
            string categorias, string idBook
            )
        {
            Id = Guid.NewGuid();
            Titulo = titulo;
            Descricao = descricao;
            Autor = autor;
            Imagem = imagem;
            Pagina = pagina;
            Classificacao = classificacao;
            Avaliacao = avaliacao;
            Subtitulo = subtitulo;
            AnoPublicacao = anoPublicacao;
            Categorias = categorias;
            IdBook = idBook;
        }
    }
}