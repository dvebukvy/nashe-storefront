<template lang="pug">
.order-page
  .order-page__map(v-if='mapOpened')
    MapSelector 
  .order-page__list 
    .order-page__section
      p.order-page__title Контактные данные
      .order-page__item
        p.order-page__text ФИО
        Input.background(type='text', placeholder='Иванов Иван')
      .order-page__item
        p.order-page__text Телефон
        InputPhone.background(placeholder='+7 900 999-99-99')
      .order-page__item
        p.order-page__text Электронная почта
        Input.background(type='email', placeholder='example@gmail.ru')
    .order-page__section
      p.order-page__title Способ получения
      .order-page__radios
        RadioTabs(:data='delivery', v-model='deliveryType')
      .order-page__delivery(v-if='deliveryType === "pickup"')
        p.order-page__text Выберите магазин, в котором вам будет удобно получить товар
        Button.outline.unset-width(
          label='Выбрать магазин',
          @click.native='openMap'
        )
      .order-page__delivery(v-if='deliveryType === "cdek"')
        p.order-page__text Укажите удобный для вас способ получения товара и адрес доставки
        Button.outline.unset-width(label='Указать адрес доставки')
    .order-page__section
      p.order-page__title Оплата
      .order-page__radios(v-if='deliveryType === "pickup"')
        RadioTabs(:data='payment', v-model='paymentType')
      .order-page__radios(v-if='deliveryType === "cdek"')
        RadioTabs(:data='paymentCdek', v-model='paymentType')
  .order-page__mobile
    Total.background
  .order-page__content
    Total.background
</template>

<script>
export default {
  props: ['data', 'colors', 'sizes'],
  data() {
    return {
      mapOpened: false,
      deliveryType: 'pickup',
      paymentType: 'cash',
      delivery: [
        {
          label: 'Самовывоз из магазина',
          value: 'pickup',
        },
        {
          label: 'СДЭК',
          value: 'cdek',
        },
      ],
      payment: [
        {
          label: 'Наличными или картой в магазине',
          value: 'cash',
        },
        {
          label: 'Картой онлайн',
          value: 'online',
        },
      ],
      paymentCdek: [
        {
          label: 'Картой онлайн',
          value: 'online',
        },
      ],
    }
  },
  methods: {
    openMap() {
      this.mapOpened = true
    },
    closeMap() {
      this.mapOpened = false
    },
  },
  mounted() {
    this.$nuxt.$on('closeMap', this.closeMap)
  },
}
</script>

<style lang="scss" src='./order-page.scss'>
</style>