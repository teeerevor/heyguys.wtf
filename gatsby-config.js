module.exports = {
    siteMetadata: {
        title: `HeyGuys.wtf`,
        description: `Guys? Really? Take two seconds and sub in another word. It's really not that hard`,
        author: `Trev Wolf`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/heyguyswtf-icon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: 'gatsby-plugin-segment',
            options: {
                writeKey: 'MFI7gpuMcZpODyAaIaxexpcgm6flF4pd',
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.app/offline
        // 'gatsby-plugin-offline',
    ],
};
