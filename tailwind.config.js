/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 28/09/2021 - 14:11:38
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 28/09/2021
 * - Author          : Michael
 * - Modification    :
 **/
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        header: "#3d5a80",
        subheader: "#293241",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
