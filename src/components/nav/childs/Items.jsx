import React from 'react';
import styled from 'styled-components'

const Item = styled.li`
    font-family: 'Roboto', sans-serif;
    list-style: none;
    display: inline;
    margin: 0 1rem 0 1rem;
    position: relative;

    a{
         :after{
            background: none repeat scroll 0 0 transparent;
            bottom:-.5rem;
            content:"";
            height:.1rem;
            left:50%;
            background-color: red;
            position:absolute;
            transition: width .3s ease 0s, left .3s ease 0s;
            width:0;
        }

        :hover:after{
            width: 100%;
            left:0;
        }
    }
`;

export const Items = props => {
    const { link, tag } = props;
    return (<Item><a href={'#' + link}>{tag}</a></Item>)
}
