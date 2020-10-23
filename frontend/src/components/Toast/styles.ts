import styled, { keyframes } from 'styled-components';

const animeRight = keyframes`
    to{
        opacity: 1;
        transform: initial;
    }
`

export const Content = styled.div`

    width: auto;
    justify-content: space-between;
    transform: translateX(20px);
    animation: ${animeRight} .3s forwards;
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 2px;
    padding: 16px;

`;

export const Container = styled.span`
    z-index: 1000;
    position: fixed;
    display: flex;
    top: 6rem;
    right: -7px;
    width: auto;
    justify-content: space-between;

    &::after{
        content: "";
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-left: 5px solid #333;
        display: inline-block;
        vertical-align: middle;
        margin-right: 10px;
        width: 0;
        height: 0;
        margin-top: 1rem;

    }
`;