import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { CardMember } from '../components/cardMember/CardMember';
import { Gallery } from '../components/gallery/Gallery';
import { Introduce } from '../components/introduce/Introduce';
import { useData } from '../contexts/dataContext';
import { Container, TitleSection } from '../styles/globalStyles';

const Section = styled.section`
    display:flex;
    align-items:center;
    justify-content:center;
`
const CstContainer = styled(Container)`
    grid-template-columns:repeat(3, 1fr);
`;

const CstTitleSection = styled(TitleSection)`
    grid-column: 1/span3;
    grid-row: 1;
    justify-self: center;
    align-items:center; 
`;

const GalleryWrapper = styled.div`
    padding-top:5rem;
    grid-column: 1/span3;
    grid-row: ${props => props.lastRows && props.lastRows} ;
    text-align:center;
`;

const Span = styled.span`
        font-weight: bold;
    `
export const QuiSommesNous = () => {

    const { data } = useData();
    const sectionIntroduce = data.quiSommesNousIntroduction.text;
    const members = data.quiSommesNous;

    const lastRows = Math.round(members.length + 2) + 1;

    const galleryPicture = data.quiSommesNousGalerie;

    return (
        <Section>
            <CstContainer>
                <CstTitleSection>
                    Qui somme-nous ?
            </CstTitleSection>
                <Introduce colNum='1/span3'>
                    {sectionIntroduce}
                </Introduce>
                {members && members.map((member, index) => (
                    <CardMember key={uuidv4()} index={index} name={member.firstName} pic={member.image}>
                        {member.presentation}
                    </CardMember>
                ))}
                <GalleryWrapper lastRows={lastRows}>
                    <Span>Vous pouvez aussi nous retrouvez sur les différents salons de la régions Grand-est, ci-dessous des photos de nos bars éphémère:</Span>
                    <Gallery pictures={galleryPicture} />
                </GalleryWrapper>
            </CstContainer>
        </Section>
    )
}
