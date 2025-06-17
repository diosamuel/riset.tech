---
layout: post.njk
title: Getting Started with 11ty Static Site Generator
description: Learn how to build fast, modern static websites using 11ty (Eleventy) with markdown content
date: 2024-01-15
tags: [11ty, static-sites, markdown, web-development]
---

# Getting Started with 11ty Static Site Generator

11ty (Eleventy) is a powerful static site generator that makes it easy to build fast, modern websites. In this post, we'll explore how to get started with 11ty and create your first static site.

## What is 11ty?

11ty is a simpler static site generator that transforms data files (Markdown, JSON, etc.) into a static site. It's written in JavaScript and supports multiple template languages including Nunjucks, Liquid, Handlebars, and more.

## Key Features

- **Multiple Template Languages**: Support for 11 different template languages
- **Markdown Support**: Write content in Markdown with front matter
- **Data Cascading**: Powerful data inheritance system
- **Fast Build Times**: Optimized for performance
- **Flexible Output**: Generate any file format you need

## Installation

To get started with 11ty, you'll need Node.js installed on your system. Then run:

```bash
npm install @11ty/eleventy
```

## Basic Configuration

Create an `.eleventy.js` file in your project root:

```javascript
module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/assets");
  
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
```

## Project Structure

A typical 11ty project structure looks like this:

```
project/
├── src/
│   ├── _includes/
│   │   └── base.njk
│   ├── _data/
│   ├── blog/
│   │   └── posts.md
│   └── index.md
├── .eleventy.js
└── package.json
```

## Writing Content in Markdown

11ty makes it easy to write content in Markdown with front matter:

```markdown
---
title: My First Post
date: 2024-01-15
tags: [blog, tutorial]
---

# My First Post

This is the content of my first blog post written in Markdown.
```

## Building Your Site

To build your site, run:

```bash
npx eleventy
```

This will generate your static site in the `_site` directory.

## Development Server

For development, you can start a local server with:

```bash
npx eleventy --serve
```

This will start a development server and watch for file changes.

## Conclusion

11ty is an excellent choice for building static websites. Its simplicity, flexibility, and performance make it a great tool for developers who want to create fast, modern websites without the complexity of full-featured frameworks.

Whether you're building a blog, documentation site, or portfolio, 11ty provides the tools you need to create beautiful, performant static sites. 