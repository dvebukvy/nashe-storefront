<template lang="pug">
.cart-page
  .cart-page__mobile
    SaleCalculator(:cart='true')
  .cart-page__list 
    .cart-page__item(v-for='item in data', :key='item.id')
      img.cart-page__image(:src='item.image')
      .cart-page__block
        .cart-page__close
          svg-icon.cart-page__close-icon(name="close-16")
        .cart-page__prices
          p.cart-page__price(:class='{ new: item.priceOld }') {{ item.price }} руб.
          p.cart-page__price.old(v-if='item.priceOld') {{ item.priceOld }} руб.
        p.cart-page__text.padding {{ item.name }}
        p.cart-page__text.grey Цвет: {{ item.color }}
        .cart-page__bottom
          .cart-page__actions
            .cart-page__box
              p.cart-page__text.grey Размер:
              .cart-page__select
                Select(
                  class='small'
                  :data='sizes',
                  placeholder='Размер',
                  :searchable='false',
                  :multiple='false',
                  :selectedData='sizes[item.size]'
                )
              .cart-page__select-mobile
                Select(                 
                  :data='sizes',
                  placeholder='Размер',
                  :searchable='false',
                  :multiple='false',
                  :selectedData='sizes[item.size]'
                )
            .cart-page__box
              p.cart-page__text.grey Количество:
              .cart-page__counter
                Counter(:quantity='item.quantity' class='small')
              .cart-page__counter-mobile
                Counter(:quantity='item.quantity' class='medium')
          p.cart-page__price {{item.price * item.quantity}} руб.
          .cart-page__delete
            .cart-page__text.primary Удалить из корзины
  .cart-page__mobile
    Total
  .cart-page__content
    Total
    SaleCalculator(:cart='true')
</template>

<script>
export default {
  props: ['data', 'colors', 'sizes'],  
}
</script>

<style lang="scss" src='./cart-page.scss'>
</style>