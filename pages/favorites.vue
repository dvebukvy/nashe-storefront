<template lang="pug">
.page__content
  .container
    Breadcrumbs(:data='breadcrumbs')
    Headline(title='Избранное')
    .favorite-page
      .favorite-page__actions
        .favorite-page__selector
          client-only
            Select(
              :data='selector',
              placeholder='Обычный селект',
              :searchable='false',
              :multiple='false',
              :selectedData='selector[0]'
            )
        .favorite-page__mobile-selector(@click='openSelector') 
          client-only
            Select(
              style='pointer-events: none',
              :data='selector',
              placeholder='Обычный селект',
              :searchable='false',
              :multiple='false',
              :selectedData='selector[0]'
            )
        .favorite-page__mobile-selector-small(@click='openSelector') 
          Button.delete(icon='stripes')
        .favorite-page__select(:class='{ opened: selectorOpened }')
          MobileSelect(
            :data='selector',
            :selectedData='selector[0]',
            v-model='selected'
          )
        Button.reverse.delete(label='Очистить избранное', icon='trash')

      .favorite-page__fail(v-if='fail')
        img.favorite-page__fail-icon(src='/icons/favorite-fail.svg')
        p.favorite-page__text Вы не добавили ни одного товара в избранное
      .favorite-page__list(v-if='!fail')
        ProductCard.in-grid(
          v-for='item in products',
          :key='item.id',
          :data='item'
        )
      Pagination(v-if='!fail')
</template>

