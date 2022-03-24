<template lang="pug">
  .badge(:class='{sale: sale}')    
    .badge__label.red(v-if="sale") - {{label}}%    
    .badge__label(v-else) {{label}} 
</template>

<script>
export default {
  props: ['label', 'sale']
}
</script>

<style lang="scss" src='./badge.scss'>
  
</style>