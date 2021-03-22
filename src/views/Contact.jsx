import React from 'react';
import styled from 'styled-components';
import { ContactForm } from '../components/contactForm/ContactForm';
import { ContactInfo } from '../components/contactInfo/ContactInfo';
import { useData } from '../contexts/dataContext';
import { Container, Title } from '../styles/globalStyles';

const Section = styled.section`
    display: flex;
    justify-content:center;
    align-items:center;
`;

const CstTitle = styled(Title)`
    grid-column: 1/span3;
    grid-row:1;
    padding-bottom:5rem;
`;

const CstContactForm = styled(ContactForm)`
    grid-column: 1;
    justify-self:center;
    align-self:center;
`;

const CstContactInfo = styled(ContactInfo)`
    grid-column: 3;
`;

const CstContainer = styled(Container)`
    grid-template-columns: 1fr min-content 1fr;
    grid-column-gap: 1rem;
    padding: 0 2rem;

    ${CstContactForm},
    ${CstContactInfo}{
        justify-self: center;
        align-self: center;
    };

`;

const SeparationLine = styled.div`
    width: .3rem;
    height: 20rem;
    background-color: black;
    grid-column: 2;
    justify-self: center;
    align-self: center;
`
export const Contact = () => {

    const { data } = useData();

    //Contact info from context api
    const contactData = {
        'eshop': data.menu.eshopLink,
        'phone': data.contact.phoneNumber,
        'address': data.contact.address,
    };

    return (
        <Section id="contact">
            <CstContainer>
                <CstTitle>Contact</CstTitle>
                <CstContactForm />
                <SeparationLine />
                <CstContactInfo data={contactData} />
            </CstContainer>
        </Section >
    )
}
