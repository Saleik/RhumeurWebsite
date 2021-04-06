import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';


const Card = styled(motion.div)`
        display: flex;
        width: 60rem;
        ${props => {
        if (props.index === 0) {
            return `
                margin-left: -30rem;            
            `
        } else {
            return `
                margin-right: -30rem;
            `
        }
    }};
`;

const CardBody = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;

    h3{
        margin:0;
    }

    @media screen and (max-width: 1024px){
        h3{
            font-size: 1.5rem;
        }

        p{
            font-size: 1.3rem;
        }
            

    }
`;

const Thumbnails = styled.img`
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    box-shadow: -.4rem .4rem .5rem lightgray ;
    padding: 1rem;
`;

/**
 * Card member corporation
 * @param {name, pic, children, index} props 
 * @returns 
 */
export const CardMember = props => {

    const { name, pic, children, index } = props;

    //Motion animation settings
    const leftCardVariant = {
        hidden: {
            opacity: 0,
            x: '150%'
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: .5,
                delay: .3,
                type: 'tween'
            }
        },

    };

    const rightCardVariant = {
        hidden: {
            opacity: 0,
            x: '-150%'
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: .5,
                delay: .3,
                type: 'tween'
            }
        },

    }
    return (
        <Card
            index={index}
            initial='hidden'
            animate='visible'
            variants={index > 0 ? rightCardVariant : leftCardVariant}
        >
            <Thumbnails width='320px' height='320px' loading='lazy' src={pic + '?fm=webp'} />
            <CardBody>
                <h3>{name}</h3>
                <p>{children}</p>
            </CardBody>
        </Card>
    )
}