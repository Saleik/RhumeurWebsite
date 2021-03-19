import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';


const Img = styled(motion.img)`
    width:${props => props.width};
    height:${props => props.height};
    border-radius: .5rem;
    cursor:pointer;
`

export const Picture = props => {
    const { url, alt, onClick, width, height, scale = false } = props;
    return (
        <>
            <Img width={width} height={height} src={url} alt={alt} whileHover={{ scale: scale ? 1.05 : 1, transitionDuration: '.5s' }} onClick={onClick} />
        </>
    )
}

