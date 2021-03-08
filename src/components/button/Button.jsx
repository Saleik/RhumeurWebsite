import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const CstButton = styled(motion.button)`
    background-color: transparent;
    color: ${props => props.fontColor ? props.fontColor : 'black'};
    border: .2rem solid lightblue;
    border-radius: .2rem;
    padding: .5rem 1rem;
    cursor: pointer;
    outline: none;
    font-size:${props => props.fontSize ? props.fontSize : '1rem'};

    :hover{
        background-color: lightblue;
        border-color: lightblue;
        color: ${props => props.fontColor ? 'black' : 'white'}
    }

`
export const Button = props => {
    const { children, fontColor, fontSize, link = null } = props;
    return (
        <div>
            {link !== null ? (
                <a href={link}>
                    <CstButton fontSize={fontSize} fontColor={fontColor} whileTap={{ scale: .9 }} whileHover={{ scale: 1.2 }}>
                        {children}
                    </CstButton>
                </a>
            ) : (
                <CstButton fontSize={fontSize} fontColor={fontColor} whileHover={{ scale: 1.2 }} whileTap={{ scale: .9 }}  >
                    {children}
                </CstButton>
            )}

        </div>
    )
}
