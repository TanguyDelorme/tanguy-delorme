module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        'header-bg': 'var(--color-header-bg)',
        'header-text': 'var(--color-header-bg)',
        'header-hover': 'var(--color-header-bg)',
      }
    }
  },
  plugins: [],
}
