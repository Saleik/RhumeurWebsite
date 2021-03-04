import sanityClient from '@sanity/client'

//set sanityClient info to connect sanity studio
export default sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: process.env.REACT_APP_SANITY_DATASET,
    useCdn: true
});