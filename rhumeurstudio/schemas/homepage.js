/* eslint-disable import/no-anonymous-default-export */
export default {
    name: 'homepage',
    title: 'Accueil',
    type: 'document',
    __experimental_actions: ['update', 'publish'],
    fields: [{
            name: 'background',
            title: 'Arrière-plan',
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
            description: '(Important pour le SEO)'
        },
        {
            name: 'text',
            title: 'Introduction',
            type: 'text',
            description: 'Block de texte, maximum de 10 lignes ',
            validation: Rule => Rule.required()

        }
    ],
}