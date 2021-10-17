require('dotenv').config();

module.exports = {
    siteMetadata: {
        siteUrl: 'https://fmacedoo.github.io/resume/',
        title: 'resume-v2',
    },
    plugins: [
        {
            resolve: 'gatsby-source-contentful',
            options: {
                accessToken: process.env.CONTENTFUL_ACCESSTOKEN,
                spaceId: 'vb9n6v0rkykx',
            },
        },
        'gatsby-plugin-styled-components',
        'gatsby-plugin-react-helmet',
    ],
};
