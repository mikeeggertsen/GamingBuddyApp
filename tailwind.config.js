module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'theme-blue': '#4EA2FF',
        'theme-green': '#02C39A',
        'theme-green-dark': '#029979',
        'theme-light-dark': '#1B1F24',
        'theme-dark': '#121418',
        'theme-black-transparent': 'rgba(0, 0, 0, 0.5);',
      },
      minWidth: {
        48: '12rem',
      },
      fontSize: {
        '2xs': '0.65rem',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
