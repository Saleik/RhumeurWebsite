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

//Cst[component name] => custom components
const CstTitle = styled(Title)`
    grid-column: 1/span3;
    grid-row:1;
    padding-bottom:5rem;
`;

const CstContactForm = styled(ContactForm)`
    grid-column: 1;
`;

const CstContactInfo = styled(ContactInfo)`
    grid-column: 3;
`;

const SeparationLine = styled.div`
    width: .3rem;
    height: 20rem;
    background-color: black;
    grid-column: 2;
`;

const MapWrapper = styled.div`
    grid-row: 4;
    grid-column: 1/span3;
    padding-top: 5rem;
    
    iframe{
        width: 100rem;
        height: 40rem;
    }
`;

const CstContainer = styled(Container)`
    grid-template-columns: 1fr min-content 1fr;
    padding: 0 2rem;

    ${CstContactForm},
    ${CstContactInfo},
    ${SeparationLine},
    ${MapWrapper}{
        justify-self: center;
        align-self: center;
    };

    @media screen and (max-width: 1024px){
        grid-template-columns: 1fr;
        grid-template-rows: min-content;
        grid-auto-flow: row;

        ${CstContactForm}{
            grid-row: 1;
        }

        ${CstContactInfo}{
            grid-column: 1;
            grid-row: 3;
        }

        ${SeparationLine}{
            grid-column: 1;
            grid-row:2;
            height: .2rem;
            width: 20rem;
            margin: 2rem 0;
        }
    }
`;


export const Contact = () => {

    const { data } = useData();

    //Contact info to custom useContext
    const contactData = {
        'eshop': data.menu.eshopLink,
        'phone': data.contact.phoneNumber,
        'address': data.contact.address,
    };

    return (
        <Section id='contact'>
            <CstContainer>
                <CstTitle>Contact</CstTitle>
                <CstContactForm />
                <SeparationLine />
                <CstContactInfo data={contactData} />
                <MapWrapper>
                    <iframe
                        title='address Thé Shéjoma store'
                        src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1346.979274466256!2d7.484979!3d47.52967!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1bc4042c6069fc30!2sComptoir%20Sh%C3%A9joma!5e0!3m2!1sfr!2sfr!4v1616491374886!5m2!1sfr!2sfr'
                        width='800'
                        height='400'
                        style={{ border: 0 }}
                        allowFullScreen=''
                        loading='lazy'
                        aria-hidden='false'
                    />
                </MapWrapper>
            </CstContainer>
        </Section >
    )
}
