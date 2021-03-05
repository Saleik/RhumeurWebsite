/* eslint-disable import/no-anonymous-default-export */
export default {
    name: 'manufacture',
    title: 'Fabrication',
    type: 'document',
    __experimental_actions: ['update', 'publish'],
    fields: [
        {
            name: 'link',
            title: 'Vidéo de fabrication "Rhumeur"',
            type: 'url',
            description: 'Durée maximum recommandée 1min30',
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
            name: 'text',
            title: 'Paragraphe',
            type: 'text',
            description: 'Block de texte, maximum de 10 lignes affiché partie fabrication.',
            validation: Rule => Rule.required()

        }
    ],
}