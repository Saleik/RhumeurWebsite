import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Div = styled(motion.div)`
    background-color:rgba(255, 0, 0, .5);
    border-radius: .3rem;
    padding:.5rem;
    text-align:center;
    width:100%;
    max-width: 32rem;
    span{
        font-weight:bold;
    }
`;

/**
 * Display error message
 * @param {children} props 
 * @returns 
 */
export const MessageBox = props => {
    const { children } = props;

    const variants = {
        visible: {
            opacity: 1,
            transition: { duration: .5 }
        },
        hidden: { opacity: 0 },
    }

    return (
        <Div
            initial='hidden'
            animate='visible'
            variants={variants}
        >
            <span>
                {children}
            </span>
        </Div>
    )
}
