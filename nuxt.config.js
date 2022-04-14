export default {
  server: {
    port: 8008,
    host: '0.0.0.0',
  },

  target: 'server',

  ssr: false,

  head: {
    title: 'nashe-stoefront',
    htmlAttrs: {
      lang: 'ru-RU'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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

  plugins: [{ src: '~/plugins/plugins.js', mode: 'client' }, { src: '~/plugins/ymapPlugin.js',  mode: 'client' }, '~plugins/api.js'],

  components: true,

  modules: ['@nuxtjs/axios', '@nuxtjs/style-resources', '@nuxtjs/svg-sprite', 'nuxt-vue-select'],
    
}
