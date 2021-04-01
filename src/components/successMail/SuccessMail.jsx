import React from 'react';
import successEmailSvg from '../../images/mail_sent.svg';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Div = styled.div`
    position: relative;
    width:25rem;
    height:32rem;
    img{
        width: 100%;
        position:absolute;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);
    }
`;

export const SuccessMail = () => {

    const variants = {
        visible: {
            opacity: 1,
            left: '50%',
            transition: { duration: .5 }
        },
        hidden: {
            opacity: 0,
            left: '70%',
        }
    }
    return (
        <Div>
            <motion.img
                initial='hidden'
                animate='visible'
                variants={variants}
                src={successEmailSvg}
                alt='svg mail envoyé'
            />
        </Div>
    )
}
