import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import PostShort from "../components/posts.js"

const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => {
  const Posts = edges.filter(edge => !edge.node.frontmatter.draft)
                     .map(edge => <PostShort node={edge.node}/>)
  return (
    <Layout>
      <SEO title="Home" />
      <section>
        Das Basisdemokratische Bündnis ist eine Gruppe, in der sich
        Einzelpersonen und diverse Basisgruppen und Fachgruppen zusammengefunden
        haben, um gemeinsam emanzipatorische Politik an der Uni voran zu
        bringen.
      </section>
      <div>
        {Posts}
      </div>
    </Layout>
  );
};

export const postQueryAll = graphql`
  query {
    allMarkdownRemark(limit: 10, sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          excerpt(format: MARKDOWN, pruneLength: 100)
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
    }
  }
`;

export default IndexPage;
