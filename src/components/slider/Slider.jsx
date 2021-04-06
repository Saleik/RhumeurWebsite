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
        :hover{
            cursor: pointer;
        }
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
                            <img
                                width='600px'
                                height='800px'
                                key={uuidv4()}
                                src={product.image + '?fm=webp&h=800&w=600'}
                                alt={product.alt}
                            />
                        ))
                    }
                </Carousel>
            </SliderWrapper>
            <Resume
                key={index * Math.PI}
                title={products[index].name}
                link={products[index].link}
            >
                {products[index].resume}
            </Resume>
        </Div>
    )
}
