<template lang="pug">
.color-radios(ref='label')
  .color-radios__item(v-for='color in data', :key='color.id')
    input.color-radios__input(
      type='radio',
      :checked='active',
      name='1',
      @change='addFilter(color)',
    )
    .color-radios__color(
      :style='"background-color: " + color.hex',
      v-if='color.hex'
    )
    img.color-radios__image(v-if='color.image', :src='color.image') 
</template>

<script>
export default {
  props: ['data', 'active'],
  data() {
    return {
      value: null,
    }
  },
  methods: {
    addFilter(color) {
      console.log(color)
      this.$emit('input', color)
    },
  },
}
</script>

<style lang="scss" src='./color-radios.scss'>
</style>