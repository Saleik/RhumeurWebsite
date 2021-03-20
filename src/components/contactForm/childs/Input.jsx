import React from 'react';

export const Input = props => {

    const { type, name } = props;
    return (
        <>
            <label htmlFor="name">{name}</label>
            <input type={type} name={name} id={name} required />
        </>
    )
}
