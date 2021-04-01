import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { Items } from "./childs/Items";
import { Social } from './childs/Social';
import { Brand } from './childs/Brand';
import { useData } from '../../hooks/dataContext';
import { Shop } from './childs/Shop';
import { useEffect, useState } from 'react';
import { Burger } from './childs/Burger';

//TODO: Close nav onClick to tag section

const Navbar = styled.div`
    display:grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: min-content;
    width:100%;
    border-bottom: .1rem solid lightgrey;
    z-index:90;
    background-color: white;
    ${props => {
        if (!props.fixed) {
            return `
                position: fixed;    
            `
        }
    }}
    nav{
        grid-column: 2;
        align-self:center;
        position: relative;
        justify-self:center;

        ul{
            display: flex;
        }

        @media screen and (max-width: 1024px){
            text-align: center;
            transition: opacity 1s, height .5s;
            ${props => {
        if (props.toggle) {
            return `
                        opacity: 1;
                        height: 25rem;
                        `
        } else {
            return `
                        opacity: 0;
                        height: 0;
                        overflow: hidden;
                        `
        }

    }}
            ul{
                flex-direction: column;
                padding:0;
                margin:0;
                font-size: 2rem;
            }
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
    const [toggle, setToggle] = useState(false);

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
        <Navbar fixed={positionFixed} toggle={toggle}>
            <Brand src={url} alt={alt} />
            <Burger onClick={setToggle} toggle={toggle} />
            <nav>
                <ul>
                    {
                        Object.entries(items).map(obj => (<Items key={uuidv4()} onClick={setToggle} toggle={toggle} link={obj[1]} tag={obj[0]} />))
                    }
                </ul>
            </nav>

            <Shop url={eshopLink} />
            <Social socialNetwork={{ 'facebook-f': facebookLink, 'instagram': instagramLink }} />
        </Navbar>

    )
}

