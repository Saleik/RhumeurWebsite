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
`
export const Resume = props => {

    const { title, children, link } = props;
    return (
        <div>
            <Div>
                <h2>{title}</h2>
                <p>{children}</p>
                <Button link={link}>
                    Acheter
                    </Button>
            </Div>
        </div>
    )
}

