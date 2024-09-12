require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    { /* Gatsby Plugin Manifest */
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon-logo.png`, // This path is relative to the root of the site.
      },
    },
    {/*Gatsby Plugin Contentful*/
      resolve:`gatsby-source-contentful`,
      options:{
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
        downloadLocal: false,
      }
    },
    {/*Gatsby Shopify Plugin*/ 
      resolve:`gatsby-source-shopify`,
      options: {
        password: process.env.SHOPIFY_ADMIN_ACCESS_TOKEN,
        storeUrl: process.env.SHOPIFY_STORE_URL,
        shopifyConnections:['orders','collections','locations'],
      }
    },
    {/* React Svg Plugin*/
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets/
        }
      }
    }
  ],
}
