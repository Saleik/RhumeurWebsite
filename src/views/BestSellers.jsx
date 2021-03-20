import React from 'react';
import styled from 'styled-components';
import { useData } from '../contexts/dataContext';
import { Title, Container } from '../styles/globalStyles';
import { Slider } from '../components/slider/Slider';
import { Introduce } from '../components/introduce/Introduce';

const CstContainer = styled(Container)`
    grid-template-columns: repeat(3, 1fr);
`;

const CstTitle = styled(Title)`
    grid-column: 1/span3;
    grid-row:1;
`;

const ProductWrapper = styled.div`
        grid-column: ${props => props.column ? props.column : '1'};
        grid-row: ${props => props.row ? props.row : '3'};
        border: 0.1rem solid red;
        ${props => {
        if (props.middle) {
            return `border:none;`
        } else {
            return `
            border-left:none;
            border-right:none;
        `
        }
    }}
        width: 100%;
        display:flex;
        align-self: flex-end;
`;

export const BestSellers = () => {

    const { data } = useData();
    const sectionIntroduce = data.bestSellersIntroduce.text;

    //get from the context
    const products = data.bestSellers;
    const productsSpice = data.bestSellersSpice;
    const productsFruit = data.bestSellersFruit;
    //FIXME: Animation state

    return (
        <section id="bestSellers">
            <CstContainer>
                <CstTitle>
                    Best Sellers
                </CstTitle>
                <Introduce>{sectionIntroduce}</Introduce>
                <ProductWrapper>
                    <Slider products={products} />
                </ProductWrapper>
                <ProductWrapper row={'4'} middle column={'1/span3'}>
                    <Slider right products={productsFruit} />
                </ProductWrapper>
                <ProductWrapper row={'5'}>
                    <Slider products={productsSpice} />
                </ProductWrapper>
            </CstContainer>
        </section>
    )
}
