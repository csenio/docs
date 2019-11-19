const path = require("path");

module.exports = {
  siteMetadata: {
    title: "Ams docs",
    description:
      "Documentation of default components and best practices we employ at storyofams",
    author: "@jescowuester"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: path.resolve("./src/components/template.js")
        }
      }
    },
    "gatsby-plugin-react-helmet",
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
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "ams docs",
        short_name: "docs",
        start_url: "/",
        background_color: "#111",
        theme_color: "#111",
        display: "minimal-ui",
        icon: "src/images/gatsby-icon.png" // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true
      }
    },
    "gatsby-plugin-offline"
  ]
};
