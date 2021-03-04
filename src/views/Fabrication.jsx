import React from 'react';
import styled from 'styled-components';
import { useData } from '../contexts/dataContext';
import ReactPlayer from 'react-player';

const CstSection = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: min-content;
`

const Title = styled.div`
        justify-self: center;
        font-family:'Roboto', sans-serif;
    `

const Paragraph = styled.div`
        grid-row: 2;
        justify-self: center;
        width: 50rem;
        height: auto;
    `

const PlayerWrapper = styled.div`
        grid-row: 3;
        justify-self: center;
        width: 80rem;
        height:50rem;
    `

export const Fabrication = () => {

    const { data } = useData();

    const textContent = data.fabrication.text;
    const url = data.fabrication.video.link;

    return (
        <CstSection id="fabrication">
            <Title>
                <h1>Fabrication</h1>
            </Title>
            <Paragraph>
                <p>{textContent}</p>
            </Paragraph>
            <PlayerWrapper>
                <ReactPlayer height='100%' width='100%' url={url} muted={true} playing={false} />
            </PlayerWrapper>
        </CstSection>
    )
}
