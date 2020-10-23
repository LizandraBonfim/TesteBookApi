import styled from 'styled-components';

export const HeaderContainer = styled.header`
    padding: .2rem 0;
    box-shadow: 0px 1px 0 0  ${props => props.theme.color.primary};

`;

export const HeaderTop = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: .5rem 0;

    svg:nth-child(3)  {
        padding-left: .5rem;

        > *{
            fill: ${props =>
            props.theme.title === 'dark' ? props.theme.color.colorRosa : props.theme.color.svg};
        }
    }

   
    
`;


export const RedesSociais = styled.ul`
    display: flex;
        
       li{
     
        cursor: pointer;
        
        + li{
            margin-left: .5rem;
        }
    }

`;

export const BotaoToggle = styled.div`

    display: flex;
    align-items: center;
    position: relative;

    svg:nth-child(1)  > *{
        fill: ${props =>
        props.theme.title === 'light' ? props.theme.color.colorRosa : props.theme.color.svg};
    }

`;

