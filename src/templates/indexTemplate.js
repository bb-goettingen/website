import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { PostList, PostListNav } from "../components/posts"

export default function Template({ pageContext, data: { allMarkdownRemark: { edges } } }) {
  // If result length is longer than postsPerPage we'll need another page to
  // list posts, and therefore a PostListNav on the first page
  const navRequired = edges.length > pageContext.limit;
  // Because we queried with limit: postsPerPage+1, drop the last element
  if(navRequired) edges.pop();
  return (
    <Layout>
      <SEO title="" />
      <section>
        Das Basisdemokratische Bündnis ist eine Gruppe, in der sich
        Einzelpersonen und diverse Basisgruppen und Fachgruppen zusammengefunden
        haben, um gemeinsam emanzipatorische Politik an der Uni voran zu
        bringen.
      </section>
      <PostList edges={edges} />
      {navRequired &&
        <PostListNav first={true} last={false}
                     currentPageNumber={1} />
      }
    </Layout>
  );
};

// limit should be postsPerPage+1 to check if PostListNav is needed
export const pageQuery = graphql`
  query($limit: Int!) {
    allMarkdownRemark(
        limit: $limit, sort: {fields: frontmatter___date, order: DESC}
        filter: {frontmatter: {draft: {eq: false}}}
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
