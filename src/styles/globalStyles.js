import styled, {
    createGlobalStyle
} from 'styled-components'

export const GlobalStyle = createGlobalStyle `
    @font-face {
         font-family: 'Avenir';
         src: url('fonts/avenir/AvenirLTStd-Black.eot');
         src: url('fonts/avenir/AvenirLTStd-Black.eot?#iefix') format('embedded-opentype'),
             url('fonts/avenir/AvenirLTStd-Black.woff2') format('woff2'),
             url('fonts/avenir/AvenirLTStd-Black.woff') format('woff'),
             url('fonts/avenir/AvenirLTStd-Black.ttf') format('ttf'),
             url('fonts/avenir/AvenirLTStd-Black.svg#AvenirLTStd-Black') format('svg');
         font-weight: 900;
         font-style: normal;

        font-family: 'Roboto';
        src: url('fonts/roboto/Roboto-Regular.eot');
        src: url('fonts/roboto/Roboto-Regular.eot?#iefix') format('embedded-opentype'),
            url('fonts/roboto/Roboto-Regular.woff2') format('font-woff2'),
            url('fonts/roboto/Roboto-Regular.woff') format('font-woff'),
            url('fonts/roboto/Roboto-Regular.ttf') format('tff'),
            url('fonts/roboto/Roboto-Regular.svg#Roboto-Regular') format('svg');
        font-weight: normal;
        font-style: normal;
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

        h1{
            justify-self: center;
            font-family: 'Roboto', sans-serif;
            margin: 0;
        }
       @media screen and (max-width: 1024px){
            h1{
                font-size:2.2rem;
                justify-self: center;
                font-family: 'Roboto', sans-serif;
                margin: 0;
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

export const Container = styled.div `
        display: grid;
        position: relative;
        grid-auto-rows: min-content;
`;