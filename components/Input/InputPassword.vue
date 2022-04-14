<template lang="pug">
  .input        
    input.input__input(:type='type' :placeholder='placeholder' @focus='onFocus' @blur='onBlur' v-model="value" :class='{"focused": focused, "error": error}' @input="handleInput" :value='data' ref='input' :disabled='disabled' autocomplete='new-password')    
    span.input__text(v-if="helpText" :class='{"error": error}') {{helpText}}
    button.input__button-pass.error(v-if='type == "password" && error')
      svg-icon(name='error')
    button.input__button-pass(v-if='type == "password"' @click='showPassword')
      svg-icon(name='view-20')
    button.input__button-pass(v-if='pass' @click='hidePassword')
      svg-icon(name='view-off')
</template>

<script>
export default {
  props: ['placeholder', 'helpText', 'error', 'data', 'selectAll', 'disabled', 'phoneMask'],
  data() {
    return {     
      value: this.data ? this.data : null,
      pass: false,
      focused: false,
      type: 'password'
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
    showPassword() {
      this.type = 'text'
      this.pass = true
    },
    hidePassword() {
      this.type = 'password'
      this.pass = false
    },    
  },  
}
</script>

<style lang="scss" src='./input.scss'>
  
</style>