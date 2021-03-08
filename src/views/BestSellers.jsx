import React from 'react';
import styled from 'styled-components';
import { useData } from '../contexts/dataContext';
import { v4 as uuidv4 } from 'uuid';
import { TitleSection, Container } from '../styles/globalStyles';
import { Slider } from '../components/slider/Slider';

const CstContainer = styled(Container)`
    grid-template-columns: repeat(3, 1fr);
`;

const Title = styled(TitleSection)`
    grid-column: 1/span3;
    grid-row:1;
`;

const P = styled.p`
    grid-column:1/span3;
    grid-row: 2;
    text-align:center;
    align-self:center;
    justify-self:center;
    width: 50rem;
    padding: 1rem;
`
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

const Slide = styled.img`
        width: 40rem;
        height: 50rem;
    `;

export const BestSellers = () => {

    const { data } = useData();

    const items = [];
    for (let i = 0; i < data.bestSellers.length; i++) {
        items.push(<Slide key={uuidv4()} src={data.bestSellers[i].image} alt={data.bestSellers[i].alt} />);
    }
    //get from the context
    const products = data.bestSellers;
    //FIXME: Animation state
    //TODO: not responsive - update sanity schema bestSellers 
    return (
        <section id="bestSellers">
            <CstContainer>
                <Title>
                    <h1>Best Sellers</h1>
                </Title>
                <P>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi vitae ab quo animi facilis asperiores enim tempore quaerat praesentium, a sint reprehenderit quod beatae alias sunt iste natus fugit sapiente.</P>
                <ProductWrapper>
                    <Slider items={items} products={products} />
                </ProductWrapper>
                <ProductWrapper row={'4'} middle column={'1/span3'}>
                    <Slider right items={items} products={products} />
                </ProductWrapper>
                <ProductWrapper row={'5'}>
                    <Slider items={items} products={products} />
                </ProductWrapper>
            </CstContainer>
        </section>
    )
}
