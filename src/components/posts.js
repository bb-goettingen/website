import React from "react"
import { Link } from "gatsby"

import "./posts.scss"

const PostShort = ({ node }) => {
  const { excerpt, frontmatter } = node;
  // /\n+(?!#)/g : match new lines unless followed by a heading (#)
  const excerptLines = excerpt.trim()
                              .replace(/\n+(?!#)/g, "\n")
                              .split("\n")
                              .map(line => <>{line}<br /></>);
  return (
    <section className="post-short">
      <Link to={frontmatter.path}>
        <h2 className="post-short-heading">{frontmatter.title}</h2>
      </Link>
      <p className="post-short-excerpt">{excerptLines}</p>
      <span className="post-short-meta">
        {meta(frontmatter)}
      </span>
    </section>
  );
};

export function meta(fm) {
  return (
    <>
      Posted on {fm.date} by {fm.author}
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
