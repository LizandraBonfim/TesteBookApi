import styled from 'styled-components';

export const Container = styled.div`
     padding: .5rem 0;
    input{
        border: 1px solid ${props => props.theme.color.primary};
        display: block;
        font-size: .8rem;
        padding: 0.8rem;
        border-radius: 0.4rem;
        background-color: ${props => props.theme.title === 'dark' ? props.theme.color.primary : '#fff'};
        transition: .3s;
        outline: none;
        color: ${props => props.theme.title == 'dark' ? props.theme.color.colorClaro : '#333'};
        text-transform: uppercase;
        font-family: var(--font-oswald);

    &:hover, &:focus{
        outline: none;
        background-color: ${props => props.theme.title === 'dark' ? props.theme.color.primary : '#fff'};
    
        box-shadow: var(--color-cinza-light) 0px 0px 5px 0px, rgb(0 0 0) -1px 0px 3px;;
        
        /* color: ${props => props.theme.color.colorRosa}; */
    }
    }
`;
