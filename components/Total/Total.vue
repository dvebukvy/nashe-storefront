<template lang="pug">
.total
  .total__section
    .total__item
      p.total__text Товары (20)
      p.total__text 9 000 руб.
    .total__item
      p.total__text Скидка на товары
      p.total__text.red —1 350 руб.
  .total__section
    .total__item
      p.total__text Скидка от суммы (15%)
      p.total__text.red —1 350 руб.
  .total__section
    .total__item
      p.total__text.bold Итого
      p.total__text.bold 7 650 руб.
  Button(label='Оформить заказ')
</template>

<script>
export default {
  props: ['title'],
}
</script>

<style lang="scss" src='./total.scss'>
</style>