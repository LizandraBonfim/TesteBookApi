import styled from 'styled-components';
import { Container } from '../../global';

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(8rem , 9rem) 1fr 1fr minmax(5rem , 10rem);
  gap: 2rem;
  margin-top: 1rem;

  > p{
    display: -webkit-box;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;
    word-break: break-word;
    overflow: hidden;
    height: 11.8rem;
  }

  
  h3{
    color: ${props => props.theme.title === 'dark' ?  props.theme.color.svg : '#333'};
  }
  h4{
    color: var(--comment-dark);
  }

  button{
    background: #ff5555;
    padding: .5rem;
    border: 1px solid #ffffff;
    border-radius: .3rem;
    color: #fff;
    font-family: var(--font-oswald);
    font-weight: bold;
  }

  @media(max-width: 60rem){
    grid-template-columns: 1fr;
    justify-items: center;

  }
`;

export const ImagemBook = styled.figure`
  height: 9rem;


  @media(max-width: 60rem){
    margin-top: 1rem;
    width: 15rem;
    height: 20rem;

    img{
      width: 100%;
      height: 100%;
    }
    
  }

`;

export const FavoritoContainer = styled(Container)`
  margin-top: 4rem;
  

  div{ 
    padding: 1rem 0;
    
      + div{
      margin-top: 1rem;
      border-top: 1px dashed #eee;
    }
  }

  
`;

