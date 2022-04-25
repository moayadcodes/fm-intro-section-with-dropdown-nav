module.exports = {
  content: ['./src/**/*.{html,js}'],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      boxShadow: {
        dropdown: '0 1rem 3rem -0.75rem rgba(0, 0, 0, 0.25)',
      },
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
        sm: ['0.9375rem', { lineHeight: '1.5' }],
        lg: ['1.1875rem', { lineHeight: '1.5' }],
        '7xl': ['5rem', { lineHeight: '1' }],
      },
    },
  },
  plugins: [],
};
