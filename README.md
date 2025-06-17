# Riset Tech - Static Site Generator

A modern, fast static site built with [11ty (Eleventy)](https://www.11ty.dev/) and markdown content. This project demonstrates how to create a beautiful, responsive website using 11ty with markdown for content management.

## Features

- ⚡ **Fast & Lightweight** - Static site generation for optimal performance
- 📝 **Markdown Content** - Write content in markdown with front matter
- 🎨 **Modern Design** - Clean, responsive design with CSS Grid and Flexbox
- 📱 **Mobile-First** - Fully responsive design that works on all devices
- 🔍 **SEO Optimized** - Built-in SEO features and meta tags
- 🎯 **Syntax Highlighting** - Code blocks with syntax highlighting
- 📊 **Reading Time** - Automatic reading time estimation for blog posts
- 📋 **Table of Contents** - Auto-generated TOC for long articles
- 🏷️ **Tag System** - Organize content with tags and categories
- 🚀 **Easy Deployment** - Ready to deploy to any static hosting service

## Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd riset.tech
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:8080`

## Available Scripts

- `npm run build` - Build the site for production
- `npm run start` - Start the development server
- `npm run dev` - Start the development server with file watching
- `npm run debug` - Run with debug logging enabled

## Project Structure

```
riset.tech/
├── src/                    # Source files
│   ├── _data/             # Global data files
│   ├── _includes/         # Reusable template components
│   │   └── base.njk       # Base layout template
│   ├── _layouts/          # Layout templates
│   │   ├── base.njk       # Base layout
│   │   └── post.njk       # Blog post layout
│   ├── blog/              # Blog posts (markdown files)
│   │   ├── index.njk      # Blog listing page
│   │   └── *.md           # Individual blog posts
│   ├── css/               # Stylesheets
│   │   └── style.css      # Main stylesheet
│   ├── js/                # JavaScript files
│   │   └── main.js        # Main JavaScript
│   ├── images/            # Image assets
│   ├── about.md           # About page
│   ├── contact.md         # Contact page
│   └── index.md           # Homepage
├── _site/                 # Generated static site (output)
├── .eleventy.js           # 11ty configuration
├── package.json           # Dependencies and scripts
└── README.md              # This file
```

## Content Management

### Creating Blog Posts

1. Create a new markdown file in the `src/blog/` directory
2. Add front matter at the top of the file:

```markdown
---
layout: post.njk
title: Your Post Title
description: Brief description of your post
date: 2024-01-15
tags: [tag1, tag2, tag3]
---

# Your Post Content

Write your content in markdown here...
```

3. The post will automatically appear in the blog listing and homepage

### Front Matter Options

- `layout` - Template to use (post.njk, base.njk, etc.)
- `title` - Page title
- `description` - Meta description for SEO
- `date` - Publication date
- `tags` - Array of tags for categorization
- `draft` - Set to `true` to exclude from build (optional)

### Adding Pages

Create new markdown files in the `src/` directory with appropriate front matter:

```markdown
---
layout: base.njk
title: Page Title
description: Page description
---

# Page Content

Your page content here...
```

## Customization

### Styling

The main stylesheet is located at `src/css/style.css`. It uses CSS custom properties (variables) for easy theming:

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #64748b;
  --accent-color: #f59e0b;
  /* ... more variables */
}
```

### Layouts

Layout templates are in `src/_layouts/`:
- `base.njk` - Main layout with header, footer, and navigation
- `post.njk` - Blog post layout with article styling

### Configuration

The 11ty configuration is in `.eleventy.js`. Key features:
- Markdown processing with plugins
- Syntax highlighting
- Asset copying
- Custom filters and shortcodes

## Deployment

### Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `_site`
4. Deploy!

### Vercel

1. Connect your repository to Vercel
2. Vercel will automatically detect 11ty
3. Deploy!

### GitHub Pages

1. Build the site: `npm run build`
2. Push the `_site` directory to the `gh-pages` branch
3. Enable GitHub Pages in repository settings

### Manual Deployment

1. Build the site: `npm run build`
2. Upload the contents of `_site/` to your web server

## Plugins Used

- `@11ty/eleventy-plugin-syntaxhighlight` - Syntax highlighting for code blocks
- `@11ty/eleventy-plugin-bundle` - Asset bundling
- `markdown-it` - Markdown processing
- `markdown-it-anchor` - Auto-generated anchor links
- `markdown-it-attrs` - HTML attributes in markdown

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm run dev`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Resources

- [11ty Documentation](https://www.11ty.dev/docs/)
- [Markdown Guide](https://www.markdownguide.org/)
- [Nunjucks Templates](https://mozilla.github.io/nunjucks/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)

## Support

If you have questions or need help:
- Check the [11ty documentation](https://www.11ty.dev/docs/)
- Open an issue on GitHub
- Contact us through the website

---

Built with ❤️ using 11ty and markdown 