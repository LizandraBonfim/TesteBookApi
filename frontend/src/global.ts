import styled, { createGlobalStyle, keyframes } from 'styled-components';


const GlobalStyle = createGlobalStyle`

  html{
    --background-dark: #282a36;
    --current-line-dark: #44475a;
    --color-font-dark: #f8f8f2;
    --comment-dark: #6272a4;
    --color-purple-dark: #bd93f9;

    --background-light: #eee;
    --current-line-light: #7F7A79;
    --color-font-light: #3A4142;
    --comment-light: #9295A6;
    --color-purple-light: #7C7C74;
    --color-cinza-light: #c3c1c1;
    --font-roboto: Roboto, Arial, sans-serif;
    --font-oswald: Oswald;
  }

  body {
    margin: 0;
    padding: 0;
    background: ${props => props.theme.color.background};
  
    font-family: var(--font-roboto) ;
    box-sizing: border-box;
    transition: all 0.50s linear;
 
  }

  p, ul, figure, h3{
    margin: 0;
    padding: 0;
  }

  a { text-decoration: none; color: ${propx => propx.theme.color.secundary}; }
  li{list-style: none;}

  svg > * {
    fill: ${props => props.theme.color.svg};

  }

  button:disabled{
    background: #cac6c68a;
    color: #adadadeb;
    border: 1px solid #eeeeee;
    cursor: default;
  }

  h1{
   color: ${propx => propx.theme.color.secundary};

  }

  button{
    cursor: pointer;
  }

  button, input{
    width: 100%;
    display: block;
    outline: none;
  }
  
  ::placeholder{
    color: ${props => props.theme.title === 'dark' ? props.theme.color.colorClaro : '#333'}; 
  }

  p{
      color: ${propx => propx.theme.color.secundary};
  }

`;

export const Container = styled.div`
    max-width: 70rem;
    padding: 0 1rem;
    margin: auto;
`;

export const animeRight = keyframes`
  to{
    opacity: 1;
    transform: initial;
  }
`

export const AnimeRight = styled.div`
  opacity: 0;
  transform: translateX(30px);
  animation: ${animeRight} .4s forwards;
`;

export default GlobalStyle;