<script>
export default {
  data() {
    return {
      fail: false,
      selected: null,
      selectorOpened: false,
      selector: [
        {
          value: 'lowPrice',
          label: 'Сначала недорогие',
        },
        {
          value: 'bigPrice',
          label: 'Сначала дорогие',
        },
        {
          value: 'salePrice',
          label: 'По сумме скидки',
        },
      ],
      products: [
        {
          id: 'product-1',
          price: 699,
          priceOld: 999,
          name: 'Джемпер однотонный с круглой горловиной',
          badges: ['Новинка'],
          sale: 30,
          inFavorite: true,
          colors: [
            {
              hex: '#000000',
              name: 'Черный',
            },
            {
              hex: '#ffffff',
              name: 'Белый',
            },
            {
              hex: '#EAE5CF',
              name: 'Бежевый',
            },
            {
              hex: '#3736E0',
              name: 'Синий',
            },
            {
              hex: '#56BCE8',
              name: 'Голубой',
            },
            {
              hex: '#126354',
              name: 'Зеленый',
            },
            {
              hex: '#3736E0',
              name: 'Синий',
            },
            {
              hex: '#56BCE8',
              name: 'Голубой',
            },
            {
              hex: '#126354',
              name: 'Зеленый',
            },
          ],
          images: [
            '/img/product-card-1.jpg',
            '/img/product-card-2.jpg',
            '/img/product-card-3.jpg',
            '/img/product-card-4.jpg',
          ],
        },
        {
          id: 'product-2',
          price: 699,
          priceOld: null,
          name: 'Джемпер однотонный с круглой горловиной',
          badges: ['Новинка', 'Бестселлер'],
          sale: null,
          inFavorite: false,
          colors: [
            {
              hex: '#000000',
              name: 'Черный',
            },
            {
              hex: '#ffffff',
              name: 'Белый',
            },
            {
              hex: '#EAE5CF',
              name: 'Бежевый',
            },
            {
              hex: '#3736E0',
              name: 'Синий',
            },
            {
              hex: '#56BCE8',
              name: 'Голубой',
            },
            {
              hex: '#126354',
              name: 'Зеленый',
            },
            {
              hex: '#3736E0',
              name: 'Синий',
            },
            {
              hex: '#56BCE8',
              name: 'Голубой',
            },
            {
              hex: '#126354',
              name: 'Зеленый',
            },
          ],
          images: [
            '/img/product-card-1.jpg',
            '/img/product-card-2.jpg',
            '/img/product-card-3.jpg',
            '/img/product-card-4.jpg',
          ],
        },
        {
          id: 'product-3',
          price: 699,
          priceOld: null,
          name: 'Джемпер однотонный с круглой горловиной',
          badges: ['Новинка', 'Бестселлер'],
          sale: null,
          inFavorite: false,
          colors: [
            {
              hex: '#000000',
              name: 'Черный',
            },
            {
              hex: '#ffffff',
              name: 'Белый',
            },
            {
              hex: '#EAE5CF',
              name: 'Бежевый',
            },
            {
              hex: '#3736E0',
              name: 'Синий',
            },
            {
              hex: '#56BCE8',
              name: 'Голубой',
            },
            {
              hex: '#126354',
              name: 'Зеленый',
            },
            {
              hex: '#3736E0',
              name: 'Синий',
            },
            {
              hex: '#56BCE8',
              name: 'Голубой',
            },
            {
              hex: '#126354',
              name: 'Зеленый',
            },
          ],
          images: [
            '/img/product-card-1.jpg',
            '/img/product-card-2.jpg',
            '/img/product-card-3.jpg',
            '/img/product-card-4.jpg',
          ],
        },
        {
          id: 'product-4',
          price: 699,
          priceOld: null,
          name: 'Джемпер однотонный с круглой горловиной',
          badges: ['Новинка', 'Бестселлер'],
          sale: null,
          inFavorite: false,
          colors: [
            {
              hex: '#000000',
              name: 'Черный',
            },
            {
              hex: '#ffffff',
              name: 'Белый',
            },
            {
              hex: '#EAE5CF',
              name: 'Бежевый',
            },
            {
              hex: '#3736E0',
              name: 'Синий',
            },
            {
              hex: '#56BCE8',
              name: 'Голубой',
            },
            {
              hex: '#126354',
              name: 'Зеленый',
            },
            {
              hex: '#3736E0',
              name: 'Синий',
            },
            {
              hex: '#56BCE8',
              name: 'Голубой',
            },
            {
              hex: '#126354',
              name: 'Зеленый',
            },
          ],
          images: [
            '/img/product-card-1.jpg',
            '/img/product-card-2.jpg',
            '/img/product-card-3.jpg',
            '/img/product-card-4.jpg',
          ],
        },
        {
          id: 'product-5',
          price: 699,
          priceOld: null,
          name: 'Джемпер однотонный с круглой горловиной',
          badges: ['Новинка', 'Бестселлер'],
          sale: null,
          inFavorite: false,
          colors: [
            {
              hex: '#000000',
              name: 'Черный',
            },
            {
              hex: '#ffffff',
              name: 'Белый',
            },
            {
              hex: '#EAE5CF',
              name: 'Бежевый',
            },
            {
              hex: '#3736E0',
              name: 'Синий',
            },
            {
              hex: '#56BCE8',
              name: 'Голубой',
            },
            {
              hex: '#126354',
              name: 'Зеленый',
            },
            {
              hex: '#3736E0',
              name: 'Синий',
            },
            {
              hex: '#56BCE8',
              name: 'Голубой',
            },
            {
              hex: '#126354',
              name: 'Зеленый',
            },
          ],
          images: [
            '/img/product-card-1.jpg',
            '/img/product-card-2.jpg',
            '/img/product-card-3.jpg',
            '/img/product-card-4.jpg',
          ],
        },
        {
          id: 'product-6',
          price: 699,
          priceOld: null,
          name: 'Джемпер однотонный с круглой горловиной',
          badges: ['Новинка', 'Бестселлер'],
          sale: null,
          inFavorite: false,
          colors: [
            {
              hex: '#000000',
              name: 'Черный',
            },
            {
              hex: '#ffffff',
              name: 'Белый',
            },
            {
              hex: '#EAE5CF',
              name: 'Бежевый',
            },
            {
              hex: '#3736E0',
              name: 'Синий',
            },
            {
              hex: '#56BCE8',
              name: 'Голубой',
            },
            {
              hex: '#126354',
              name: 'Зеленый',
            },
            {
              hex: '#3736E0',
              name: 'Синий',
            },
            {
              hex: '#56BCE8',
              name: 'Голубой',
            },
            {
              hex: '#126354',
              name: 'Зеленый',
            },
          ],
          images: [
            '/img/product-card-1.jpg',
            '/img/product-card-2.jpg',
            '/img/product-card-3.jpg',
            '/img/product-card-4.jpg',
          ],
        },
        {
          id: 'product-7',
          price: 699,
          priceOld: null,
          name: 'Джемпер однотонный с круглой горловиной',
          badges: ['Новинка', 'Бестселлер'],
          sale: null,
          inFavorite: false,
          colors: [
            {
              hex: '#000000',
              name: 'Черный',
            },
            {
              hex: '#ffffff',
              name: 'Белый',
            },
            {
              hex: '#EAE5CF',
              name: 'Бежевый',
            },
            {
              hex: '#3736E0',
              name: 'Синий',
            },
            {
              hex: '#56BCE8',
              name: 'Голубой',
            },
            {
              hex: '#126354',
              name: 'Зеленый',
            },
            {
              hex: '#3736E0',
              name: 'Синий',
            },
            {
              hex: '#56BCE8',
              name: 'Голубой',
            },
            {
              hex: '#126354',
              name: 'Зеленый',
            },
          ],
          images: [
            '/img/product-card-1.jpg',
            '/img/product-card-2.jpg',
            '/img/product-card-3.jpg',
            '/img/product-card-4.jpg',
          ],
        },
      ],
    }
  },
  computed: {
    breadcrumbs() {
      let breadcrumbs = [
        {
          title: 'Результаты поиска',
        },
      ]

      return breadcrumbs
    },
  },
  methods: {
    openSelector() {
      this.selectorOpened = true
    },
    closeSelector() {
      this.selectorOpened = false
    },
  },
  mounted() {
    this.$nuxt.$on('closeMobileSelect', this.closeSelector)
  },
}
</script>

