<template lang="pug">
label.toggle(:class='{ disabled: disabled }', ref='label')
  input(
    type='checkbox',
    :value='checked',
    :disabled='disabled',
    :checked='active',
    @change='toggle'
  )
  span.toggle__slider
  p.toggle__text.body-2-m(v-if='label', :class='{ disabled: disabled }') {{ label }}
</template>

<script>
export default {
  props: ['label', 'disabled', 'active', 'labelLeft'],
  data() {
    return {
      checked: this.active,
    }
  },
  methods: {
    toggle(e) {
      this.checked = !this.checked
      this.$emit('change', this.checked)
      this.$emit('input', this.checked)
    },
  },
}
</script>

<style lang="scss" src='./toggle.scss'>
</style>