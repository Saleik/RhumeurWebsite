import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components'

const SocialIcon = styled.div`
    list-style: none;
    display: flex;
    margin-left: .25rem;
    border-radius: 50%;
    width:2rem;
    height: 2rem;
    align-items: center;
    justify-content: center;
    background-color: lightgray;
    font-size: 1.2rem;
    margin-right: .5rem;
    ${props => {
        if (props.hover) {
            return `
                :hover{
                    background-color: lightblue;
                    transition:.5s;
                    ${CstI}{
                        color:black;
                        transition: .5s;
                    }
                }
            `
        }
    }}
`;

const CstDiv = styled.div`
    display: flex;
    margin-left: auto;
    padding-right: 2rem;
`
const CstI = styled.i`
        color: white;
        display: flex;
        letter-spacing:normal;
    `
export const Social = props => {
    const { socialNetwork } = props;
    const [hover, setHover] = useState(false);

    return (
        <CstDiv>
            {
                Object.entries(socialNetwork).map((value) => (
                    <SocialIcon onMouseLeave={() => setHover(false)} onMouseEnter={() => setHover(true)} hover={hover} key={uuidv4()}>
                        <a href={value[1]}><CstI className={`fab fa-${value[0]}`} /></a>
                    </SocialIcon>
                ))
            }
        </CstDiv>
    )
}
