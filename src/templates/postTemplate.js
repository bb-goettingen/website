import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo"
import { generateMetaString } from "../components/posts.js"

import "./postTemplate.scss"

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  let meta = "";
  if(frontmatter.draft) {
    meta = <meta name="robots" content="noindex" />;
  }

  return (
    <Layout>
      <Helmet>
        {meta}
      </Helmet>
      <SEO title={frontmatter.title} />
      <h1 className="post-heading">
        {frontmatter.title}
      </h1>
      <span className="post-summary">{frontmatter.summary}</span>
      <div className="post-content" dangerouslySetInnerHTML={{ __html: html }}></div>
      <span className="post-meta">{generateMetaString(frontmatter)}</span>
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
        summary
        date(formatString: "DD.MM.YYYY")
        draft
      }
    }
  }
`;
