export default {
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    beforeEnter(el) {
    }
  },
  target: 'static',
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_author || 'Kushul Soomaree',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,600;0,800;1,300;1,400;1,600;1,800&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;700&display=swap' }]
  },
  /*
   ** Customize the progress-bar color
  
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/css/screen.css',
    '@/assets/scss/main.scss',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~/plugins/date.js" }, { src: "@/plugins/vuetimeline.js" }, { src: "@/plugins/main.js" }],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/color-mode',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
    // '~/modules/crawler/'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  colorMode: {
    preference: 'dark', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    // cookie: {
    //   key: 'nuxt-color-mode',
    //   options: {
    //     path: nuxt.options.router.base // https://nuxtjs.org/api/configuration-router#base
    //   }
    // }
  },
  build: {
    /*
     ** You can extend webpack config here
     */

    postcss: {
      plugins: {
        // Disable a plugin by passing false as value
        'postcss-color-function': {},
        'postcss-url': false,
        tailwindcss: 'tailwind.config.js',
        'postcss-nested': {},
        'postcss-hexrgba': {}
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {}
      }
    },
    extend(config, ctx) {
      for (let rule of config.module.rules) {
        if (rule.test.test('.css')) {
          config.module.rules.push({
            test: /\.postcss/,
            oneOf: rule.oneOf
          })
        }
      }

      return config
    }
  },
  purgeCSS: {
    mode: 'postcss',
    whitelist: ["dark-mode", "light-mode", "sepia-mode"]
  },
  generate: {
    dir: 'docs'
  },

  router: {
    base: '/',
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'PostIndex',
        path: '/blog/page/:pageNumber',
        component: resolve(__dirname, 'pages/blog/index.vue')
      })

      // routes.push({
      //   name: 'TagIndex',
      //   path: '/tag/:slug/page/:pageNumber',
      //   component: resolve(__dirname, 'pages/tag/_slug.vue')
      // })

      // routes.push({
      //   name: 'AuthorIndex',
      //   path: '/author/:slug/page/:pageNumber',
      //   component: resolve(__dirname, 'pages/author/_slug.vue')
      // })
    }
  },
  hooks: {
    generate: {
      routeCreated({ route, path, errors }) {
        console.log(route)
        console.log(path)
        console.log(errors)
      }
    }
  }
}
