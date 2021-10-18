module.exports = {
  purge: {
    content: [
      '.eleventy.js',
      './admin/**/*.html',
      './admin/**/*.yml',
      './src/style.css',
      './src/**/*.html',
      './src/**/*.json',
      './src/**/*.md',
      './src/**/*.njk',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Muli','sans-serif'],
    },
    minHeight: {
      'tile': '400px',
    },
    extend: {
      colors: {
        'body': '#6c7a89',
        'section': '#f4f5f6',
        'menu-gray': '#1e1f25',
        'hero-overlay': '#132930',
        'btn-blue': '#3498db',
        'btn-blue-hover': '#346edb',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
