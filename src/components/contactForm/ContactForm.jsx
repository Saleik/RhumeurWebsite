import React from 'react';
import styled from 'styled-components';
import { Input } from './childs/Input';

const FormGroup = styled.div`
    display:flex;
`;

const CstInput = styled(Input)`
    padding:1rem;
`;

const TextAreaWrapper = styled.div`
      text-align:center;
      padding:1rem;
`;

const Textarea = styled.textarea`
    width: 100%;
    resize: none;
    outline:none;
    border: 0;
    border-radius:.2rem;
    background: lightgrey;
    
    ::placeholder{
        color:white;
    }
    :focus{
        background-color: rgba(255, 62, 62, .2);
        transition:.5s;
    };
`;

export const ContactForm = props => {
    const { className } = props;

    return (
        <form className={className}>
            <FormGroup>
                <CstInput type="text" name="lastname" label="Nom" />
                <CstInput type="text" name="corporation" label="Entreprise" />
            </FormGroup>
            <FormGroup>
                <CstInput type="text" name="subject" label="Objet" />
                <CstInput type="email" name="email" label="Email" />
            </FormGroup>
            <TextAreaWrapper>
                <Textarea type="textarea" name="message" placeholder="Votre message..." rows="6" cols="33" />
            </TextAreaWrapper>
        </form>

    )
}
