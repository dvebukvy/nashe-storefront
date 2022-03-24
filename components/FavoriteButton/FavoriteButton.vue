<template lang="pug">
  .favorite-button
    svg-icon.favorite-button__icon(name='favorite-fill-24' :class='{active: active}')
</template>

<script>
export default {
  props: ['active']
}
</script>

<style lang="scss" src='./favorite-button.scss'>
  
</style>