import React from 'react';
import styled from 'styled-components';

const FormInput = styled.div`
    display:flex;
    flex-direction: column;
    position: relative;
    margin:2rem 1rem;
    width: 15rem;

    label{
        color:lightgray;
        bottom:10%;
        left: 0;
    };

    span{
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: red;
    };

    span,
    label{
        position:absolute;
        transition: .5s;
    };
    
    input{
        outline: none;
        border:0;
        border-bottom:solid 0.1rem lightgray;
        padding:0;

        :focus{
            ~label{
                color:red;
                transform: translateY(-110%);
            };

            ~span {
                width: 100%;
            };

        };

        :valid{

            ~ label{
            color:red;
            transform: translateY(-110%);
            };

            ~span{
                width:100%;
            }
        } 
    };
`;

export const Input = props => {

    const { type, name, label } = props;
    return (
        <FormInput>
            <input type={type} name={name} id={name} required />
            <label htmlFor="name">{label}</label>
            <span></span>
        </FormInput>
    )
}
