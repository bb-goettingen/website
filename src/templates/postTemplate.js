import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo"
import { meta } from "../components/posts.js"

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <h1>
        {frontmatter.title}
      </h1>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
      <span>{meta(frontmatter)}</span>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        author
        bg
        title
        date(formatString: "DD.MM.YYYY")
        draft
      }
    }
  }
`;
