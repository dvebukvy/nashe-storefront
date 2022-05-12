export default {
  server: {
    port: 8008,
    host: '0.0.0.0',
  },

  target: 'server',

  ssr: false,

  head: {
    title: 'НАШЕ',
    htmlAttrs: {
      lang: 'ru-RU'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'apple-mobile-web-app-title', content: 'НАШЕ' },
      { name: 'application-name', content: 'НАШЕ' },
      { name: 'msapplication-TileColor', content: '#cf643f' },
      { name: 'theme-color', content: '#cf643f' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'favicon-32x32.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
    ],
    bodyAttrs: {
      class: 'body',
    },
  },

  buildModules: ['nuxt-compress'],

  css: ['@/assets/scss/style.scss'],

  styleResources: {
    scss: ['@/assets/scss/variables.scss'],
  },

  plugins: [{ src: '~/plugins/plugins.js', mode: 'client' }, { src: '~/plugins/ymapPlugin.js', mode: 'client' }, '~plugins/api.js'],

  components: true,

  modules: ['@nuxtjs/axios', '@nuxtjs/style-resources', '@nuxtjs/svg-sprite', 'nuxt-vue-select'],

}
