import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    --animation-curve: cubic-bezier(1, 0, 0, 1);
    position:relative;
    grid-column:2;
    align-self:center;
    justify-self:center;
    display:none;
    width:15px;
    label {
        width: 15px;
        height: 2px;
        background-color:black;
        position: absolute;
        cursor: pointer;

        &::before,
        &::after {
            content: "";
            width: 15px;
            height: 2px;
            background-color: black;
            position: absolute;
            display: block;
            color:black;
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
        transform: rotateZ(41deg);
        left: 10%;
    }

    input:checked ~ label::after {
        content: "";
        background-color: black;
        transform: rotateZ(-41deg);
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
    }

    @media screen and (max-width: 1024px){
        display:block
    }

    @media screen and (min-width: 768px){
        width: 20px;

        label{
            height: 4px;
            width: 30px;

            &::after,
            &::before{
                height: 4px;
                width: 30px
            }
        }
            
    }
`

export const Burger = props => {

    const { onClick } = props;

    return (
        <Div>
            <input onClick={() => onClick(toggle => !toggle)} type="checkbox" name="toggle" id="toggle" />
            <label htmlFor='toggle' />
        </Div>
    )
}
