<template lang="pug">
  .input       
    input.input__input(type='number' :placeholder='placeholder' @focus='onFocus' @blur='onBlur' v-model="value" :class='{"focused": focused, "error": error}' @input="handleInput" value='788' ref='input' :disabled='disabled' v-mask="'+7 (###) ###-##-##'")
    span.input__text(v-if="helpText" :class='{"error": error}') {{helpText}}    
</template>

<script>
export default {
  props: ['type', 'placeholder', 'helpText', 'error', 'data', 'selectAll', 'disabled', 'phoneMask'],
  data() {
    return {     
      value: this.data ? this.data : null,    
      focused: false
    }
  },
  methods: {
    handleInput(e) {
      this.$emit('input', this.value)
    },
    onFocus() {
      this.focused = true
      if (this.selectAll) {
        this.$refs.input.select()
      }      
      this.$emit('focus')
    },
    onBlur() {
      this.focused = false
    },   
  },  
}
</script>

<style lang="scss" src='./input.scss'>
  
</style>