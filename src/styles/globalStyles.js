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
        font-display: swap;

  
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

    section{
         width: 100vw;
        height: auto;
        padding-top: 5rem;
    }

    a{
        text-decoration: none;
        color: black;
    }

    img{
        object-fit:cover;
    }
    //Alice Carousel control
    .alice-carousel__prev-btn-wrapper{
        text-align:left;
    }

    .alice-carousel__next-btn-wrapper{
        text-align:right;
    }

    .alice-carousel__next-btn{
        right: 10%;
        transform: translateX(-50%);

    }

    .alice-carousel__prev-btn{
        left: 10%;
        transform: translateX(-50%);
    }

    .alice-carousel__next-btn,
    .alice-carousel__prev-btn{
        position:absolute;
        top:50%;
        transform: translateY(-50%);
    }

    .alice-carousel__next-btn-item,
    .alice-carousel__prev-btn-item{
        font-size:3rem;
        color:white;
        font-weight:bold;
        :hover{
            color: red;
            transition: .5s;
        }
    }

    .alice-carousel__dots-item:hover, .__active {
        background-color:red!important;
    }
`
export const TitleSection = styled.h1`
        justify-self: center;
        font-family:'Roboto', sans-serif;
    `

export const Container = styled.div`
        display: grid;
        position: relative;
        grid-auto-rows: min-content;
`