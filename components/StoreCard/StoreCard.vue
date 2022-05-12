<template lang="pug">
.store-card(v-if='data')
  .store-card__address
    .name.title-1-m(v-if='data.name') {{ data.name }}
    .address.body-2-r(v-if='data.address') {{ data.address }} <br>
      span(v-if='data.address_desc') {{ data.address_desc }}
  .store-card__hours
    .title.body-2-r Время работы
    .hours.body-2-r(v-if='data.hours', v-html='data.hours')
  .store-card__phones
    .title.body-2-r Номер телефона
    .phone.body-2-r(v-if='data.phones', v-html='data.phones') {{ data.phones }}
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {}
  },
}
</script>

<style lang="scss" src='./store-card.scss'>
</style>