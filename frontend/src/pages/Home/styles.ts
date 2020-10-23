import styled from 'styled-components';
import {AnimeRight} from '../../global';

export const MainContainer = styled.main`
    margin-top: 2rem;

   
`;

export const CampoPesquisa = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;

    @media(max-width: 60rem){
        display: block;

        h1{
            font-size: 1.2rem;
        }
    }

`;

export const CampoInputPesquisa = styled.form`

position: relative;

    button{

        position: absolute;
        width: 10%;
        right: 0;
        top: 8px;
        padding: .8rem;
        background: var(--color-font-dark);
        border: 2px solid var(--comment-light);
        border-radius: .5rem;
        transition: .3s;

        &:hover, &:focus{
            background: var(--background-dark);
            border: 2px solid var(--comment-light);
        }
    }

    input{
        box-sizing: border-box;
    }

    @media(max-width: 60rem){
        button{
            width: 15%;

        }
    }
`;

export const ContainerLivros = styled.section`

    border: 1px solid  ${props => props.theme.color.primary};
    margin-top: 4rem;

    nav{
        display: grid;
        grid-template-columns: 1fr 1fr;
        text-align: center;
        a{
            padding: .8rem;
            font-weight: bold;

            &.active{    
                border-bottom: 2px solid var(--color-purple-dark);

            }
        }
            
    }
`;