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
    <h1>Hi people~</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>


    {data.allMarkdownRemark.edges.map(({ node }) => {

      return <div key={node.id}>
        <h2>{node.frontmatter.title}</h2>
        <p>{node.excerpt}</p>
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
