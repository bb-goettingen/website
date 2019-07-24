# Contributing to the BB-Goettingen Website

The website is written in JavaScript using [Gatsby](https://www.gatsbyjs.org/)
(which is based on [React](https://reactjs.org/)).

## Suggestions and Issues

If you want to create an issue or make a suggestion you can use the
[repository's issues page.](https://github.com/bb-goettingen/website/issues)

## Prerequisites

* Git
* JavaScript (ECMAScript 2015)
* HTML/XML/JSX
* CSS and Sass, only necessary if you want to make changes to the style
* React
* Gatsby

## Branches

* **master**
  Protected (can't be pushed to directly). Everything on here is automatically
  built and then deployed on the *gh-pages* branch by the CI server.
* **develop**
  General branch for development.
* **posts-...**
  Used for making changes to the `src/posts/` directory. A test on this branch
  is automatically run by the CI server to make sure no files in other
  directories were changed.
* **gh-pages**
  As explained above.

## Building

To install all dependencies run `npm install` somewhere in the directory.

Use `npm run develop` to start the development server (by default on
`localhost:8000`).
The development server will build the website and then automatically reload any
changes made to the source files.

Use `npm run build` to build the website and `npm run serve` to start a server
(by default on `localhost:9000`).

## Directory Structure

```
.
├── src
│   ├── components
│   ├── images
│   ├── pages
│   ├── posts
│   └── templates
├── gatsby-config.js
├── gatsby-node.js
└── package.json
```

file                | Description
--------------------|-----------------------------------------------------------
`package.json`      | npm package configuration, see [docs](https://docs.npmjs.com/files/package.json)
`gatsby-config.js`  | Gatsby configuration, see [docs](https://www.gatsbyjs.org/docs/gatsby-config/)
`gatsby-node.js`    | See [docs](https://www.gatsbyjs.org/docs/node-apis/)
`src/components`    | React components and their stylesheets are in this directory
`src/images`        | self-describing
`src/pages`         | Static pages
`src/posts`         | Markdown files from which static pages are generated
`src/templates`     | Templates for generating static pages

## Style Guide

### Code

Try to keep to the same style, at least within a file.

If you need to use a language other than English try to use only ASCII
characters (e.g. write `ü` as `ue`).

### Commit Messages

* Add `[skip ci]` to commit messages if you want the CI server to ignore that
  commit
* Use the present tense
* Use the imperative mood
