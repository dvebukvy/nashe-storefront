<template lang="pug">
.mobile-select 
  .mobile-select__content
    .mobile-select__header
      .mobile-select__title Сортировка
      .mobile-select__close(@click='close')
        svg-icon.mobile-select__icon(name='close-16')
    .mobile-select__body 
      .mobile-select__item(v-for='item in data', :key='item.id')
        .mobile-select__text {{ item.label }}
        Radio(:value='item.value', v-model='item.value', @input='handleInput')
  .mobile-select__area(@click='close')
</template>

<script>
export default {
  props: ['data', 'selectedData'],
  data() {
    return {
      value: this.selectedData ? this.selectedData : null,
    }
  },
  methods: {
    handleInput(e) {
      this.$emit('input', this.value)
    },
    close() {
      this.$nuxt.$emit('closeMobileSelect')
    },
  },
}
</script>

<style lang="scss" src='./mobile-select.scss'>
</style>