import styled from "styled-components";

export const ContainerFooter = styled.footer`

    div{
        display: flex; 
        justify-content: space-between;
    }

    text-align: center;
    margin-top: 3rem;
    border-top: 2px solid var(--color-purple-dark);
    border-bottom: 2px solid var(--color-purple-dark);
    padding: 1rem 7rem;
    

    @media (max-width: 60rem){

        div{

        display: block;
        padding: 0;
        }
    }
`;
