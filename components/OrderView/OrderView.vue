<template lang="pug">
.order-view(v-if='data')
  span.breadcrumb(@click='back')
    svg-icon.icon(name='chevron-left-16')
    span.label-2-r К списку заказов
  .header
    .title.heading-2 Заказ 23123
    .status Размещён
  .body
    .order-info.body-2-r
      .order-info__item
        .label Дата заказа
        .content
          span 01.01.2022
      .order-info__item
        .label Получатель
        .content
          span Иванов Иван
          span +7 900 999-99-99
          span example@gmail.com
      .order-info__item
        .label Способ получения
        .content
          span Самовывоз из магазина
          span Смоленск, ул. Соболева, д. 25
      .order-info__item
        .label Оплата
        .content
          span Оплата онлайн
          span.text-color-red(
            v-if='data.payStatus !== null',
            :class='[data.payStatus ? "text-color-green" : "text-color-red"]'
          ) {{ data.payStatus ? "Оплачен" : "Не оплачен" }}
      .order-info__item
        .label Стоимость доставки
        .content
          span Бесплатно
      .order-info__item
        .label Итоговая сумма
        .content
          span 400 800 руб.
    .order-products
      .title.heading-3 Товары
      .products
        ProductItem(v-for='(item, index) in 4', :key='index')
</template>

<script>
export default {
  props: ['data', 'back'],
  data() {
    return {}
  },
}
</script>

<style lang="scss" src='./order-view.scss'>
</style>