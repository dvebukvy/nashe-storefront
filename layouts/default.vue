<template lang='pug'>
vueCustomScrollbar.page(:settings='settings')
  header.page__header
    Header
  main.page__body
    Nuxt
  footer.page__footer
    Footer
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
        wheelPropagation: false,
      },
    }
  },
}
</script>