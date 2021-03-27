import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Img = styled(motion.img)`
    width:${props => props.width};
    height:${props => props.height};
    cursor:pointer;
    ${props => {
        if (props.borderRadius) {
            return `
            border-radius: ${props.borderRadius};
        `
        }
    }}
`;

const Figure = styled.figure`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;

    figcaption{
        color:white;
        font-size: 1.5rem;
    }
`;

//TODO: apply gradient black effect to light-box image

/**
 * Image styling for gallery and lightbox
 * @param {
 * url, 
 * alt, 
 * onClick,
 * width, 
 * height, 
 * scale=false, 
 * borderRadius, 
 * forCarousel, 
 * caption
 * } props 
 * @returns 
 */
export const Picture = props => {

    const {
        url,
        alt,
        onClick,
        width,
        height,
        scale = false,
        borderRadius,
        forCarousel,
        caption
    } = props;

    return (
        <>
            {
                forCarousel ? (
                    <Figure>
                        <Img
                            borderRadius={borderRadius}
                            width={width}
                            height={height}
                            src={url}
                            alt={alt}
                            whileHover={{
                                scale: scale ? 1.05 : 1,
                                transitionDuration: '.5s',
                            }}
                            onClick={onClick}
                        />
                        <figcaption>
                            {caption}
                        </figcaption>
                    </Figure>
                ) : (
                    <Img
                        borderRadius={borderRadius}
                        width={width}
                        height={height}
                        src={url}
                        alt={alt}
                        whileHover={{
                            scale: scale ? 1.05 : 1,
                            transitionDuration: '.5s',
                        }}
                        onClick={onClick}
                    />
                )}
        </>

    )
}

