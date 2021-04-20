import React from 'react';
import styled from 'styled-components';

const Field = styled.div`
    display:flex;
    flex-direction: column;
    position: relative;
    margin:2rem 1rem;
    width: 15rem;

    label{
        color:black;
        bottom:10%;
        left: 0;
    };

    label{
        position:absolute;
        transition:.5s;
    };
    
    input{
        outline: none;
         border-radius: 0;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border:0;
        border-bottom: solid .1rem black;
        padding:1;

        :focus,
        :valid:required ${props => !!props.filled && ',:optional'}{
            ~label{
                color:red;
                transform: translateY(-100%);
            };

        }
        
    };

    @media screen and (max-width: 1024px){
        width: 30rem;
        font-size: 2rem;
        input[type='text'],
        input[type='email']{
            font-size: inherit;
        }
    }
   
`;

/**
 * Input generator
 * @param {type, name, onChange, value} props 
 * @returns 
 */
export const Input = props => {

    const { type, name, label, onChange, value } = props;
    return (
        <Field filled={value}>
            <input
                onChange={onChange}
                type={type}
                name={name}
                id={name}
                value={value}
                required={name !== 'corporation'}
            />
            <label htmlFor={name}>
                {label}
            </label>
        </Field>
    )
}
