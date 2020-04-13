/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    fontFamily: {
      display: ['Nunito', 'sans-serif'],
    },
    colors: {
      black: "#000",
      white: "#fff",
      background: {
        'primary': 'var(--bg-background-primary)',
        'secondary': 'var(--bg-background-secondary)',
        'invert': 'var(--bg-background-invert)'
      },
      copy: {
        'primary': 'var(--text-copy-primary)',
        'secondary': 'var(--text-copy-secondary)',
        'invert': 'var(--text-copy-invert)'

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
      blue: {
        100: "#E6EDF4",
        200: "#BFD2E3",
        300: "#99B7D2",
        400: "#4D80B1",
        500: "#004A8F",
        600: "#004381",
        700: "#002C56",
        800: "#002140",
        900: "#00162B"
      },
      indigo: {
        100: "#ebf4ff",
        200: "#c3dafe",
        300: "#a3bffa",
        400: "#7f9cf5",
        500: "#667eea",
        600: "#5a67d8",
        700: "#4c51bf",
        800: "#434190",
        900: "#3c366b"
      },
    }
  },
  variants: {},
  plugins: []
}
