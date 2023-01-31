// schema

export default {
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string'
        },
        {
            name: 'imageurl',
            title: 'ImgURL',
            type: 'image',
            options: {
                hotspot: true,
                // https://www.sanity.io/docs/presenting-images
            },
        },
        {
            name: 'feedback',
            title: 'Feedback',
            type: 'string'
        },
    ],
}
