<template lang='pug'>
.select
  v-select(
    :searchable='searchable',
    :multiple='multiple',
    :options='data',
    :value='selectedValues',
    @input='updateValue',
    :placeholder='placeholder',
    :class='{ small: small, "with-color": colorSelect }',
    :closeOnSelect='closeOnSelect',
    :style='"--color: " + color',
    :clearable='clearable'
  )
    template(#open-indicator='{ attributes }') 
      svg-icon.select__icon-dropdown(
        v-bind='attributes',
        name='chevron-small',
        v-if='small'
      )
      svg-icon.select__icon-dropdown(
        v-bind='attributes',
        name='chevron-down',
        v-else
      )
    template(v-slot:option='option', v-if='colorSelect || multiple') 
      .select__item(@click='chekToggle', v-if='colorSelect')
        .select__color(:style='"background-color: " + option.value')
        span.select__action-text {{ option.label }}
      .select__multiple-item(@click='chekToggle(option)', v-if='multiple')
        Checkbox
        span.select__action-text {{ option.label }}
    li.select__action(slot='list-footer', v-if='createOption')
      svg-icon.select__icon-add(name='add')
      span.select__action-text.blue Создать
      span.select__action-text Select option
  span.select__help(v-if='helpText') {{ helpText }}
</template>

<script>
// import 'vue-select/dist/vue-select.css'
export default {
  props: [
    'data',
    'value',
    'placeholder',
    'searchable',
    'multiple',
    'small',
    'closeOnSelect',
    'colorSelect',
    'helpText',
    'clearable',
    'createOption',
    'selectedData',
  ],
  data() {
    return {
      color: '',
      selectedValues: this.selected || [],
      toBackend: [],
    }
  },
  computed: {
    selected() {
      if (this.selectedData) {
        if (this.multiple) {
          let array = []
          this.selectedData.forEach((element) => {
            array.push(this.data.find((el) => el.value === element.value))
          })
          return array
        } else {
          return this.selectedData
        }
      } else {
        return
      }
    },
  },

  beforeMount() {
    this.selectedValues = this.selected
  },

  methods: {
    updateValue(option) {
      console.log(option)
      if (option) {
        if (this.multiple) {
          this.selectedValues = []
          this.toBackend = []
          option.forEach((element) => {
            this.selectedValues.push({
              label: element.label,
              value: element.value,
            })
          })

          this.selectedValues.forEach((el) => {
            this.toBackend.push(el.value)
          })
          this.$emit('input', this.toBackend)
        } else {
          this.selectedValues = { label: option.label, value: option.value }
          this.$emit('input', option ? option.value : '')
          if (this.colorSelect && option) {
            this.color = option.value
          }
        }
      } else {
        this.selectedValues = null
        this.toBackend = null
        this.$emit('input', null)
      }
    },
    chekToggle(option) {
      if (this.selectedValues) {
        if (this.selectedValues.find((el) => el.value === option.value)) {
          let x = this.selectedValues.findIndex(
            (el) => el.value === option.value
          )
          console.log(x)
          setTimeout(() => {
            this.selectedValues.splice(x, 1)
            this.toBackend.splice(x, 1)
          }, 100)
        }
      }
    },
  },
}
</script>


<style lang='scss' src='./select.scss'>
</style>