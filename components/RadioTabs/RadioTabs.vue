<template lang="pug">
.radio-tabs
  .radio-tabs__item(@click='select(item.value)' v-for="item in data" :key="item.id" :class='{selected: item.value === selected}') {{item.label}}
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      selected: this.data[0].value
    }
  }, 
  methods: {
    select(value) {
      this.selected = value
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss" src='./radio-tabs.scss'>
</style>