<template lang="pug">
.order-card.bg-gray-10(v-if='data')
  .order-card__header
    .order-info
      .order-info__number.title-1-m(v-if='data.number') {{ data.number }}
      .order-info__date.body-2-r(v-if='data.date') от {{ data.date }}
      .order-info__status.label-2-r.text-color-primary(v-if='data.status') {{ data.status }}
    .order-price.title-1-m(v-if='data.price') {{ data.price }}
      .order-price__status-mobile.label-2-r.text-color-primary(
        v-if='data.status'
      ) {{ data.status }}
  .order-card__body
    .order-data.body-2-r
      .order-data__delivery
        svg-icon.order-icon(name='mark')
        span(v-if='data.deliveryType') {{ data.deliveryType }}
      .order-data__address(v-if='data.address') {{ data.address }}
      .order-data__pay
        svg-icon.order-icon(name='wallet')
        span(v-if='data.payType') {{ data.payType }}
      .order-data__pay-status(
        v-if='data.payStatus !== null',
        :class='[data.payStatus ? "text-color-green" : "text-color-red"]'
      ) {{ data.payStatus ? "Оплачен" : "Не оплачен" }}
    .goods-images(v-if='data.images')
      img.image(
        v-for='image in data.images.slice(0, screenWidth)',
        :src='image'
      )
      .another-goods.label-3-r(
        v-if='data.images && data.images.length >= screenWidth'
      ) И ещё 24 товара
</template>

<script>
export default {
  props: ['data', 'link'],
  data() {
    return {}
  },
  computed: {
    screenWidth() {
      if (window.screen.width <= 768) {
        return 2
      } else {
        return 4
      }
    },
  },
}
</script>

<style lang="scss" src='./order-card.scss'>
</style>