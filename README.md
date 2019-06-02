# educationandcare
Education and care website

## Local dev
```sh
# Tools
npm install gulp-cli -g
npm install gulp -D
npm install --save-dev gulp-concat gulp-uglify gulp-imagemin

# Repo
git clone git@github.com:d3v1an7/educationandcare.git && cd educationandcare

# Development
bundle update
npm update
(trap 'kill 0' SIGINT; gulp watch & jekyll serve --livereload)

# Precommit
gulp build
jekyll build
```

## Docs
- [Syntax](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers)
- [Plugins](https://github.com/github/pages-gem)
