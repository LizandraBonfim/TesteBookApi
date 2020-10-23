import React, { useContext } from 'react';
import { FotoPesquisa } from '../Livros/styles';

import imagemPadrao from '../../assets/semcapa.gif';

import fav from '../../assets/favo.png';
import {ToastUser} from '../../ToastContext';
import { LivrosContext } from '../../LivrosContext';
import { AnimeRight } from '../../global';
import { MainContainer, FavoritoContainer , ImagemBook} from './styles';


const Favoritos: React.FC = () => {

  const { favoritos, setFavoritos } = useContext(LivrosContext);
  const { setMessage } = useContext(ToastUser);

  if(favoritos.length <= 0) return (
    <AnimeRight>
    <FotoPesquisa>
        <img src={fav} alt="Favoritos"/>
    </FotoPesquisa>
    </AnimeRight>
  ) 

  
  async function handleClick(item: any){
    const confirm = window.confirm("Deseja excluir esse item?");

    if(confirm){
      await fetch(`https://localhost:5001/api/favoritos/${item.id}`, {
        method: 'DELETE'
      });

      setMessage({ message: `Livro removido dos favoritos.` });

      const filtered = favoritos.filter((x: any) => x.idBook !== item.idBook);
      setFavoritos(filtered);
    }
  }

  return (
    <FavoritoContainer>
      <AnimeRight>
    {favoritos && favoritos.map((item: any) => (

        <MainContainer key={item.id}>
            <ImagemBook>
                <img src={item.imagem || imagemPadrao } alt= {item.titulo}/>
            </ImagemBook>

              <div>
                    <h3>Titulo: {item.titulo || "Não informado"}</h3>
                    <p> Classificação total: {item.classificacao || "Não informado"}</p>


                    <h4>Categorias: {item.categorias || "Não informado"} </h4>
                    <h4>Pag: {item.pagina|| "Não informado"}</h4>
              </div>

              <p>Descrição: {item.descricao  || "Não informado"}</p>

              <span>
                <button onClick={() => handleClick(item)}>Excluir dos favoritos</button>
              </span>
              
        </MainContainer>
        ))}
      </AnimeRight>
    </FavoritoContainer>
  )
}

export default Favoritos;