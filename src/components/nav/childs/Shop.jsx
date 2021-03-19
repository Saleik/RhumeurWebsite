import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const Icon = styled(motion.i)`
        color: black;
        font-size: 1.5rem;
        :hover{
            color: lightblue;
            transition: .5s;
        }
    `;

const CstLink = styled.a`
    padding-right:5rem;
`;
export const Shop = props => {
    //TODO: add eshop text to right of the icon
    const { url } = props
    return (<CstLink href={url}><Icon whileHover={{ scale: 1.2 }} className="fas fa-store"></Icon></CstLink>)
}
