import React, { useState } from 'react';
import styled from 'styled-components';
import VizSensor from 'react-visibility-sensor';

const P = styled.p`
        grid-row: 2;
        grid-column: ${props => props.colNum ? props.colNum : '1'};
        justify-self: center;
        align-self:center;
        text-align:center;
        width: 50rem;
        height: auto;
        color: transparent;
        text-shadow: 0 0 .5em rgba(0,0,0,.5);
        margin:0;
        padding:2rem;
        ${props => {
        if (props.isInTheViewport) {
            return `
                        color: rgba(0,0,0, 1);
                        text-shadow: 0 0 0 rgba(0,0,0,0);
                        transition: 1s;
                    `
        }
    }}
    @media screen and (max-width:1024px){
               font-size: 1.3rem;
    }
    
`;

/**
 * if components is visible render text content
 * @param {children, colNum} props 
 * @returns
 */
export const Introduce = props => {

    const { children, colNum } = props;
    const [isInTheViewport, setIsInTheViewport] = useState();

    return (
        <VizSensor
            partialVisibility
            onChange={isVisible => setIsInTheViewport(isVisible)}
        >
            <P colNum={colNum} isInTheViewport={isInTheViewport}>
                {children}
            </P>
        </VizSensor>
    )
}
