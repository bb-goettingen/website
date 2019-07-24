/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");

const { siteMetadata } = require("./gatsby-config.js");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve("./src/templates/postTemplate.js");
  const postListTemplate = path.resolve("./src/templates/postListTemplate.js");
  const indexTemplate = path.resolve("./src/templates/indexTemplate.js");

  return graphql(`
    query {
      allMarkdownRemark(
          sort: {fields: frontmatter___date, order: DESC}
          filter: {frontmatter: {draft: {eq: false}}}
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if(result.errors) {
      return Promise.reject(result.errors);
    }

    createPage({
      path: "/",
      component: indexTemplate,
      context: {
        // postsPerPage+1 to check if PostListNav is needed
        limit: siteMetadata.postsPerPage + 1
      }
    });

    return result.data.allMarkdownRemark.edges.forEach(({ node }, index, array) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
        context: {}
      });

      const { postsPerPage } = siteMetadata;
      // The first page is the index page so skip it here
      if((index % postsPerPage) === 0 && index >= postsPerPage) {
        let currentPageIndex = index/postsPerPage;
        let first = false;
        let last = false;
        if(index === 0) first = true;
        if(currentPageIndex === Math.floor(array.length/postsPerPage)-1) last = true;
        createPage({
          path: "posts-" + (currentPageIndex),
          component: postListTemplate,
          context: {
            limit: postsPerPage,
            skip: index,
            first: first,
            last: last,
            currentPageNumber: currentPageIndex
          }
        });
      }
    });
  });
}
