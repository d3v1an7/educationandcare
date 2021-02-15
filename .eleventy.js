const pluginSEO = require("eleventy-plugin-seo");
module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(pluginSEO, require("./_data/seo.json"));

  eleventyConfig.addPassthroughCopy('robots.txt')
  eleventyConfig.addPassthroughCopy('favicon.ico')
  eleventyConfig.addPassthroughCopy('src/images');

  let markdownIt = require('markdown-it');
  let options = {
    html: true,
    breaks: true,
    linkify: true
  }
  eleventyConfig.setLibrary('md', markdownIt(options));

  return {
    dir: {
      data: '../_data', // Relative to the input dir
      input: 'src',
      includes: '_includes',
      layouts: '_layouts'
    },
    passthroughFileCopy: true
  }
};
