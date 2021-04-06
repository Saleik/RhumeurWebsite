import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    grid-column:1;
    align-self:center;

    img{
        width: 100%;
        max-width:10rem;
        height: 100%;
    }

      @media screen and (max-width: 1024px){
            img{
                max-width:13rem;
            }
    }
`
export const Brand = props => {
    const { src, alt } = props
    return (
        <Div>
            <a href='http://localhost:3333/desk'>
                <img width='200px' height='150px' src={src + '?fm=webp&h=150&w=200'} alt={alt} />
            </a>
        </Div>


    )
}
