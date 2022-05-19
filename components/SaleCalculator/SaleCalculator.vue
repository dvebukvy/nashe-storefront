<template lang="pug">
.sale-calculator
  .sale-calculator__top(v-if='cart')
    .sale-calculator__circle
      .sale-calculator__sale-text.primary 15%
    p.sale-calculator__sale-text Дополнительная скидка за стоимость корзины
  .sale-calculator__container(v-if='end <= progressStatus.summ')

  .sale-calculator__container(v-else)
    p.sale-calculator__text {{ progressStatus.summ }}/{{ end }} руб.
    .sale-calculator__indicator
      .sale-calculator__progress(
        :style='"width:" + progressStatus.percent + "%"'
      )
    p.sale-calculator__text.body-3-r Добавьте в корзину товары ещё на {{ progressStatus.totalLeft }} рублей и получите скидку 15% на весь заказ
    nuxt-link.sale-calculator__link(to='/') Подробнее про систему скидок
</template>

<script>
export default {
  props: ['price', 'cart'],
  data() {
    return {
      start: 0,
      end: 5000,
    }
  },
  computed: {
    progressStatus() {
      let quantity = this.$store.state.cart.quantity
      // console.log(quantity)
      let totalLeft = this.end - quantity * this.price
      // console.log(totalLeft)
      let percent = ((quantity * this.price) / this.end) * 100
      let summ = quantity * this.price
      let object = { percent: percent, summ: summ, totalLeft: totalLeft }

      return object
    },
  },
}
</script>

<style lang="scss" src='./sale-calculator.scss'>
</style>