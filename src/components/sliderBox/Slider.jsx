import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styled from 'styled-components';

const Slide = styled.img`
        width: 30rem;
        height: 40rem;
    `
const SliderWrapper = styled.div`
    width: 30rem;
    height:100%;
`
export const SliderBox = props => {
    const { products } = props;

    const handledragStart = (e) => e.preventDefault();
    const onSlideChange = (e) => {
    }

    //slides
    const items = [];
    products.map(bottle => items.push(
        <Slide className="item" key={uuidv4()} src={bottle.image} onDragStart={handledragStart} alt={bottle.alt} />
    ));


    return (
        //TODO:Config responsive setting later
        <SliderWrapper>
            <AliceCarousel mouseTracking
                autoPlay
                autoPlayStrategy="default"
                autoPlayInterval={3000}
                animationDuration={2000}
                animationType="fadeout"
                infinite
                touchTracking={false}
                disableDotsControls
                disableButtonsControls
                items={items}
                onSlideChange={onSlideChange}
            />
        </SliderWrapper>
    )
}
