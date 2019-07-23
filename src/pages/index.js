import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { PostList, PostListNav } from "../components/posts.js"

const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => {
  let postsPerPage = 10
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
      {edges.length > postsPerPage &&
        <PostListNav first={true} last={false}
                     currentPageNumber={1} />
      }
    </Layout>
  );
};

// limit should be postsPerPage+1 to check if PostListNav is needed
export const postQueryAll = graphql`
  query {
    allMarkdownRemark(
        limit: 11, sort: {fields: frontmatter___date, order: DESC}
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

export default IndexPage;
