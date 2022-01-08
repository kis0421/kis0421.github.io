import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          id
          excerpt(truncate: true, pruneLength: 200)
          frontmatter {
            title
            contentsType
            date
          }
        }
      }
    }
  }
 `);
  return <Layout>
    <Seo title="Home" />
    {data.allMarkdownRemark.edges.map(({ node }) => {

      return <div key={node.id}>
        <h3>
          <Link className="linkDefault" to={node.frontmatter.title}>{node.frontmatter.title}</Link>
        </h3>
        <p className="excerptLink" style={{ marginBottom: "8px" }}>
          <Link className="linkDefault" to={node.frontmatter.title}>{node.excerpt}</Link>
        </p>
        <div style={{ color: "#ababab" }}>{node.frontmatter.date}</div>
        <hr />
      </div>
    })}

    {/* 
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p> */}
  </Layout>
}

export default IndexPage
