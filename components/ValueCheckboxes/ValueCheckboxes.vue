<template lang="pug">
  .value-checkboxes
    Checkbox(v-for="item in data" :key="item.id" :label='item.label' :val='item.value')
</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang="scss" src='./value-checkboxes.scss'>
  
</style>