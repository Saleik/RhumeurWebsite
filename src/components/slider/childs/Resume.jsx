import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Button } from '../../button/Button';

const Div = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    flex-direction:column;
    text-align: center;
    width: 60rem;
    height:100%;
   
    p{
        margin:0;
        padding: 2rem 10rem;
    }

    h2{
        margin:0;
        padding:1rem;
    }

    @media screen and (max-width:1024px){
        h2{
            font-size: 1.8rem;
        }

        p{
            font-size: 1rem;
        }
    }
`;
/**
 * current display product presentation
 * @param {title, children, link} props 
 * @returns 
 */
export const Resume = props => {

    const { title, children, link } = props;

    //Motion animation settings
    const variantsH2 = {
        hidden: {
            x: '-20%',
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: .5,
                type: 'tween'
            }
        },

    };
    const variantsP = {
        hidden: {
            x: '20%',
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: .5,
                type: 'tween'
            }
        },

    }
    return (
        <Div>
            <motion.h2
                initial='hidden'
                animate='visible'
                variants={variantsH2}
            >
                {title}
            </motion.h2>
            <motion.p
                initial='hidden'
                animate='visible'
                variants={variantsP}
            >
                {children}
            </motion.p>
            <Button link={link}>
                Acheter
            </Button>
        </Div>
    )
}

