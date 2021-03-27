import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    grid-column:1;
    align-self:center;

    img{
        width: 100%;
        max-width:10rem;
        height: auto;
    }
`
export const Brand = props => {
    const { src, alt } = props
    return (
        <Div>
            <a href="/">
                <img src={src} alt={alt} />
            </a>
        </Div>


    )
}
