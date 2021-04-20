import React, { useReducer, useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import { Input } from './childs/Input';
import { Button } from '../button/Button';
import ReCAPTCHA from "react-google-recaptcha";
import { contactFormReducer } from '../../reducers/contactFormReducer';
import { MessageBox } from '../messageBox/MessageBox';
import { LoadingBox } from '../loadingBox/LoadingBox';
import { SuccessMail } from '../successMail/SuccessMail';

const Form = styled.form`
    display:flex;
    flex-direction: column;
    justify-items: center;
    align-items:center;
    margin-top: 5rem;
`;

const FormGroup = styled.div`
    display:flex;
`;

const Field = styled(Input)`
    padding:1rem;
`;

const TextAreaWrapper = styled.div`
      text-align:center;
      padding:1rem 0;
      width:100%;
`;

const Textarea = styled.textarea`
    width: 100%;
    max-width: 32rem;
    min-height: 15rem;
    resize: none;
    outline:none;
    border: 0;
    border-radius:.2rem;
    background: lightgrey;
    
    ::placeholder{
        color:black;
        font-size: 1.2rem;
    };
    
    :focus,
    :valid{
        background-color: rgba(255, 62, 62, .2);
        transition:.5s;
    };

    @media screen and (max-width: 1024px){
        max-width: 64rem;
        min-height: 32rem;
        font-size: 2rem;
        ::placeholder{
            font-size: 2rem;
        }
    }
`;

const Div = styled.div`
    padding:1rem;
`;

const MESSAGE_STATUS = {
    fullFillInputs: 'Veuillez, remplir tous les champs svp.',
    failMail: 'Veuillez saisir un email valide svp.',
    failSendingEmail: 'Oups...il semble y avoir eu une erreur lors de l\'envoi, veuillez réessayer plus tard, vous pouvez aussi nous contacter par téléphone.'
}


export const ContactForm = props => {

    const { className } = props;

    const initialState = {
        lastname: '',
        corporation: '',
        subject: '',
        email: '',
        message: ''
    };

    const [formState, dispatch] = useReducer(contactFormReducer, initialState);
    const [showError, setShowError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [showCaptcha, setShowCaptcha] = useState(false);
    const [emailSuccess, setEmailSuccess] = useState(false);

    const {
        lastname,
        corporation,
        subject,
        email,
        message
    } = formState;


    //captcha & form validation before submit
    const submitFormAndShowCaptcha = (e) => {
        e.preventDefault();

        let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        //verify form input and email value
        if (!(!!lastname) ||
            !(!!subject) ||
            !(!!message)) {
            setError(MESSAGE_STATUS.fullFillInputs);
            setShowError(true);
            return;
        } else if (!pattern.test(email)) {
            setError(MESSAGE_STATUS.failMail);
            setShowError(true);
            return;
        } else {
            setShowCaptcha(true);
        }

    };

    const sendEmail = (captchaValue) => {

        setLoading(true);

        //email data & captcha token
        const params = {
            ...formState,
            'g-recaptcha-response': captchaValue
        };

        //sending email
        emailjs.send(
            process.env.REACT_APP_EMAIL_JS_SERVICE,
            process.env.REACT_APP_EMAIL_JS_TEMPLATE,
            params,
            process.env.REACT_APP_EMAIL_JS_USER_ID
        )
            .then(({ status }) => {
                if (status === 200) {
                    setLoading(false);
                    setEmailSuccess(true);
                } else {
                    setLoading(false);
                    setEmailSuccess(false);
                    setError(MESSAGE_STATUS.failSendingEmail);
                    setShowError(true);
                }

            }, (error) => {
                setLoading(false);
                setError(MESSAGE_STATUS.failSendingEmail);
                setShowError(true)
                console.error(error.txt);
            })

    };

    return (
        <div className={className}>
            { loading ?
                (<LoadingBox />) :
                emailSuccess ?
                    (<SuccessMail />) : (
                        <Form onSubmit={submitFormAndShowCaptcha}>
                            {showError && (
                                <MessageBox>
                                    {error}
                                </MessageBox>
                            )}

                            <FormGroup>
                                <Field
                                    onChange={
                                        (e) => dispatch({ type: 'lastname', value: e.target.value })
                                    }
                                    type='text'
                                    name='lastname'
                                    label='Nom'
                                    value={lastname}
                                />
                                <Field
                                    onChange={
                                        (e) => dispatch({ type: 'corporation', value: e.target.value })
                                    }
                                    type='text'
                                    name='corporation'
                                    label='Entreprise'
                                    value={corporation}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Field
                                    onChange={
                                        (e) => dispatch({ type: 'subject', value: e.target.value })
                                    }
                                    type='text'
                                    name='subject'
                                    label='Objet'
                                    value={subject}
                                />
                                <Field
                                    onChange={
                                        (e) => dispatch({ type: 'email', value: e.target.value })
                                    }
                                    type='email'
                                    name='email'
                                    label='Email'
                                    value={email}
                                />
                            </FormGroup>
                            <TextAreaWrapper>
                                <Textarea
                                    onChange={
                                        (e) => dispatch({ type: 'message', value: e.target.value })
                                    }
                                    name='message'
                                    placeholder='Votre message...'
                                    rows='5'
                                    cols='33'
                                    value={message}
                                    required
                                />
                            </TextAreaWrapper>
                            <Div>
                                <Button borderColor='red' type='submit'>
                                    Envoyer
                                </Button>
                            </Div>
                            {showCaptcha && (
                                <ReCAPTCHA
                                    size='normal'
                                    sitekey={process.env.REACT_APP_GOOGLE_RECAPTCHA_API_KEY}
                                    hl='fr'
                                    onChange={sendEmail}
                                />

                            )}
                        </Form>
                    )
            }
        </div>
    )
}
