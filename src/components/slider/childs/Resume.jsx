import React from 'react';
import styled from 'styled-components';
import { Button } from '../../button/Button';

const Div = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    flex-direction:column;
    text-align: center;
    width: 60rem;
    height:100%;
   
    p{
        margin:0;
        padding: 2rem 10rem;
    }

    h2{
        margin:0;
        padding:1rem;
    }

    @media screen and (max-width:1024px){
        h2{
            font-size: 1.8rem;
        }

        p{
            font-size: 1.3rem;
        }
    }
`;
/**
 * current display product presentation
 * @param {title, children, link} props 
 * @returns 
 */
export const Resume = props => {

    const { title, children, link } = props;

    return (
        <Div>
            <h2>{title}</h2>
            <p>{children}</p>
            <Button link={link}>
                Acheter
            </Button>
        </Div>
    )
}

