import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { Container } from '../../styles/globalStyles';
import { Carousel } from './childs/Carousel';
import { Picture } from './childs/Picture';

const CstContainer = styled(Container)`
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    padding: 2rem 0;
    width: 100%;
  
`;
const CarouselWrapper = styled.div`
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

`
export const Gallery = props => {

    const { pictures } = props;
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle);
    }

    return (
        <CstContainer>
            {
                pictures.map(picture => (
                    <Picture scale width='30rem' height='30rem' key={uuidv4()} url={picture.image} alt={picture.caption} onClick={handleClick} />
                ))
            }

            {toggle && (
                <CarouselWrapper>
                    <Carousel>
                        {
                            pictures.map(picture => (
                                <Picture width='100rem' height='60rem' key={uuidv4()} url={picture.image} alt={picture.caption} onClick={handleClick} />
                            ))
                        }
                    </Carousel>
                </CarouselWrapper>
            )
            }
        </CstContainer>
    )
}
