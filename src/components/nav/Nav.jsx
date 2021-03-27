import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { Items } from "./childs/Items";
import { Social } from './childs/Social';
import { Brand } from './childs/Brand';
import { useData } from '../../hooks/dataContext';
import { Shop } from './childs/Shop';
import { useEffect, useState } from 'react';
import { Burger } from './childs/Burger';

//TODO: nav not responsive && clipping during transition to fixed

const Navbar = styled.div`
    display:grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 5rem;
    width:100%;
    border-bottom: .1rem solid lightgrey;
    z-index:1;
    background-color: white;
    ${props => {
        if (!props.fixed) {
            return `
                position: fixed;    
            `
        }
    }};
    nav{
        grid-column: 2;
        align-self:center;
        position: relative;
        justify-self:center;
        ul{
            display: flex;
        }

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
    const [positionFixed, setPositionFixed] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            if (window.pageYOffset === 0) {
                setPositionFixed(true);
            } else {
                setPositionFixed(false);
            }
        }

    }, []);

    return (
        <Navbar fixed={positionFixed}>
            <Brand src={url} alt={alt} />
            <Burger />
            <nav>
                <ul>
                    {
                        Object.entries(items).map(obj => (<Items key={uuidv4()} link={obj[1]} tag={obj[0]} />))
                    }
                </ul>
            </nav>

            <Shop url={eshopLink} />
            <Social socialNetwork={{ 'facebook-f': facebookLink, 'instagram': instagramLink }} />
        </Navbar>

    )
}

