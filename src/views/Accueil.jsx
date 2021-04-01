import React from 'react';
import { useData } from '../hooks/dataContext';
import styled from 'styled-components';
import { Container } from '../styles/globalStyles';
import { Button } from '../components/button/Button';

const Section = styled.section`
        padding-top:0;
    `;

//Cst[component name] => custom components
const CstContainer = styled(Container)`
         grid-template-columns: 1fr 1fr;
         img{
            width: 100%;
            height: 100%;
            grid-column:1 /span 2;
            grid-row:1;
         }

         span{
            grid-column: 1/span2;
            grid-row: 1;
            justify-self: center;
            align-self: flex-end;
            color: white;
            font-weight: bold;

            @media screen and (max-width:1024px){
               font-size: 1.8rem;
            }
        }
    `;

const InsertionContainer = styled.div`
        grid-column:2;
        grid-row: 1;
        color: white;
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
        padding: 0 5rem;
        line-height:2rem;

        h1{
            font-family: 'Finger Paint', cursive;
            font-size: 5rem;
            font-weight:normal;
            color: white;
            -webkit-text-stroke: .1rem black;
        }

        @media screen and (max-width:1024px){
           line-height: 2.5rem;
           p{
               font-size: 1.8rem;
           }
        }
        
    `;

export const Accueil = () => {
    //custom useContext
    const { data } = useData();
    //image full screen
    const url = data.accueil.image.url;
    const alt = data.accueil.image.caption;

    //Text insertion
    const insertion = data.accueil.text;

    return (
        <Section id='accueil'>
            <CstContainer>
                <img src={url} alt={alt} />
                <InsertionContainer>
                    <h1>Rhumeur</h1>
                    <p>{insertion}</p>
                    <Button
                        fontSize={'1.5rem'}
                        fontColor='white'
                        link={data.menu.eshopLink}
                    >
                        Acheter
                    </Button>
                </InsertionContainer>
                <span>*L'abus d'alcool est dangereux pour la santé. A consommer avec modération.*</span>
            </CstContainer>
        </Section>
    )
}

