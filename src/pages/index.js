import * as React from "react"
import { graphql, Link } from "gatsby"

const IndexPage = ({ data }) => {
  return (
    <div
      style={{
        fontFamily: "Helvetica, sans-serif",
        margin: "auto",
        maxWidth: "550px",
        padding: "1rem 2rem",
      }}
    >
      <main>
        <title>My Personal Blog</title>
        <h1 style={{ color: "rebeccapurple" }}>My Blog Posts</h1>
        <ul
          style={{
            padding: 0,
            marginTop: "3rem",
          }}
        >
          {data.allMarkdownRemark.nodes.map((post) => (
            <li
              style={{
                listStyle: "none",
              }}
            >
              <Link to={post.slug} style={{ color: "black" }}>
                <h2>{post.frontmatter.title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <footer>
        <Link to="/rss.xml" style={{ marginTop: "2rem" }}>
          RSS feed
        </Link>
      </footer>
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: ASC}) {
      nodes {
        frontmatter {
          title
        }
        html
        slug: gatsbyPath(filePath: "/{MarkdownRemark.frontmatter__title}")
      }
    }
  }
`

export default IndexPage