<style lang="scss">
.favorite-page {
  &__list {
    display: grid;
    gap: 48px 24px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    @media (max-width: $m) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    @media (max-width: $s) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 32px 16px;
    }
    @media (max-width: $xs) {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }

  &__fail {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 88px;
    gap: 16px;
  }

  &__selector {
    width: 196px;
    @media (max-width: $s) {
      display: none;
    }
  }

  &__mobile-selector {
    width: 196px;
    margin-bottom: 24px;
    display: none;
    @media (max-width: $s) {
      display: flex;
    }
    @media (max-width: $xs) {
      display: none;
    }
  }

  &__mobile-selector-small {
    display: none;
    @media (max-width: $xs) {
      display: flex;
    }
  }

  &__select {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    pointer-events: none;
    opacity: 0;
    // transform: translateY(24px);
    width: 100vw;
    height: 100vh;
    // transition: transform 0.3s ease, opacity 0.3s ease;
    display: none;
    .mobile-select__area {
      opacity: 0;
      transition: opacity 0.5s ease;
    }
    .mobile-select__content {
      transform: translateY(100%);
      transition: transform 0.5s ease;
    }
    &.opened {
      z-index: 100;
      opacity: 1;
      pointer-events: all;
      .mobile-select__area {
        opacity: 1;
      }
      .mobile-select__content {
        transform: translateY(0);
      }
    }
    @media (max-width: $s) {
      display: block;
    }
  }

  &__text {
    color: $brand-secondary;
    @include fontSize(16, 24);
    font-weight: 400;
    text-align: center;
  }

  &__actions {
    display: flex;
    margin-bottom: 24px;
    justify-content: space-between;
    @media (max-width: $s) {
      margin-bottom: 0;
    }
    @media (max-width: $xs) {
      margin-bottom: 24px;
      .reverse.delete {
        width: 100%;
        margin-left: 8px;
      }
    }
  }
}
</style>