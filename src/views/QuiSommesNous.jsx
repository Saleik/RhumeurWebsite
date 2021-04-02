import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { CardMember } from '../components/cardMember/CardMember';
import { Gallery } from '../components/gallery/Gallery';
import { Introduce } from '../components/introduce/Introduce';
import { useData } from '../hooks/dataContext';
import { useIsInTheViewport } from '../hooks/useIsInTheViewport';
import { Container, Title } from '../styles/globalStyles';

const Section = styled.section`
    display:flex;
    align-items:center;
    justify-content:center;
`;

//Cst[component name] => custom components
const CstContainer = styled(Container)`
    grid-template-columns:repeat(3, 1fr);
`;

const CstTitle = styled(Title)`
    grid-column: 1/span3;
    grid-row: 1;
    justify-self: center;
    align-items:center; 
`;

const Div = styled.div`
   grid-column: 2;
   display:flex;
   align-items: center;
   justify-content:center;
   flex-direction: column;
   height:40rem;
   width: 100%;
`;

const GalleryWrapper = styled.div`
    padding-top:5rem;
    grid-column: 1/span3;
    grid-row: ${props => props.lastRows && props.lastRows} ;
    text-align:center;

    span{
        font-weight: bold;
    }

    @media screen and (max-width: 1024px){
        span{
            font-size: 1.2rem;
        }
    }
`;

export const QuiSommesNous = () => {

    const { data } = useData();
    const [isVisible, containerRef] = useIsInTheViewport({
        root: null,
        rootMargin: '0px',
        threshold: .25
    });

    const sectionIntroduce = data.quiSommesNousIntroduction.text;
    const members = data.quiSommesNous;
    const galleryPicture = data.quiSommesNousGalerie;

    //Always set the gallery on the last row
    const lastRows = (members.length + 2) + 1;

    return (
        <Section id='quiSommesNous'>
            <CstContainer>
                <CstTitle>
                    Qui somme-nous ?
            </CstTitle>
                <Introduce colNum='1/span3'>
                    {sectionIntroduce}
                </Introduce>
                <Div ref={containerRef}>
                    {members && isVisible && members.map((member, index) => (
                        <CardMember
                            key={uuidv4()}
                            index={index}
                            name={member.firstName}
                            pic={member.image}
                        >
                            {member.presentation}
                        </CardMember>
                    ))}
                </Div>
                <GalleryWrapper lastRows={lastRows}>
                    <span>
                        Vous pouvez aussi nous retrouvez sur les différents salons de la régions Grand-est, ci-dessous des photos de nos bars éphémère:
                        </span>
                    <Gallery pictures={galleryPicture} />
                </GalleryWrapper>
            </CstContainer>
        </Section>
    )
}
