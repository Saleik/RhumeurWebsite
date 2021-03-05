import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
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
        width: 100vw;
        height: auto;
        overflow-x: hidden;      
        scroll-behavior: smooth;
    }

    body{
        box-sizing: border-box;
        font-family:'Avenir';
        letter-spacing: .2rem;
  
    }

    body::-webkit-scrollbar {
        width: .4rem;               /* width of the entire scrollbar */
    }

    body::-webkit-scrollbar-track {
    background: white;        /* color of the tracking area */
    }

    body::-webkit-scrollbar-thumb {
    background-color: lightblue;    /* color of the scroll thumb */
    }

    a{
        text-decoration: none;
        color: black;
    }
`

export const TitleSection = styled.div`
        justify-self: center;
        font-family:'Roboto', sans-serif;
    `

export const Section = styled.section`
        display: grid;
        grid-auto-rows: min-content;
        width: 100%;
        height: auto;
        position: relative;
        padding-top: 5rem;
`