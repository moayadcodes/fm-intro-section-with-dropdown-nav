module.exports = {
  content: ['./src/**/*.{html,js}'],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      color: {
        neutral: {
          500: '#696969',
          900: '#141414',
        },
      },
      fontFamily: {
        sans: ['Epilogue', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['5rem', { lineHeight: '1' }],
      },
    },
  },
  plugins: [],
};
