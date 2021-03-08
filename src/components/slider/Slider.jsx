import React, { useState } from 'react';
import styled from 'styled-components';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { motion } from 'framer-motion';
import { Button } from '../button/Button';

const Div = styled.div`
    display:flex;
    ${props => {
        if (props.right) {
            return `flex-direction: row-reverse`;
        }
    }}
`
const SliderWrapper = styled.div`
    width: 40rem;
    height:50rem;
`
const Resume = styled(motion.div)`
    display:flex;
    align-items:center;
    justify-content: center;
    flex-direction:column;
    text-align: center;
    width: 60rem;
    height:100%;
   
    p{
        margin:0;
        padding: 2rem 10rem;
    }

    h2{
        margin:0;
        padding:1rem;
    }
`

export const Slider = props => {

    const { products, items, right } = props;
    const [index, setIndex] = useState(0);

    const onSlideChange = () => {
        index < items.length - 1 || index === null ? setIndex(index + 1) : setIndex(0);
    }

    //TODO:Config responsive setting later
    return (
        <Div right={right}>
            <SliderWrapper>
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
                    items={items}
                    onSlideChange={onSlideChange}
                    activeIndex={0}
                />
            </SliderWrapper>
            <Resume>
                <h2>{products[index].name}</h2>
                <motion.p>{products[index].resume}</motion.p>
                <Button link={products[index].link}>
                    Acheter
                    </Button>
            </Resume>
        </Div>
    )
}
