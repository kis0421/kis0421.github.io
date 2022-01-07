import * as React from "react"
import { Link, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// import { latestPostList } from "../lib/getPages"

import Layout from "../components/layout"
import Seo from "../components/seo"

/*
TODO: 메인페이지 글 리스트 불러오기
 allFile(filter: {extension: {eq: "md"}}) {
    edges {
      node {
        name
        extension
        birthTime
        dir
        childrenMarkdownRemark {
          frontmatter {
            title
          }
        }
      }
    }
  }
*/
const IndexPage = () => {
  // const data = useStaticQuery(latestPostList);
  // console.log(data)
  return <Layout>
    <Seo title="Home" />
    <h1>Hi people~</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
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
