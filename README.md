# website

[![Build Status](https://travis-ci.org/bb-goettingen/website.svg?branch=master)](https://travis-ci.org/bb-goettingen/website)

`src/posts` contains posts written in markdown

Metadata can be added to a post at the start of the file using YAML syntax

```YAML
---
path: "/posts/example2"
author: "Jane Doe"
authorExtra: "BG-Informatik"
title: "Example 2"
date: "2019-06-22"
draft: false
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

