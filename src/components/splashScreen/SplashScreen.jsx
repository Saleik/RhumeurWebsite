import React from 'react';
import { LoadingBox } from '../loadingBox/LoadingBox';
import splashScreenBg from '../../images/splashScreen.webp';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { MessageBox } from '../messageBox/MessageBox';

const Section = styled(motion.section)`
    height:100vh;
    padding: 0;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to bottom, rgba(0,0,0,.2), rgba(217,6,6,.1)), url(${splashScreenBg}) no-repeat center;
    background-size: cover;
    position: relative;

    h1{
            font-family: 'Finger Paint', cursive;
            font-size: 10rem;
            font-weight:normal;
            color: red;
            -webkit-text-stroke: .1rem  black;
            margin:0;
            padding:1rem 0;
        }

        cite{
            font-size: 3rem;
            font-weight: bold;
            padding-bottom: 1rem;
            color: white;
        }
`;

const Disclaimer = styled.span`
    position: absolute;
            color:white;
            bottom:1%;
            font-size: 1.5rem;
`;
export const SplashScreen = props => {

    const { error } = props;
    return (
        <Section initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}>
            <h1>Rhumeur</h1>
            <cite>L'arrangé Shéjoma</cite>
            {error !== null ? (
                <MessageBox>
                    ERREUR LORS DU CHARGEMENT DES DONNÉES
                </MessageBox>) : (
                <LoadingBox />
            )}
            <Disclaimer>*L'abus d'alcool est dangereux pour la santé. A consommer avec modération.*</Disclaimer>
        </Section>
    )
}
