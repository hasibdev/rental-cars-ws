export default {
   // Global page headers: https://go.nuxtjs.dev/config-head
   target: 'static',
   ssr: false,
   head: {
      title: 'RoadStar',
      htmlAttrs: {
         lang: 'en',
      },
      meta: [
         { charset: 'utf-8' },
         { name: 'viewport', content: 'width=device-width, initial-scale=1' },
         { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },
         { hid: 'description', name: 'description', content: '' },
         { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
         { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      ],
      script: [
         { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js' }
      ]
   },

   // Global CSS: https://go.nuxtjs.dev/config-css
   css: [
      '@node_modules/bootstrap/dist/css/bootstrap.min.css',
      '@/assets/styles/app.scss',
   ],
   js: [
      '@node_modules/bootstrap/dist/js/bootstrap.min.js'
   ],

   // For Global sass file support
   styleResources: {
      scss: ['~/assets/styles/scss/_variables.scss', '~/assets/styles/scss/_mixins.scss'],
   },

   // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
   plugins: [],

   // Auto import components: https://go.nuxtjs.dev/config-components
   components: true,

   // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
   buildModules: [
      // https://go.nuxtjs.dev/eslint
      '@nuxtjs/eslint-module',
   ],
   // Modules: https://go.nuxtjs.dev/config-modules
   modules: [
      // https://go.nuxtjs.dev/axios
      '@nuxtjs/axios',
      '@nuxtjs/i18n',
      '@nuxtjs/style-resources',
      '@nuxtjs/auth-next',
      '@nuxtjs/moment',
   ],
   auth: {
      redirect: {
         login: '/auth/login',
         logout: '/auth/login',
         home: '/dashboard'
      },
      strategies: {
         local: {
            token: {
               property: 'access_token',
            },
            user: {
               property: false
            },
            endpoints: {
               login: { url: '/api/login', method: 'post' },
               logout: { url: '/api/logout', method: 'get' },
               user: { url: '/api/user', method: 'get' }
            }
         }
      },
   },
   i18n: {
      locales: [
         {
            code: "en",
            name: "English"
         },
         {
            code: "de",
            name: "German"
         }
      ],
      defaultLocale: "en",
      vueI18nLoader: true,
      vueI18n: {
         fallbackLocale: "en",
         messages: {
         }
      },
      detectBrowserLanguage: {
         useCookie: true,
         cookieKey: 'i18n_redirected',
         redirectOn: 'root',  // recommended
      }
   },

   // Axios module configuration: https://go.nuxtjs.dev/config-axios
   axios: {
      // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
      baseURL: 'https://rentalcar-api.workspacify.cloud/',
   },

   // Build Configuration: https://go.nuxtjs.dev/config-build
   build: {},
}
