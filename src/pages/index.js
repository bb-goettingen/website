import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import PostList from "../components/posts.js"

const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => (
  <Layout>
    <SEO title="Home" />
    <section>
      Das Basisdemokratische Bündnis ist eine Gruppe, in der sich
      Einzelpersonen und diverse Basisgruppen und Fachgruppen zusammengefunden
      haben, um gemeinsam emanzipatorische Politik an der Uni voran zu
      bringen.
    </section>
    <PostList edges={edges} />
  </Layout>
);

export const postQueryAll = graphql`
  query {
    allMarkdownRemark(limit: 10, sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          excerpt(format: MARKDOWN, pruneLength: 200)
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
    }
  }
`;

export default IndexPage;
