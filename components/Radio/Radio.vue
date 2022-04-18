<template lang="pug">
label.radio(ref='label') <span v-if="text" class='radio__text'>{{text}}</span>
  input(type="radio" :value='value'  checked="checked" name="radio" @change='toggle')
  span.radio__checkmark
</template>

<script>
export default {
  props: ['value', 'text'],
  methods: {
    toggle(e) {
      this.$emit('change', this.$refs.label)
      this.$emit('input', e.target.value)
    },
  },
}
</script>





<style lang="scss" src='./radio.scss'>
</style>