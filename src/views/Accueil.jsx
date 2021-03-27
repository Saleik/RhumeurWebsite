import React from 'react';
import { useData } from '../hooks/dataContext';
import styled from 'styled-components';
import { Container } from '../styles/globalStyles';
import { Button } from '../components/button/Button';

const ImageWrapper = styled.div`
         grid-column:1 /span 2;
         grid-row:1;
    `;

const CstImg = styled.img`
        width: 100%;
        height: auto;
    `;

const Section = styled.section`
        padding-top:0;
       
    `;

//Cst[component name] => custom components
const CstContainer = styled(Container)`
         grid-template-columns: 1fr 1fr;
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

    `;

const BrandTitle = styled.h1`
        font-family: 'Finger Paint', cursive;
        font-size: 5rem;
        font-weight:normal;
        color: white; 
        -webkit-text-stroke: .1rem black;
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
                <ImageWrapper>
                    <CstImg src={url} alt={alt} />
                </ImageWrapper>
                <InsertionContainer>
                    <BrandTitle>Rhumeur</BrandTitle>
                    <p>{insertion}</p>
                    <Button
                        fontSize={'1.5rem'}
                        fontColor='white'
                        link={data.menu.eshopLink}
                    >
                        Acheter
                    </Button>
                </InsertionContainer>
            </CstContainer>
        </Section>
    )
}

