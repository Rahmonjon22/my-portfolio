import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: process.env.REACT_APP_SANITY_PRODUCTIONID,
    dataset:"production",
    apiVersion:"2023-02-04",
    usecdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN
});   
// this is where I connect frontend info to backend sanity
// https://www.sanity.io/manage/personal/project/70twhevl
//  sanity manage 
// can create the project id and token

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source);