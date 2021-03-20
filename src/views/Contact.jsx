import React from 'react';
import styled from 'styled-components';
import { ContactForm } from '../components/contactForm/ContactForm';
import { ContactInfo } from '../components/contactInfo/ContactInfo';
import { Container, Title } from '../styles/globalStyles';

const Section = styled.section`
    display: flex;
    justify-content:center;
    align-items:center;
`;

const CstTitle = styled(Title)`
    grid-column: 1/span3;
    grid-row:1;
`;

const CstContactForm = styled(ContactForm)`
    grid-column: 1;
`;

const CstContactInfo = styled(ContactInfo)`
    grid-column: 3;
`;

const CstContainer = styled(Container)`
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    padding: 0 2rem;

    ${CstContactForm},
    ${CstContactInfo}{
        justify-self: center;
        align-self: center;
    };

`;



const contactData = {
    'phone-alt': '+33 6 42 25 72 64',
    'store': 'Eshop Rhumeur',
    'map-marker-alt': 'Comptoir Shéjoma\n 18 rue de Gehren, 68220 Hagenthal-le-bas'
};

export const Contact = () => {
    return (
        <Section>
            <CstContainer>
                <CstTitle>Contact</CstTitle>
                <CstContactForm />
                <CstContactInfo data={contactData} />
            </CstContainer>
        </Section>
    )
}
