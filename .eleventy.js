const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItAttrs = require('markdown-it-attrs');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const { EleventyRenderPlugin } = require('@11ty/eleventy');

module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy('src/css');
  eleventyConfig.addPassthroughCopy('src/js');
  eleventyConfig.addPassthroughCopy('src/images');

  // Add plugins
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(EleventyRenderPlugin);

  // Configure collections
  eleventyConfig.addCollection('post', function(collectionApi) {
    return collectionApi.getFilteredByGlob('./src/blog/*.md');
  });

  // Configure markdown
  const markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  })
  .use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.ariaHidden({
      placement: 'after',
      class: 'header-anchor',
      symbol: '#'
    })
  })
  .use(markdownItAttrs);

  eleventyConfig.setLibrary('md', markdownLibrary);

  // Add filters
  eleventyConfig.addFilter('date', function(value) {
    return new Date(value).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  eleventyConfig.addFilter('dateISO', function(value) {
    return new Date(value).toISOString();
  });

  eleventyConfig.addFilter('limit', function(array, limit) {
    return array.slice(0, limit);
  });

  // Add shortcodes
  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
      layouts: '_layouts',
      data: '_data'
    },
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk'
  };
}; 