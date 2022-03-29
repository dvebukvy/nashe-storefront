<template lang="pug">
.color-radios(ref='label')
  .color-radios__item(v-for='color in data', :key='color.id' :title='color.name')
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
    img.color-radios__texture(v-if='color.texture', :src='color.texture') 
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