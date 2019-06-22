import React from "react"
import { Link } from "gatsby"

import "./posts.scss"

const PostShort = ({ node }) => {
  const { excerpt, frontmatter: fm } = node;
  // /\n+(?!#)/g : match new lines unless followed by a heading (#)
  const excerptLines = excerpt.trim()
                              .replace(/\n+(?!#)/g, "\n")
                              .split("\n")
                              .map(line => <>{line}<br /></>);
  return (
    <section className="post-short">
      <Link to={fm.path}>
        <h2 className="post-short-heading">{fm.title}</h2>
      </Link>
      <p className="post-short-excerpt">{excerptLines}</p>
      <span className="post-short-meta">
        Posted on {fm.date} by {fm.author}
        {fm.bg && fm.bg !== "" ? " (" + fm.bg + ")" : ""}
      </span>
    </section>
  );
};

const PostList = ({ edges }) => {
  const Posts = edges.filter(edge => !edge.node.frontmatter.draft)
                     .map(edge => <PostShort node={edge.node}/>)
  return (
    <div className="posts-container">
      {Posts}
    </div>
  );
};

export default PostList;
