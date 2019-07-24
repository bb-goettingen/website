import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { PostList, PostListNav } from "../components/posts";

export default function Template({ pageContext, data: { allMarkdownRemark: { edges } } }) {
  return (
    <Layout>
      <SEO title={"Posts Page " + pageContext.currentPageNumber} />
      <PostList edges={edges} />
      <PostListNav first={pageContext.first}
                   last={pageContext.last}
                   currentPageNumber={pageContext.currentPageNumber} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
        sort: {fields: frontmatter___date, order: DESC}
        filter: {frontmatter: {draft: {eq: false}}}
        limit: $limit
        skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            path
            author
            authorExtra
            title
            summary
            date(formatString: "DD.MM.YYYY")
            draft
            image
          }
        }
      }
    }
  }
`;
