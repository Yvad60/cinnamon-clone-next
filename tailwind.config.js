module.exports = {
  mode: 'jit',
  content: ['./src/pages/**/*.{js,jsx}', './src/components/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary_blue: 'rgb(81, 53, 255);',
        text_gray: 'rgb(207, 207, 207)',
        product_green: '#91F1C3',
        product_purple: '#53247E',
        product_yellow: '#fecb48',
      },
      boxShadow: {
        header_button: 'rgb(81, 53, 255) 0px 0px 0px 148px inset',
      },
      backgroundImage: {
        hero_noise: "url('/assets/images/noise.png')",
      },
    },
  },
  plugins: [],
};
