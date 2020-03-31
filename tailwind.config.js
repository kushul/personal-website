/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    colors: {
      background: {
        // 'primary': 'white',
        // 'secondary': '#f7fafc',
        // 'primary': 'black',
        // 'secondary': '#102C44',
        'primary': 'var(--bg-background-primary)',
        'secondary': 'var(--bg-background-secondary)',

      },
      copy: {
        'primary': 'var(--text-copy-primary)',
        'secondary': 'var(--text-copy-secondary)',

      },
      gray: {
        '100': '#f5f5f5',
        '200': '#eeeeee',
        '300': '#e0e0e0',
        '400': '#bdbdbd',
        '500': '#9e9e9e',
        '600': '#757575',
        '700': '#616161',
        '800': '#424242',
        '900': '#212121',
      },
      green: {
        100: "#f0fff4",
        200: "#c6f6d5",
        300: "#9ae6b4",
        400: "#68d391",
        500: "#48bb78",
        600: "#38a169",
        700: "#2f855a",
        800: "#276749",
        900: "#22543d"
      },
    }
  },
  variants: {},
  plugins: []
}
