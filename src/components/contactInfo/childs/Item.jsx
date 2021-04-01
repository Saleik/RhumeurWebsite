import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Div = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
    padding:1rem;
    
    i{
        padding: 1rem;
        font-size:1.5rem;
    }

    span{
        font-weight: bold;
    }

    @media screen and (max-width: 1024px){
        
        i, span{
            font-size: 2rem;
        }
    }
`;
export const Item = props => {

    const { icon, coordinate } = props;

    return (
        <Div>
            {icon === 'address' ? (
                <>
                    <i className={`fas fa-map-marker-alt`} />
                    <span>{coordinate}</span>
                </>
            ) : (
                <motion.a
                    whileHover={{
                        scale: 1.1,
                        color: 'rgba(173, 216, 230)',
                        transition: { duration: .5 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    href={icon === 'phone' ? `tel:${coordinate}` : coordinate}>
                    <i className={`fas fa-${icon === 'phone' ? 'phone-alt' : 'store'}`} />
                    <span>
                        {
                            icon === 'eshop' ? 'Site de vente en ligne Rhumeur' : coordinate
                        }
                    </span>
                </motion.a>
            )}


        </Div>
    )
}
