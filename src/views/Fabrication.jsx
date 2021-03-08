import React, { useState } from 'react';
import styled from 'styled-components';
import { useData } from '../contexts/dataContext';
import ReactPlayer from 'react-player/youtube';
import VizSensor from 'react-visibility-sensor';
import { TitleSection, Container } from '../styles/globalStyles';

const CstContainer = styled(Container)`
        grid-template-columns: 1fr;
`;

const P = styled.p`
        grid-row: 2;
        justify-self: center;
        align-self:center;
        text-align:center;
        width: 50rem;
        height: auto;
        color: transparent;
        text-shadow: 0 0 .5em rgba(0,0,0,.5);
        margin:0;
        padding:1rem;
        ${props => {
        if (props.isInTheViewport) {
            return `
                        color: rgba(0,0,0, 1);
                        text-shadow: 0 0 0 rgba(0,0,0,0);
                        transition: 1s;
                    `
        }
    }}
    
`;

const PlayerWrapper = styled.div`
    grid-row: 3;
    justify-self: center;
    width: 80rem;
    height: 50rem;
`;

export const Fabrication = () => {

    const { data } = useData();
    const [isInTheViewport, setIsInTheViewport] = useState();

    const textContent = data.fabrication.text;
    const url = data.fabrication.video.link;

    return (
        <section id="fabrication">
            <CstContainer>
                <TitleSection>
                    <h1>Fabrication</h1>
                </TitleSection>
                <VizSensor partialVisibility onChange={isVisible => setIsInTheViewport(isVisible)}>
                    <P isInTheViewport={isInTheViewport}>{textContent}</P>
                </VizSensor>
                <PlayerWrapper>
                    <ReactPlayer height='100%' width='100%' url={url} controls={true} muted={true} playing={false} />
                </PlayerWrapper>
            </CstContainer>

        </section >
    )
}
