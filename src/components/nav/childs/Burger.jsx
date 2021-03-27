import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    --animation-curve: cubic-bezier(1, 0, 0, 1);
    position:relative;
    margin:0 auto;
    grid-column:2;
    align-self:center;
    justify-self:center;
    display:none;
    label {
        width: 3.5rem;
        height: .5rem;
        background-color:black;
        position: absolute;
        cursor: pointer;

        &::before,
        &::after {
            content: "";
            width: 3.5rem;
            height: .5rem;
            background-color: black;
            position: absolute;
            display: block;
            color: red;
            transition: all 0.6s var(--animation-curve);
        }

        &::before {
            top: -250%;
            left: 0%;
            transform: rotateZ(0deg);
            transform-origin: left top;
        }

        &::after {
            bottom: -250%;
            left: 0%;
            transform: rotateZ(0deg);
            transform-origin: left bottom;
        }
    }

    input:checked ~ label::before {
    content: "";
        background-color: black;
        transform: rotateZ(50deg);
        left: 10%;
    }

    input:checked ~ label::after {
    content: "";
        background-color: black;
        transform: rotateZ(-50deg);
        left: 10%;
    }

    input:checked ~ label {
        background-color: white;
    }

    input ~ label {
        transition: all 0.5s var(--animation-curve);
    }

    input {
      display: none;
    };

    @media screen and (max-width: 812px){
        display:block
    }
`

export const Burger = () => {

    return (
        <Div>
            <input type="checkbox" name="toggle" id="toggle" />
            <label htmlFor="toggle" />
        </Div>
    )
}
