<template lang="pug">
.header
  h2.header__title {{ text }}
  svg-icon(name='header')
</template>

<script>
export default {
  data() {
    return {
      text: 'Header',
    }
  },
}
</script>

<style src='./header.scss' lang="scss">

</style>