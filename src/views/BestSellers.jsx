import React from 'react';
import styled from 'styled-components';
import { useData } from '../contexts/dataContext';
import { TitleSection, Section } from '../styles/globalStyles';
import { SliderBox } from '../components/sliderBox/Slider';

const CstSection = styled(Section)`
    grid-template-columns: repeat(3, minmax(30rem, 1fr));
`

const Title = styled(TitleSection)`
    grid-column: 2;
    grid-row:1;
`
const ProductContainer = styled.div`
        grid-column: 1;
        grid-row: 2;
        align-self: center;
        border: 0.1rem solid black;
        border-left: none;
        border-right: none;
        width: 50rem;
        display:flex;
`
export const BestSellers = () => {

    const { data } = useData();

    //get from the context
    const products = data.bestSellers;

    return (
        <CstSection id="bestSellers">
            <Title>
                <h1>Best Sellers</h1>
            </Title>
            <ProductContainer>
                <SliderBox products={products} />
            </ProductContainer>
        </CstSection>
    )
}
