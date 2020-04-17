// let env = process.env.NODE_ENV || 'development';

// require('dotenv').config({path: `./.env.${env}`});

require("dotenv").config({ path: "./.env.production" });

module.exports = {
  siteMetadata: {
    title: `Are productions`,
    description: `Based in Stockholm, Are Productions make awesome, boundary-pushing films with a special twist on branding and storytelling.`,
    author: `@gatsbyjs`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
        preview: true,
        disableLiveReload: false
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `are-productions`,
        short_name: `are`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
