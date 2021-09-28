/**
    * @description      : 
    * @author           : Michael
    * @group            : 
    * @created          : 28/09/2021 - 12:44:33
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/09/2021
    * - Author          : Michael
    * - Modification    : 
**/
// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}