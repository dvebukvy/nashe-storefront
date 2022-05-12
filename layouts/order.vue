<template lang='pug'>
vueCustomScrollbar.page(:settings='settings')
  header.page__header.secondary
    HeaderOrder
  main.page__body.secondary
    Nuxt
  footer.page__footer.secondary
    FooterOrder
</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'
export default {
  components: {
    vueCustomScrollbar,
  },
  data() {
    return {
      settings: {
        suppressScrollY: false,
        suppressScrollX: false,
        wheelPropagation: true,
      },
    }
  },
}
</script>