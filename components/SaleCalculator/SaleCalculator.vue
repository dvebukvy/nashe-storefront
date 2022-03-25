<template lang="pug">
.sale-calculator
  p.sale-calculator__text {{start}}/{{end}} руб. {{progressStatus}}
  .sale-calculator__indicator
    .sale-calculator__progress
  p.sale-calculator__text Добавьте в корзину товары ещё на 4 001 рублей и получите скидку 15% на весь заказ
  nuxt-link.sale-calculator__link(to='/') Подробнее про систему скидок
</template>

<script>
export default {
  props: ['price'],
  data() {
    return {
      start: 0,
      end: 5000
    }
  },  
  computed: {
    progressStatus() {
      let quantity = this.$store.state.cart.quantity
      console.log(quantity);
      let totalLeft = this.end - (quantity * this.price)
      console.log(totalLeft);
      let percent =  this.end / (quantity * 500);
      let summ =  (totalLeft) * percent;
      let object = {percent: percent, summ: summ }

      return object
      
    }
  }
}
</script>

<style lang="scss" src='./sale-calculator.scss'>
</style>