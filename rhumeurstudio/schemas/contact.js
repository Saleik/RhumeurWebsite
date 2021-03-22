/* eslint-disable import/no-anonymous-default-export */
export default {
    name: 'contact',
    title: 'Contact - Informations',
    type: 'document',
    __experimental_options: ['create', 'update', 'publish'],
    fields: [
        {
            name: 'phoneNumber',
            title: 'Téléphone',
            type: 'string',
            description: 'Format: 00 00 00 00 00',
            validation: Rule => Rule.required()

        },
        {
            name: 'address',
            title: 'Adresse boutique',
            type: 'string',
            validation: Rule => Rule.required()

        },
    ]
}