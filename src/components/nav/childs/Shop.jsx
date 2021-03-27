import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Div = styled.div`
    grid-column: 3;
    grid-row:1;
    align-self:center;
    i{
        color: rgba(0, 0, 0);
        font-size: 2rem;
    };
`;

export const Shop = props => {
    //TODO: add eshop text to right of the icon
    const { url } = props;
    return (
        <Div>
            <a href={url}>
                <motion.i
                    whileHover={{
                        scale: 1.2,
                        color: 'rgba(173, 216, 230)',
                        transition: { duration: .3 }
                    }}
                    whileTap={{ scale: .9 }}
                    className="fas fa-store"
                />
            </a>
        </Div>

    )
}
