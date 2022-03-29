<template lang="pug">
  label.checkbox(ref='label')
    input(type='checkbox' :value='val' :checked='checked' @input="handleInput" :disabled='disabled').checkbox__tag
    .checkbox__box
    span(v-if="label") {{label}}
</template>

<script>
export default {
  props: ['label', 'checked', 'val', 'disabled'],  
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.checked)
    },
  }, 
}
</script>

<style src="./checkbox.scss" lang="scss">

</style>