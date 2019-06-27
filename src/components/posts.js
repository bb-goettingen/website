import React from "react"
import { Link } from "gatsby"

import DotDivider from "./uiElements.js"

import "./posts.scss"

const PostShort = ({ node }) => {
  const { frontmatter } = node;
  let image;
  if(frontmatter.image && frontmatter.image !== "") {
    image = <div className="post-short-image" style={{ backgroundImage: `url(${frontmatter.image})` }} />;
  }
  return (
    <Link to={frontmatter.path}>
      <section className="post-short">
        <div className="post-short-content">
          <h2 className="post-short-heading">{frontmatter.title}</h2>
          <p className="post-short-summary">{frontmatter.summary}</p>
          <span className="post-short-meta">
            {generateMetaString(frontmatter)}
          </span>
        </div>
        {image}
      </section>
    </Link>
  );
};

export function generateMetaString(fm) {
  return (
    <>
      {fm.date} <DotDivider /> {fm.author}
      {fm.authorExtra && fm.authorExtra !== "" ? " (" + fm.authorExtra + ")" : ""}
    </>
  );
}

const PostList = ({ edges }) => {
  const posts = edges.filter(edge => !edge.node.frontmatter.draft)
                     .map(edge => <PostShort node={edge.node}/>)
  return (
    // Insert hr between elements
    <div className="posts-container">
      {[...posts].map((e, i) => i < posts.length-1 ? [e, <hr className="posts-hr" />] : [e])
                 .reduce((a, b) => a.concat(b))}
    </div>
  );
};

export default PostList;
