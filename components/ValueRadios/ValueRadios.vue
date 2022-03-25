<template lang="pug">
.value-radios(ref='label')
  .value-radios__item(v-for='value in data', :key='value.id' :class='{disabled: value.disabled}')
    
    input.value-radios__input(
      type='radio',
      :checked='value.active',
      :disabled='value.disabled'
      name='1',
      @change='addFilter(value)',
    )
    .value-radios__value {{value.name}}
    .value-radios__box(:class='{disabled: value.disabled}')
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      value: null,
    }
  },
  methods: {
    addFilter(value) {
      this.$emit('input', value)
    },
  },
}
</script>

<style lang="scss" src='./value-radios.scss'>
</style>