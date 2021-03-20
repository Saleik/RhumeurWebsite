import React from 'react';
import styled from 'styled-components';
import { Item } from './childs/Item';
import { v4 as uuidv4 } from 'uuid';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    white-space: pre-line;
`;

export const ContactInfo = props => {

    const { data, className } = props;

    return (
        <Div className={className}>
            {
                Object.entries(data).map(obj => (
                    <Item key={uuidv4()} coordinate={obj[1]} icon={obj[0]} />
                ))
            }
        </Div>
    )
}
