import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export const Carousel = props => {

    const { children, setIndex } = props;

    const onSlideChanged = ({ item }) => {
        setIndex(item);
    };

    return (
        <AliceCarousel
            autoPlay
            autoPlayStrategy="default"
            autoPlayInterval={3000}
            animationDuration={2000}
            animationType="fadeout"
            infinite
            touchTracking={false}
            disableDotsControls
            disableButtonsControls
            activeIndex={0}
            onSlideChanged={onSlideChanged}
        >
            {children}
        </AliceCarousel>
    )
}
