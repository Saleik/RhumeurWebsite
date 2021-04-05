/* eslint-disable import/no-anonymous-default-export */
export default {
    name: 'whoWeAreIntroduce',
    title: 'Qui sommes-nous ? - Introduction',
    type: 'document',
    __experimental_actions: ['update', 'publish'],

    fields: [
        {
            name: 'text',
            title: 'Introduction',
            type: 'text',
            description: 'Maximum de 10 lignes  affiché partie',
            validation: Rule => Rule.required()
        },

    ]
}