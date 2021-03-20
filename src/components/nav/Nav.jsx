import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { Items } from "./childs/Items";
import { Social } from './childs/Social';
import { Brand } from './childs/Brand';
import { useData } from '../../contexts/dataContext';
import { Shop } from './childs/Shop';
import { useEffect, useState } from 'react';

//TODO: nav not responsive && clipping during transition to fixed

const Navbar = styled.nav`
    ${props => {
        if (!props.fixed) {
            return `
            position: fixed;    
        `
        }
    }};
    display: flex;
    align-items: center;
    justify-content:center;
    height:4rem;
    width: 100%;
    border-bottom: 1px solid lightgrey;
    z-index:1;
    background-color: white;
    ul{
         text-align: center;
        width: 100%;
        margin: 0 auto;
    }
    `;

export const Nav = props => {
    const { items } = props;
    const { data } = useData();

    //logo data
    const url = data.menu.logo.url;
    const alt = data.menu.logo.alt;

    //ecommerce Rhumeur website url
    const eshopLink = data.menu.eshopLink;

    //social-media url
    const facebookLink = data.menu.socialMedia.facebook;
    const instagramLink = data.menu.socialMedia.instagram;

    //menu postion fixed on scroll
    const [positionToFixed, setPositionToFixed] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            if (window.pageYOffset === 0) {
                setPositionToFixed(true);
            } else {
                setPositionToFixed(false);
            }
        }
    }, []);

    return (
        <Navbar fixed={positionToFixed}>
            <Brand src={url} alt={alt} />
            <ul>
                {
                    Object.entries(items).map(obj => (<Items key={uuidv4()} link={obj[1]} tag={obj[0]} />))
                }
            </ul>
            <Shop url={eshopLink} />
            <Social socialNetwork={{ 'facebook-f': facebookLink, 'instagram': instagramLink }} />
        </Navbar>
    )
}

