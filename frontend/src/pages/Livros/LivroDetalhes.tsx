import React, { useContext } from 'react';
import { FaHeart, FaStar } from 'react-icons/fa';
import { LivrosContext } from '../../LivrosContext';
import imgPadrao from '../../assets/semcapa.gif';
import pesquisar from '../../assets/pesquisa.png';

import Loading from '../../components/Loading';
import {ToastUser} from '../../ToastContext';
import {  LivrosContent, FotoPesquisa, ImagemBook, SectionNavigation, Button } from './styles';

const LivroDetalhes: React.FC = () => {

    const {livros, page, setPage, loading , favoritos,setLoading, setFavoritos, buscarLivros} = useContext(LivrosContext);
    const {setMessage} = useContext(ToastUser);

    React.useEffect(() => {
        if(!livros) return;

        const idFav: string[] = favoritos.map((e: any) => e.idBook);
        livros.forEach((element: any) => {
            
          const eFavorito =  idFav.indexOf(element.idBook ) !== -1;
          element.eFavorito = eFavorito;
        });
    },[livros, favoritos]);

    function handleNextPage(){
        setPage(page+1)
        buscarLivros(page+1);

        window.scrollTo(0, 0);

    }

    function handlePreviousPage(){
        setPage(page-1)
        buscarLivros(page -1 );

        window.scrollTo(0, 0);


    }


   async function Favoritos(livro: any){

        livro.eFavorito = true;
        try {            
           await fetch('https://localhost:5001/api/favoritos', {
                method: 'POST',
                body: JSON.stringify(livro),
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            setFavoritos((e: any) => [...e, livro]);
            setMessage({ message: `Livro adicionado com sucesso.` });
        } catch (error) {
            setMessage({ message: `Ocorreu um erro` });
            
        } 
      
    }

   


    if(livros.length <= 0) return (

        <FotoPesquisa>
            <img src={pesquisar} alt="Pesquisa"/>
        </FotoPesquisa>
    ) 

    if(loading ) return <Loading/>;

  return (

    <>
    {livros.length > 0 && livros.map((item : any) => (

    <LivrosContent key={item.idBook}>
        <ImagemBook>
            <img src={item.imagem || imgPadrao} alt= {item.titulo}/>
        </ImagemBook>

            <div>
                <h3>Titulo: {item.titulo}</h3>
                <h4>Subtitulo: {item.subtitulo  || "Não informado"} </h4>
                <p> Descrição: {item.descricao}</p>

                <h4>Pag: {item.paginas || "Não informado"} | Classificação total: {item.classificacao || "Não informado"} | Data Publicação: {item.anoPublicacao  || "Não informado"}</h4>

                <Button onClick={() => Favoritos(item)} disabled={item.eFavorito}>Adicionar aos favoritos 
                    <FaHeart  />
                </Button>
            </div>

        <span>
            <p>
            {item.avaliacao || "Não informado"}
            <FaStar/>
            </p>

        </span>
           
    </LivrosContent>

    
    ))}

    <SectionNavigation>

    <Button onClick={handlePreviousPage}disabled={page <= 0}>Anterior</Button>
    <Button onClick={handleNextPage} >Proxima</Button>
    </SectionNavigation>
    </>
  )
}

export default LivroDetalhes;