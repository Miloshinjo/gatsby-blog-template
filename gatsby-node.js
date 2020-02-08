const path = require('path');

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md');

    createNodeField({
      node,
      name: 'slug',
      value: slug
    });
  }
};

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve('./src/templates/blog-post/index.js');

  const response = await graphql(`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const posts = response.data.allMarkdownRemark.edges;

  response.data.allMarkdownRemark.edges.forEach(({ node }, index) => {
    const next = index === 0 ? false : posts[index - 1].node;
    const prev = index === posts.length - 1 ? false : posts[index + 1].node;
    createPage({
      component: blogPostTemplate,
      path: `blog/${node.fields.slug}`,
      context: {
        slug: node.fields.slug,
        prev,
        next
      }
    });
  });
};
