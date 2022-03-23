<template lang="pug">
  .accordion
    .accordion__head(@click="toogleDropdown")      
      p.accordion__title(:class='{"active": dropdownOpened}') {{title}} <span v-if="subtitle" class='accordion__title subtitle'>{{subtitle}}</span>
      svg-icon.accordion__icon-shevron(name='plus-20' :class='{"active": !dropdownOpened}')    
      svg-icon.accordion__icon-shevron(name='minus-20' :class='{"active": dropdownOpened}')    
    .accordion__body(v-show-slide:500:example-easing="dropdownOpened", :class='{"active": dropdownOpened}')
      slot
</template>

<script>
export default {
  props: ['data', 'title', 'subtitle'],
  data() {
    return {
      dropdownOpened: false
    }
  },
  methods: {
    toogleDropdown() {
      this.dropdownOpened = !this.dropdownOpened
    }
  },
}
</script>

<style src='./accordion.scss' lang="scss">

</style>