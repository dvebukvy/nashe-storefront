<template lang="pug">
.input 
  textarea.input__input.textarea(
    v-if='type === "textarea"',
    :placeholder='placeholder',
    @focus='onFocus',
    @blur='onBlur',
    v-model='value',
    :class='{ focused: focused, error: error }',
    @input='handleInput',
    :disabled='disabled'
  ) 
  input.input__input.input__input-search(
    v-else,
    :type='type',
    :placeholder='placeholder',
    @focus='onFocus',
    @blur='onBlur',
    v-model='value',
    :class='{ focused: focused, error: error }',
    @input='handleInput',
    :value='data',
    ref='input',
    :disabled='disabled'
  )
  span.input__search-icon
    svg-icon.header__action-icon(name='search-24')
  span.input__text(v-if='helpText', :class='{ error: error }') {{ helpText }}
</template>

<script>
export default {
  props: [
    'type',
    'placeholder',
    'helpText',
    'error',
    'data',
    'selectAll',
    'disabled',
  ],
  data() {
    return {
      value: this.data ? this.data : null,
      focused: false,
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
  mounted() {
    if (this.type === 'textarea') {
      document.querySelectorAll('textarea').forEach((el) => {
        el.style.height = el.setAttribute(
          'style',
          'height: ' + el.scrollHeight + 'px'
        )
        el.classList.add('auto')
        el.addEventListener('input', (e) => {
          el.style.height = 'auto'
          el.style.height = el.scrollHeight + 'px'
        })
      })
    }
  },
}
</script>

<style lang="scss" src='./input.scss'>
</style>