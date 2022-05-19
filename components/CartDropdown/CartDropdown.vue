<template lang="pug">
.cart
  .cart__header
    .body-2-m Корзина
    span.quantity
      .text 3
  vue-custom-scrollbar.cart__body(:settings='settings')
    .items
      nuxt-link.item(v-for='item in 6', to='/product/slug', :key='item')
        img.image(src='/img/product-card-1.jpg')
        .content
          .price.body-2-m 999 руб.
          .name.body-3-r Джемпер однотонный с круглой горловиной
          .size.label-2-r XS &#8226; 5 шт
  .cart__footer
    .total-block
      span.body-1-m Итого
      span.body-1-m 5 600 руб.
    .buttons
      Button.outline.width-140.height-40(label='В корзину', link='/cart')
      Button.width-140.height-40(label='Оформить заказ', link='/order')
</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'
export default {
  components: {
    vueCustomScrollbar,
  },
  data() {
    return {
      settings: {
        suppressScrollY: false,
        suppressScrollX: false,
        wheelPropagation: false,
      },
    }
  },
}
</script>

<style lang="scss" src='./cart-dropdown.scss'>
</style>