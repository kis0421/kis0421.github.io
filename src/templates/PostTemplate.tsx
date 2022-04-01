import React, { useEffect } from "react";
import Prism from "prismjs";
import Layout from "../components/layout"


const PostTemplate: React.FC = (props) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (<Layout>
    <div dangerouslySetInnerHTML={{ __html: props.pageContext.html }}></div>
  </Layout>)
}
export default React.memo(PostTemplate);