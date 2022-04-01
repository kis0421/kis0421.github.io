import { CreatePagesArgs } from 'gatsby';
import path from "path";


export async function createPages({ actions, graphql }: CreatePagesArgs) {

  const { data, errors }: { data?: any, errors?: any } = await graphql(`
    {
        allMarkdownRemark {
            edges {
                node {
                    html
                    frontmatter {
                        title
                    }
                }
            }
        }
    }
`);

  if (errors) {
    throw errors;
  }

  const { createPage } = actions;
  data?.allMarkdownRemark.edges.forEach(({ node }: any) => {

    createPage({
      path: node.frontmatter.title,
      context: {
        html: node.html,
        title: node.frontmatter.title,
      },
      component: path.resolve(__dirname, '../templates/PostTemplate.tsx'),
    });
  });

}