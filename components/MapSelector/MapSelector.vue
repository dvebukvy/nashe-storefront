<template lang="pug">
.map-selector
  .map-selector__close(@click='closeMap')
    svg-icon.map-selector__close-icon(name='close-16')
  .map-selector__sidebar
    .map-selector__top
      .map-selector__header
        p.map-selector__title Выбор магазина
      .map-selector__selector
        Select(:data='cities', :selectedData='cities[0]')
      .map-selector__list
        .map-selector__item(v-for='item in 4', :key='item.id')
          .map-selector__item-header
            .map-selector__text.bold Магазин на улице Братьев Луканиных
            Radio
          .map-selector__item-box
            svg-icon.map-selector__icon(name='pin-20')
            .map-selector__box-list
              p.map-selector__text Смоленск, ул. Соболева, д. 25
              p.map-selector__text.gray (Здание Смоленской чулочно-трикотажной фабрики НАШЕ)
          .map-selector__item-box
            svg-icon.map-selector__icon(name='clock-20')
            .map-selector__box-list
              p.map-selector__text Пн-пт: 10:00–20:00
              p.map-selector__text Сб-вс: 10:00–19:00
          .map-selector__item-box
            svg-icon.map-selector__icon(name='phone-20')
            .map-selector__box-list
              p.map-selector__text +7 499 703-35-92, доб. 1324
    .map-selector__bottom
      Button(label='Выбрать')
  .map-selector__map
    Map
</template>

<script>
export default {
  data() {
    return {
      cities: [
        {
          label: 'Смоленск',
          value: 'smolensk',
        },
        {
          label: 'Вязьма',
          value: 'vyazma',
        },
        {
          label: 'Ярцево',
          value: 'yartsevo',
        },
      ],
    }
  },
  methods: {
    closeMap() {
      this.$nuxt.$emit('closeMap')
    },
  },
}
</script>

<style lang="scss" src='./map-selector.scss'>
</style>