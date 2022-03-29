<template lang="pug">
  .range
    .range__container
      label.range__text От
      input.range__input(type='number' placeholder='99' v-model="from" @change='setValues')
    .range__container
      label.range__text До
      input.range__input(type='number' placeholder='1699' v-model="to" @change='setValues')
</template>

<script>
export default {
  props: ['title'],
  data() {
    return {
      from: 99,
      to: 1699
    }
  },
  methods: {
    setValues() {
      console.log(this.from, this.to);
    }
  },
}
</script>

<style lang="scss" src='./range.scss'>
  
</style>