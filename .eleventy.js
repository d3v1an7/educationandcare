const inspect = require("util").inspect
const fs = require('fs')
const environment = process.env.ELEVENTY_ENV
const buildTime = String(Date.now()) // NOTE: This doesn't update for watch events. Pretty sure that's fine?
const pluginSEO = require("eleventy-plugin-seo")
const pluginTailwindCSS = require("eleventy-plugin-tailwindcss")
const yamlMerge = require('@alexlafroscia/yaml-merge')
const markdownIt = require('markdown-it')
const Image = require("@11ty/eleventy-img");


async function imageShortcodeAsync(src, alt) {
  let metadata = await Image(src, {
    widths: [600],
    urlPath: '/images/web/',
    outputDir: './_site/images/web/'
  });
  let imageAttributes = {
    alt,
    loading: "lazy",
    decoding: "async",
  };
  return Image.generateHTML(metadata, imageAttributes)
}

function templateImg(src, format) {
  let options = {
    widths: [1024],
    formats: [format],
    urlPath: '/images/web/',
    outputDir: './_site/images/web/'
  }
  Image(src, options);
  metadata = Image.statsSync(src, options)
  let data = metadata[format][metadata[format].length - 1]
  return `${data.url}`
  return
}

module.exports = function(eleventyConfig) {

}

module.exports = (eleventyConfig) => {
  // Markdown config
  let markdownLib = markdownIt({
    breaks: true,
    code: false,
    html: true,
    linkify: true
  })
  eleventyConfig.setLibrary("md", markdownLib)

  // Merge config files for running env to create Netlify config file
  const output = yamlMerge(`./admin/config-${environment}.yml`,' ./admin/config-base.yml')
  try {
    fs.writeFileSync('./admin/config.yml', output)
  } catch (err) {
    console.error(err)
  }

  // Add debug filter (handy for dev)
  // Usage: {{ var_to_inspect | debug }})
  eleventyConfig.addFilter("debug", (content) => `<pre>${inspect(content)}</pre>`)

  // Add plugins
  eleventyConfig.addPlugin(pluginSEO, require("./src/_data/seo.json"))
  eleventyConfig.addPlugin(pluginTailwindCSS, {
    src: "./src/style.css",
    watchEleventyWatchTargets: true,
  })

  // Files to copy over as part of build
  eleventyConfig.addPassthroughCopy('admin/index.html')
  eleventyConfig.addPassthroughCopy('admin/config.yml')
  eleventyConfig.addPassthroughCopy('robots.txt')
  eleventyConfig.addPassthroughCopy('favicon.ico')
  eleventyConfig.addPassthroughCopy('src/images')

  // Standalone shortcodes
  eleventyConfig.addShortcode('buildTime', () => {
    return buildTime
  })
  eleventyConfig.addShortcode('img', imageShortcodeAsync) // async (default)
  eleventyConfig.addShortcode("templateImg", templateImg) // sync (for use in njk)

  // Browsersync options
  eleventyConfig.setBrowserSyncConfig({
    open: true
  })

  return {
    dir: {
      data: '_data',
      includes: '_includes',
      input: 'src',
      layouts: "_layouts",
      output: "_site"
    },
    passthroughFileCopy: true
  }
};
