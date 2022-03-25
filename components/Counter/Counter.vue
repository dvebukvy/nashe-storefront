<template lang="pug">
  .counter
    button.counter__button(@click='removeProduct')
      svg-icon.counter__icon(name='minus-20' )
    input.counter__input(type='number' v-model="quantityData" inputmode='numeric')
    button.counter__button.plus(@click='addProduct')
      svg-icon.counter__icon(name='plus-20')
</template>

<script>
export default {
  // props: ['data'],
  data() {
    return {
      quantityData: 1,
    }
  },
  methods: {
    addProduct() {
      this.quantityData++
      this.$emit('input', this.quantityData)
      this.$store.commit('cart/add', this.quantityData)
    },
    removeProduct() {
      if (this.quantityData > 0) {
        this.quantityData--
        this.$emit('input', this.quantityData)
        this.$store.commit('cart/add', this.quantityData)
      } else {
        return
      }
    },
  },
}
</script>

<style lang="scss" src='./counter.scss'>
  
</style>