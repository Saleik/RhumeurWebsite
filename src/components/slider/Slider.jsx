import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { Resume } from './childs/Resume';
import { Carousel } from './childs/Carousel';

const Div = styled.div`
    display:flex;
    ${props => {
        if (props.right) {
            return `flex-direction: row-reverse`;
        }
    }}
`;

const SliderWrapper = styled.div`
    width: 40rem;
    height:50rem;
    img{
        width: 40rem;
        height: 50rem;
    }
`;

/**
 * @param {products, right} props 
 * @returns 
 */
export const Slider = props => {

    const { products, right } = props;

    //store index current display slide
    const [index, setIndex] = useState(0);

    return (
        <Div right={right}>
            <SliderWrapper>
                <Carousel setIndex={setIndex}>
                    {products &&
                        products.map(product => (
                            <img key={uuidv4()}
                                src={product.image}
                                alt={product.alt}
                            />
                        ))
                    }
                </Carousel>
            </SliderWrapper>
            <Resume
                title={products[index].name}
                link={products[index].link}
            >
                {products[index].resume}
            </Resume>
        </Div>
    )
}
