<template lang="pug">
.sale-calculator
  .sale-calculator__container(v-if="end <= progressStatus.summ")
    h2 Заглушка заполненной скидки
  .sale-calculator__container(v-else)
    p.sale-calculator__text {{progressStatus.summ}}/{{end}} руб. 
    .sale-calculator__indicator
      .sale-calculator__progress(:style='"width:" + progressStatus.percent + "%"')
    p.sale-calculator__text Добавьте в корзину товары ещё на {{progressStatus.totalLeft}} рублей и получите скидку 15% на весь заказ
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
      let percent =  (quantity * this.price) / this.end * 100;
      let summ =  quantity * this.price;
      let object = {percent: percent, summ: summ, totalLeft: totalLeft }

      return object
      
    }
  }
}
</script>

<style lang="scss" src='./sale-calculator.scss'>
</style>