import styled, {
    createGlobalStyle
} from 'styled-components'

export const GlobalStyle = createGlobalStyle `
    @font-face {
        font-family: 'Avenir' ;
        src: url('font/AvenirLTStd-Black.otf') format('otf');

        font-family:'Roboto';
        src: url('font/Roboto-Regular.ttf') format('ttf');

        font-family:'Finger Paint';
        src: url('font/FingerPaint-Regular.ttf') format('ttf');
    }

    html,
    body{
        margin:0;
        padding: 0;
        font-size: 1vw;
        overflow-x: hidden;      
        scroll-behavior: smooth;
        width: 100vw;
    }

    body{
        box-sizing: border-box;
        font-family:'Avenir';
        letter-spacing: .2rem;
        font-display: swap;

        section {
            width: 100vw;
            height: auto;
            padding-top: 10rem;
        }

        a {
            text-decoration: none;
            color: black;
        }

        img {
            object-fit: cover;
        }

       @media screen and (max-width: 1024px){
            h1{
                font-size:2.2rem;
            }
       }
    }

    //Scrollbar
    body::-webkit-scrollbar {
        width: .4rem;               
    }

    body::-webkit-scrollbar-track {
    background: white;       
    }

    body::-webkit-scrollbar-thumb {
    background-color: lightblue;   
    }
`;


export const Title = styled.h1 `
        justify-self: center;
        font-family:'Roboto', sans-serif;
        margin:0;
    `;

export const Container = styled.div `
        display: grid;
        position: relative;
        grid-auto-rows: min-content;
`;