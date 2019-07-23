import React from "react"
import { Link } from "gatsby"

import { DotDivider, LineDivider, PreviousPageButton, NextPageButton } from "./uiElements.js"

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

export const PostList = ({ edges }) => {
  const posts = edges.map(edge => <PostShort node={edge.node}/>)
  return (
    // Insert hr between elements
    <div className="posts-container">
      {[...posts].map((e, i) => i < posts.length-1 ? [e, <hr className="posts-hr" />] : [e])
                 .reduce((a, b) => a.concat(b))}
    </div>
  );
};

export const PostListNav = ({ first, last, currentPageNumber }) => {
  let content = [];
  if(!first) {
    let href;
    if(currentPageNumber === 2) {
      href = "/";
    } else {
      href = "posts-" + (currentPageNumber - 1);
    }
    content.push(<PreviousPageButton href={href}/>);
  }
  if(!last) {
    if(!first) {
      content.push(<LineDivider />);
    }
    content.push(<NextPageButton href={"posts-" + (currentPageNumber + 1)}/>);
  }

  return (
    <nav className="posts-navigation">
      {content}
    </nav>
  );
}

