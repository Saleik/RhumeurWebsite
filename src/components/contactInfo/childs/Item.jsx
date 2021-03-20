import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
    
    i{
        padding: 1rem;
    }

    span{
        font-weight: bold;
    }
`;
export const Item = props => {

    const { icon, coordinate } = props;

    return (
        <Div>
            <i className={`fas fa-${icon}`} />
            <span>{coordinate}</span>
        </Div>
    )
}
