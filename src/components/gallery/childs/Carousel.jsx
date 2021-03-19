import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export const Carousel = props => {

    const { children } = props;

    return (
        <AliceCarousel>
            {children}
        </AliceCarousel>
    )
}
