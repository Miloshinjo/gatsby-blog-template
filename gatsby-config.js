module.exports = {
  siteMetadata: {
    title: `[YOUR NAME]`,
    description: `[YOUR WEBSITE DESC]`,
    author: `[YOUR TWITTER HANDLE OR SMTH ELSE]`,
    siteUrl: `[YOUR WEBSITE URL]`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 400,
              linkImagesToOriginal: false
            }
          },
          `gatsby-remark-prismjs`
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        theme_color: `#1b242f`,
        background_color: `#1b242f`,
        icon: `src/images/favicon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [`UA-152054235-1`],
        head: true,
        anonymize: true
      },
      gtagConfig: {
        anonymize_ip: true
      },
      pluginConfig: {
        head: true,
        exclude: ['/preview/**', '/do-not-track/me/too/']
      }
    },
    `gatsby-plugin-sitemap`
  ]
};
