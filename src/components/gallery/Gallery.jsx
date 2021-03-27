import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { Container } from '../../styles/globalStyles';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { motion } from 'framer-motion';
import { Picture } from './childs/Picture';

//Cst[component name] => custom components
const CstContainer = styled(Container)`
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    padding: 2rem 0;
    width: 100%;
  
`;

const LightBox = styled(motion.div)`
    position: fixed;
    width:100vw;
    height:100vh;
    background-color: rgba(0, 0, 0, 0.9);
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    display:flex;
    align-items:center;
    justify-content:center;
    z-index:5;
`;

/**
 * Gallery
 * @param {pictures} props 
 * @returns 
 */

//TODO: Disable arrow controls to mobile device
export const Gallery = props => {

    const { pictures } = props;

    const [toggle, setToggle] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    //Carousel animate motion settings
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    //toggle lightbox on clicked picture
    const handleClick = (id = 0) => {
        if (toggle) {
            setActiveIndex(0);
        } else {
            setActiveIndex(id)
        }
        setToggle(!toggle);
    };

    //Convert array object to array of html Element for carousel
    const galleryToArray = () => {

        const items = [];
        pictures.forEach(item => {
            items.push(<Picture
                height='60rem'
                width='100rem'
                key={uuidv4()}
                url={item.image}
                alt={item.caption}
                onClick={() => handleClick()}
                forCarousel
                caption={item.texte}
            />)
        });
        return items;
    };

    return (
        <CstContainer>
            {
                pictures.map((picture, index) => (
                    <Picture
                        scale
                        borderRadius='.5rem'
                        width='30rem'
                        height='30rem'
                        key={uuidv4()}
                        url={picture.image}
                        alt={picture.caption}
                        onClick={() => handleClick(index)}
                    />

                ))
            }
            {toggle && (
                <LightBox
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                >
                    <AliceCarousel
                        activeIndex={activeIndex}
                        items={galleryToArray()}
                        touchMoveDefaultEvents
                        disableDotsControls
                    />
                </LightBox>
            )}
        </CstContainer >
    )
}