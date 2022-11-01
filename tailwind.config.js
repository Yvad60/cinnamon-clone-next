module.exports = {
  content: ['./src/pages/**/*.{js,jsx}', './src/components/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary_blue: 'rgb(81, 53, 255);',
      },
      boxShadow: {
        header_button: 'rgb(81, 53, 255) 0px 0px 0px 148px inset',
      },
    },
  },
  plugins: [],
};
