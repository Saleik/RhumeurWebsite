import React from 'react';
import styled from 'styled-components';


const Card = styled.div`
        display: flex;
        width: 60rem;
        grid-column: ${props => props.index > 0 && props.index < 2 ? props.index + 1 + '/span' + (props.index + 2) : '1/span2'};
        grid-row:${props => props.index > 0 && props.index < 2 ? props.index + 3 : '3'};

        @media screen and (max-width: 1400px){
        ${props => {
        if (props.index === 0) {
            return `
                    padding-left: 5rem;            
                `
        }
    }}
        }
    `;

const CardBody = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;

    h3{
        margin:0;
    }

    @media screen and (max-width: 1024px){
        h3{
            font-size: 1.5rem;
        }

        p{
            font-size: 1.3rem;
        }
            

    }
`;

const Thumbnails = styled.img`
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    box-shadow: -.4rem .4rem .5rem lightgray ;
    padding: 1rem;
`;

/**
 * Card member corporation
 * @param {name, pic, children, index} props 
 * @returns 
 */
export const CardMember = props => {

    const { name, pic, children, index } = props;
    return (
        <Card index={index}>
            <Thumbnails loading="lazy" src={pic} />
            <CardBody>
                <h3>{name}</h3>
                <p>{children}</p>
            </CardBody>

        </Card>
    )
}
