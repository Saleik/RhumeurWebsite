/* eslint-disable import/no-anonymous-default-export */
export default {
    name: 'gallery',
    title: 'Qui sommes-nous ? - Galerie Photo',
    type: 'document',
    __experimental_actions: ['create', 'update', 'publish'],
    fields: [
        {
            name: 'image',
            title: 'Photo',
            type: 'image',
            description: 'Formats(PNG, JPEG, SVG, WEBP) - Poids maximum recommandé = 1MB',
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
            name: 'texte',
            title: 'Texte',
            type: 'text',
            description: 'Texte positionné sous la photo - 5 lignes maximum',
            validation: Rule => Rule.required()
        },
    ]
}