import styled from 'styled-components';
import { AnimeRight } from '../../global';

export const LivrosContent = styled.div`
  display: grid;
  grid-template-columns: minmax(10rem , 13rem) 2fr minmax(6rem , 9rem);
  grid-template-areas: 'imagem titulo avaliacao';
  gap: 4rem;
  padding: 1rem;
  margin-top: 1rem;

   div:nth-child(1) > div:nth-child(2){
     grid-area: titulo;
   }

  svg > *{
      fill: #f1fa8c;
  }

  h3, h4{
    color: ${props => props.theme.title === 'dark' ?  props.theme.color.svg : '#333'};
  }

  h4{
    margin: .5rem 0 ;
  }

  h3{
    margin-bottom: .4rem;
  }

  & +div{
    border-top: 1px solid ${props => props.theme.color.primary};

  }

  span{
    grid-area: avaliacao;

    p{
      text-align: end;
    }

    svg > *{
      fill: ${props => props.theme.title === 'dark' ? props.theme.color.primary : '#d4e419'};
    }
  }

  @media(max-width: 60rem){
    grid-template-columns: 1fr;
    gap: 1rem;

    grid-template-areas:
        'imagem'
        'avaliacao'
        'titulo';

        span p {
          
          height: 1rem;
          text-align: center;
        }
  }
`;

export const ContainerLivros = styled(AnimeRight)`

  svg > * {
      fill: #f1fa8c;
  }

  div{

    p{
      display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    word-break: break-word;
    overflow: hidden;
    height: 4.7rem;
    }
  }

  @media(max-width: 60rem){

    div button{
      width: 100%;
    }
    
  }

`;

export const Button = styled.button`
      padding: .8rem;
      background: var(--background-light);;
      width: 41%;
      text-transform: uppercase;
      font-family: var(--font-oswald);
      font-weight: bold;
      border-radius: .5rem;
      border: 1px solid var(--color-purple-dark);
      align-items: center;
      display: flex;
      justify-content: center;

      svg {
        width: 1.2rem;
        height: 1.3rem;
        padding-left: .4rem;
          > *{
          fill: red;
        }
      }
  
`

export const ImagemBook = styled.div`
 
    height: 15rem;
    grid-area: imagem;

    img{
      height: 100%;
      width: 100%;
      object-fit: fill;
    }
`;

export const FotoPesquisa = styled.figure`
    /* height: 16rem; */
    border-radius: 50%;
    background: ${props => props.theme.title === 'dark' ? 'var(--color-cinza-light)' :'var(--color-font-dark)' };
    max-width: 37rem;
    margin: 4rem auto;
    img{

    width: 100%;
    }

`;

export const SectionNavigation = styled.section`

    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: 2rem 0;

    button{
      width: 20%;
    }
`;