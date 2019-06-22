import React from "react"
import { Link } from "gatsby"

const PostShort = ({ node }) => {
  const { excerpt, frontmatter: fm } = node;
  // /\n+(?!#)/g : match new lines unless followed by a heading (#)
  const excerptLines = excerpt.trim()
                              .replace(/\n+(?!#)/g, "\n")
                              .split("\n")
                              .map(line => <>{line}<br /></>);
  return (
    <section>
      <h2>{fm.title}</h2>
      <p>{excerptLines}</p>
      <span>
        Posted on {fm.date} by {fm.author}
        {fm.bg && fm.bg !== "" ? " (" + fm.bg + ")" : ""}
      </span>
    </section>
  );
};

export default PostShort;
