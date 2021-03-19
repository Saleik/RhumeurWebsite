/* eslint-disable import/no-anonymous-default-export */
export default {
    name: 'productIntroduce',
    title: 'Best Sellers - Introduction',
    type: 'document',
    __experimental_actions: ['update', 'publish'],
    fields: [
        {
            name: 'text',
            title: 'Introduction',
            type: 'text',
            description: 'Block de texte, maximum de 10 lignes',
            validation: Rule => Rule.required()

        }
    ],
}