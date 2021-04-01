import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const CstButton = styled(motion.button)`
    background-color: transparent;
    color: ${props => props.fontColor ? props.fontColor : 'black'};
    border: .2rem solid ${props => props.borderColor};
    border-radius: .2rem;
    padding: .5rem 1rem;
    cursor: pointer;
    outline: none;
    font-size:${props => props.fontSize ? props.fontSize : '1rem'};

    :hover{
        background-color: ${props => props.borderColor};
        border-color: ${props => props.borderColor};
        color: ${props => props.fontColor ? 'black' : 'white'}
    }
    @media screen and (max-width:1024px){
           font-size: 2rem;
    }
`
/**
 * Button render with styling props, wrap in a if link !== null
 * @param {
 * children, 
 * fontColor,
 * link= null, 
 * type='button', 
 * borderColor='lightblue'
 * } props 
 * @returns 
 */
export const Button = props => {

    const {
        children,
        fontColor,
        fontSize,
        link = null,
        type = 'button',
        borderColor = 'lightblue',
    } = props;

    return (
        <>
            {link !== null ? (
                <a href={link}>
                    <CstButton
                        type={type}
                        fontSize={fontSize}
                        fontColor={fontColor}
                        borderColor={borderColor}
                        whileTap={{ scale: .9 }}
                        whileHover={{ scale: 1.2 }}
                    >
                        {children}
                    </CstButton>
                </a>
            ) : (
                <CstButton
                    type={type}
                    fontSize={fontSize}
                    fontColor={fontColor}
                    borderColor={borderColor}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: .9 }}
                >
                    {children}
                </CstButton>
            )}
        </>
    )
}
