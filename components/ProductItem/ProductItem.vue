<template lang="pug">
.product-item
  img.image(src='/img/product-card-1.jpg')
  .content
    .prices.body-1-m
      .prices__one 999 руб.
      .prices__total 4 995 руб.
    .name.body-2-r Джемпер однотонный с круглой горловиной
    .color.label-2-r
      .label Цвет:
      span Чёрный
    .size.label-2-r
      .label Размер:
      span S
    .quantity.label-2-r 
      .label Количество:
      span 5
    .prices__total-mobile.body-1-m 4 995 руб.
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {}
  },
}
</script>

<style lang="scss" src='./product-item.scss'>
</style>