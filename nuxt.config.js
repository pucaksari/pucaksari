export default {
  ssr: false,
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Pesona Pucaksari',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Desa Pucaksari, di Kecamatan Busungbiu, salah satu desa yang terletak diatas ketinggian sekitar 650 diatas permukaan laut (dpl). Desa ini sejak lama, terkenal sebagai penghasil kopi jenis robusta'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~assets/css/global.css",
    'video.js/dist/video-js.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{
      src: '~/plugins/vue-video-player',
      ssr: false
    },
    {
      src: '~/plugins/vue-video-background',
      ssr: false
    },
    {
      src: '~/plugins/vue-viewer',
      ssr: false
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-gsap-module',
    '@aceforth/nuxt-optimized-images',
    '@nuxt/postcss8'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['nuxt-lazy-load', {
      directiveOnly: true,
      defaultImage: 'default-image.png',
    }],
    '@nuxt/content'
  ],

  // Ini buat fix content di static mode
  generate: {
    async routes() {
      const {
        $content
      } = require('@nuxt/content')
      const files = await $content({
        deep: true
      }).only(['path']).fetch()

      return files.map(file => file.path === '/index' ? '/' : file.path)
    }
  },

  // GSAP config
  gsap: {},

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Tailwinds module configuration
  tailwindcss: {
    jit: true
  },

  // Config optimized image
  optimizedImages: {
    optimizeImages: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  }
}
