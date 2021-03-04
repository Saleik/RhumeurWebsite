import React from 'react';
import { useData } from '../contexts/dataContext';
import styled from 'styled-components';
import { motion } from 'framer-motion';
const ImageContainer = styled.div`
         grid-column:1 /span 2;
         grid-row:1;
    `
const CstImg = styled.img`
        width: 100%;
        height: auto;
    `
const CstSection = styled.section`
        padding-top:0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: min-content;
    `
const InsertionContainer = styled(motion.div)`
        grid-column:2;
        grid-row: 1;
        color: transparent;
        display:flex;
        justify-content:center;
        align-items:center;
        padding: 0 5rem;
        line-height:2rem;
        text-shadow: 0 0 .5em rgba(255, 255, 255, .5);

    `
export const Accueil = () => {

    const { data } = useData();
    //image full screen
    const url = data.accueil.image.url;
    const alt = data.accueil.image.caption;

    //Text insertion
    const insertion = data.accueil.text;

    return (
        <CstSection id="accueil">
            <ImageContainer>
                <CstImg src={url} alt={alt} />
            </ImageContainer>
            <InsertionContainer animate={{ color: 'rgba(255, 255, 255, 1)', textShadow: '0 0 0 rgba(255,255,255, 0)' }} transition={{ duration: .7 }}>
                <p>{insertion}</p>
            </InsertionContainer>
        </CstSection>
    )
}

