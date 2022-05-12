<template lang="pug">
.page__content
  .container
    Breadcrumbs(:data='breadcrumbs')
    Headline(title='Магазины')
    .d-flex.justify-content-between.align-items-center
      Tabs(:data='cityTabs')
      Switcher(:switch='changeSwitch')
    .store-cards(v-if='switcher === "list"')
      StoreCard(v-for='city in cities', :key='city.id', :data='city')
    Map.map(v-else)
</template>

<script>
export default {
  data() {
    return {
      cityTabs: [
        { name: 'Все' },
        { name: 'Смоленск' },
        { name: 'Брянск' },
        { name: 'Тула' },
        { name: 'Калуга' },
        { name: 'Вязьма' },
        { name: 'Москва' },
      ],
      cities: [
        {
          id: 0,
          name: 'Магазин на улице Братьев Луканиных',
          address: 'Смоленск, ул. Соболева, д. 25',
          address_desc: '(Здание Смоленской чулочно-трикотажной фабрики НАШЕ)',
          hours: 'Пн-пт: 10:00–20:00<br>Сб-вс: 10:00–19:00',
          phones: '+7 499 703-35-92, доб. 1324​',
        },
        {
          id: 1,
          name: 'Магазин на улице Братьев Луканиных',
          address: 'Смоленск, ул. Соболева, д. 25',
          address_desc: '(Здание Смоленской чулочно-трикотажной фабрики НАШЕ)',
          hours: 'Пн-пт: 10:00–20:00<br>Сб-вс: 10:00–19:00',
          phones: '+7 499 703-35-92, доб. 1324​',
        },
        {
          id: 2,
          name: 'Магазин на улице Братьев Луканиных',
          address: 'Смоленск, ул. Соболева, д. 25',
          address_desc: '(Здание Смоленской чулочно-трикотажной фабрики НАШЕ)',
          hours: 'Пн-пт: 10:00–20:00<br>Сб-вс: 10:00–19:00',
          phones: '+7 499 703-35-92, доб. 1324​',
        },
        {
          id: 3,
          name: 'Магазин на улице Братьев Луканиных',
          address: 'Смоленск, ул. Соболева, д. 25',
          address_desc: '(Здание Смоленской чулочно-трикотажной фабрики НАШЕ)',
          hours: 'Пн-пт: 10:00–20:00<br>Сб-вс: 10:00–19:00',
          phones: '+7 499 703-35-92, доб. 1324​',
        },
        {
          id: 4,
          name: 'Магазин на улице Братьев Луканиных',
          address: 'Смоленск, ул. Соболева, д. 25',
          address_desc: '(Здание Смоленской чулочно-трикотажной фабрики НАШЕ)',
          hours: 'Пн-пт: 10:00–20:00<br>Сб-вс: 10:00–19:00',
          phones: '+7 499 703-35-92, доб. 1324​',
        },
      ],
      switcher: 'list',
    }
  },
  computed: {
    breadcrumbs() {
      let breadcrumbs = [
        {
          title: 'Магазины',
        },
      ]

      return breadcrumbs
    },
  },
  methods: {
    changeSwitch(flag) {
      this.switcher = flag
    },
  },
}
</script>

<style lang="scss">
.store-cards {
  margin-top: 48px;
}
.map {
  margin-top: 48px;
  height: 660px !important;
}
</style>