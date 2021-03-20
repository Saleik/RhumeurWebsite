import React from 'react'
import { Input } from './childs/Input';

export const ContactForm = props => {
    const { className } = props;

    return (
        <form className={className}>
            <div>
                <Input type="text" name="Nom" />
            </div>
        </form>

    )
}
