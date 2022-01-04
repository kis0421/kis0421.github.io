import React from "react";
import Layout from "../components/layout"

const PostTemplate: React.FC = (props) => {
  console.log(props)
  return (<Layout>
    <div dangerouslySetInnerHTML={{ __html: props.pageContext.html }}></div>

  </Layout>)
}
export default React.memo(PostTemplate);