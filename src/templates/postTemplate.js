import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo"
import { meta } from "../components/posts.js"

import "./postTemplate.scss"

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <h1 className="post-heading">
        {frontmatter.title}
      </h1>
      <div className="post-content" dangerouslySetInnerHTML={{ __html: html }}></div>
      <span className="post-meta">{meta(frontmatter)}</span>
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
        authorExtra
        title
        date(formatString: "DD.MM.YYYY")
        draft
      }
    }
  }
`;
