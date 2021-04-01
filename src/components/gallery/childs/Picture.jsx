import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Img = styled(motion.img)`
    width:100%;
    height:40rem;
    cursor:pointer;
    border-radius: .5rem;
`;

const ImgWrapper = styled.div`
    justify-self: center;
    display: inline-block;
    overflow: hidden;
    width:100%;
    height:100%;
    border-radius: .5rem;

    ${Img}{
        width: 100%;
        height: 100%;
    }
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

/**
 * Image styling for gallery and lightbox
 * @param {
 * url, 
 * alt, 
 * onClick,
 * scale=false, 
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
                            height={height}
                            src={url}
                            alt={alt}
                            whileHover={{
                                scale: scale ? 1.1 : 1,
                                transitionDuration: '.5s',
                            }}
                            onClick={onClick}
                        />
                        <figcaption>
                            {caption}
                        </figcaption>
                    </Figure>
                ) : (
                    <ImgWrapper
                        height={height}
                        borderRadius={borderRadius}
                    >
                        <Img loading="lazy"
                            borderRadius={borderRadius}
                            height={height}
                            src={url}
                            alt={alt}
                            whileHover={{
                                scale: scale ? 1.05 : 1,
                                transitionDuration: '.5s',
                            }}
                            onClick={onClick}
                        />
                    </ImgWrapper>
                )}
        </>

    )
}

