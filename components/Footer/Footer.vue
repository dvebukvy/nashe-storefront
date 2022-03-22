<template lang="pug">
  .footer
    ul.footer__list
      li.footer__item
        p {{text}} 1
      li.footer__item
        p {{text}} 2
</template>

<script>
export default {
  data() {
    return {
      text: 'Footer'
    }
  },
}
</script>

<style src='./footer.scss' lang="scss">

</style>