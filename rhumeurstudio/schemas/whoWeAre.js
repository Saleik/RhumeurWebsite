/* eslint-disable import/no-anonymous-default-export */
export default {
    name: 'whoWeAre',
    title: 'Qui sommes-nous ? - Membres',
    type: 'document',
    __experimental_actions: ['update', 'create', 'publish'],

    fields: [
        {
            name: 'picture',
            title: 'Photo',
            type: 'image',
            description: 'Photo de présentation, formats(PNG, JPEG, SVG, WEBP) - Poids maximum recommandé = 1MB'
        },
        {
            name: 'firstName',
            title: 'Prénom',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'presentation',
            title: 'Présentation',
            type: 'text',
            description: 'Maximum de 10 lignes  affiché partie l\'accueil.',
            validation: Rule => Rule.required()
        },

    ]
}