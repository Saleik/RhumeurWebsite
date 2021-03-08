import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components'
import { motion } from 'framer-motion';

const SocialIcon = styled(motion.div)`
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

    :hover{
        background-color: lightblue;
        transition:.5s;
        li{
             color:black;
            transition: .5s;
        }
    };

    li{
        color: white;
        display: flex;
        letter-spacing:normal;
    };
   
`;

const CstDiv = styled.div`
    display: flex;
    margin-left: auto;
    padding-right: 2rem;
`

export const Social = props => {
    const { socialNetwork } = props;

    return (
        <CstDiv>
            {
                Object.entries(socialNetwork).map((value) => (
                    <SocialIcon whileHover={{ scale: 1.2 }} key={uuidv4()}>
                        <a href={value[1]}><li className={`fab fa-${value[0]}`} /></a>
                    </SocialIcon>
                ))
            }
        </CstDiv>
    )
}
