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
                            src={url + '?fm=webp'}
                            alt={alt}
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
                        <Img
                            loading="lazy"
                            borderRadius={borderRadius}
                            src={url + '?fm=webp'}
                            alt={alt}
                            whileHover={{
                                scale: 1.2,
                                transitionDuration: '.5s',
                            }}
                            onClick={onClick}
                        />
                    </ImgWrapper>
                )}
        </>

    )
}

