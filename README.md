# website

[![Build Status](https://travis-ci.org/bb-goettingen/website.svg?branch=master)](https://travis-ci.org/bb-goettingen/website)

If you want to contribute to the source read the
[contribution guideline](CONTRIBUTING.md).

If you want to make a post see the *Creating a Post* section below.

## TODO

- [ ] Impressum/etc.
- [ ] Translate README/etc. into German
- [ ] Create separate pages for Basisgruppen (dynamically)
- [ ] Issue template
- [ ] PR template
- [ ] License (?)

## Creating a Post

`src/posts/` contains posts written in [markdown](https://help.github.com/en/articles/basic-writing-and-formatting-syntax).

Metadata can be added to a post at the start of the file using YAML syntax:

```YAML
---
path:         "/posts/post-title"
author:       "Jane Doe"
authorExtra:  "Development Team"
title:        "Post Title"
date:         "2019-06-20"
draft:        false
image:        "path-to-image.jpg"
---
```

key         | value
------------|------------------------------------------------------------------
path        | The path to the post page, doesn't necessarily have to be the same path as the markdown file
author      | The author of the post
authorExtra | Displayed in parenthesis after the author, could for example be an alias or a group the author belongs to
title       | The title, used as the main heading of the post
date        | Post date, ISO 8601 date format: YYYY-MM-DD
draft       | If true the post won't appear on the home page, but can still be accessed by going to `path`
image       | Path (or external URL) to an image, displayed to the right of a post in a list

Make sure all fields are present.

### Path

Try to use a descriptive and unique path, usually the post's title should do.
Make sure to use a valid URL.

Example:

```
title: "Ten reasons why pizza is my favourite food"
path: "/posts/ten-reasons-why-pizza-is-my-favourite-food"
```
