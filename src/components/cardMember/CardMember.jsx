import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
        display: flex;
        width: 60rem;
        grid-column: ${props => props.index > 0 && props.index < 2 ? Math.round(props.index + 1) + '/span' + Math.round(props.index + 2) : '1/span2'};
        grid-row:${props => props.index > 0 && props.index < 2 ? Math.round(props.index + 3) : '3'};

    `;
const CardBody = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;

    h3{
        margin:0;
    }
`
const Thumbnails = styled.img`
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    box-shadow: -.4rem .4rem .5rem lightgray ;
    padding: 1rem;
`;
export const CardMember = props => {
    const { name, pic, children, index } = props;

    return (
        <Card index={index}>
            <Thumbnails src={pic} />
            <CardBody>
                <h3>{name}</h3>
                <p>{children}</p>
            </CardBody>

        </Card>
    )
}
