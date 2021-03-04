/* eslint-disable import/no-anonymous-default-export */
export default {
    name: 'menu',
    title: 'Menu',
    type: 'document',
    __experimental_actions: ['update', 'publish'],
    fields: [
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
            description: 'Formats(PNG, JPEG, SVG, WEBP)',
            options: {
                accept: ['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml']
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'caption',
            title: 'Légende',
            type: 'string',
            description: '(Important pour le SEO)',
            validation: Rule => Rule.required()
        },
        {
            name: 'eshopLink',
            title: 'Lien site de vente',
            type: 'url',
            validation: Rule => Rule.required()
        },
        {
            name: 'facebook',
            title: 'Lien Facebook',
            type: 'url',
            validation: Rule => Rule.required()
        },
        {
            name: 'instagram',
            title: 'Lien Instagram',
            type: 'url',
            validation: Rule => Rule.required()
        },

    ],
}