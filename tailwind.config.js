module.exports = {
  purge: {
  enabled: true,
    content: [
      './src/**/*.html',
      './src/**/*.njk',
      './src/**/*.md',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Muli','sans-serif'],
    },
    extend: {
      colors: {
        'body': '#6c7a89',
        'section': '#f4f5f6',
        'menu-gray': '#1e1f25',
        'hero-overlay': '#132930',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
