import React from 'react';
import styled from 'styled-components';
const CstImg = styled.img`
    width: 100%;
    max-width:10rem;
    height: auto;
`

export const Brand = props => {
    const { src, alt } = props
    return (
        <a href="/">
            <CstImg src={src} alt={alt} />
        </a>

    )
}
