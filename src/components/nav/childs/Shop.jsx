import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const CstI = styled(motion.i)`
        color: black;
        padding-right: 5rem;
        font-size: 1.5rem;
        :hover{
            color: lightblue;
            transition: .5s;
        }
    `;

export const Shop = props => {
    //TODO: add eshop text to right of the icon
    const { url } = props
    return (<a href={url}><CstI whileHover={{ scale: 1.2 }} className="fas fa-store"></CstI></a>)
}
