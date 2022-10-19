module.exports = {
  siteMetadata: {
    // title: "my-personal-blog",
    // siteUrl: "http://localhost:9000",
    // image: `/bb.png`,
    // description:
    //   "An example Gatsby blog with an automatically generated RSS feed.",

    title: `Test RSS feed Website`,
    siteUrl: `https://darling-macaron-5b8921.netlify.app`,
    description: `The personal website for Megan Sullivan, a software developer and educator.`,
    image: `images/bb1.png`,
    // image_url: `https://brainsandbeards.com/bb.png`,
    // favicon: `images/favicon.png`
  },
  plugins: [
    {
      resolve: "gatsby-plugin-feed",
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            title: "Testing RSS Feed",
            output: "rss.xml",
            // image_url: `https://brainsandbeards.com/bb.png`,
            query: `
            {
              allMarkdownRemark(sort: {fields: frontmatter___date, order: ASC}) {
                nodes {
                  frontmatter {
                    title
                    date
                    description
                  }
                  html
                  slug: gatsbyPath(filePath: "/{MarkdownRemark.frontmatter__title}")
                }
              }
            }
            `,
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  url: `${site.siteMetadata.siteUrl}${node.slug}`,
                  guid: `${site.siteMetadata.siteUrl}${node.slug}`,
                })
              })
            },
          }
        ]
      }
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: "./src/blog/",
      },
      __key: "blog",
    },
  ],
};
