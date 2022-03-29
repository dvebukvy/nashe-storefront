<template lang="pug">
.page__content
  .container
    Breadcrumbs(:data='breadcrumbs', code='23КЛ-2401–201')
    Headline(title='Джемперы')
    .category-page
      .category-page__filters-mobile(:class='{active: filtersOpened}')
        MobileFilter(:data='filters')      
      .category-page__actions
        Button(label='Категории и фильтры' class='is-filter filtered reverse' icon='filter' width='196px' @click.native='openFilters')
        Select(
            style='width: 196px'
            :data='selector',
            placeholder='Обычный селект',
            :searchable='false',
            :multiple='false',
            :selectedData='selector[0]'
          )
      .category-page__filters
        CategoryFilter(:data='filters')
      .category-page__content
        .category-page__selector          
          Select(
            :data='selector',
            placeholder='Обычный селект',
            :searchable='false',
            :multiple='false',
            :selectedData='selector[0]'
          )
        .category-page__selected
          FilteredItems
        .category-page__list
          ProductCard(v-for='item in products', :key='item.id', :data='item' class='in-grid')
        Pagination
</template>

<script>
export default {
  data() {
    return {
      filtersOpened: true,
      filters: {
        categories: [
          {
            label: 'Джемперы',
            value: 'Джемперы',
          },
          {
            label: 'Водолазки',
            value: 'Водолазки',
          },
          {
            label: 'Рубашки и блузки',
            value: 'Рубашки и блузки',
          },
          {
            label: 'Платья',
            value: 'Платья',
          },
          {
            label: 'Футболки',
            value: 'Футболки',
          },
          {
            label: 'Брюки',
            value: 'Брюки',
          },
          {
            label: 'Test',
            value: 'Test',
          },
          {
            label: 'Test',
            value: 'Test',
          },
          {
            label: 'Test',
            value: 'Test',
          },
          {
            label: 'Test',
            value: 'Test',
          },
          {
            label: 'Test',
            value: 'Test',
          },
          {
            label: 'Test',
            value: 'Test',
          },
          {
            label: 'Test',
            value: 'Test',
          },
          {
            label: 'Test',
            value: 'Test',
          },
        ],
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
            texture: '/img/texture-1.jpg',
            name: 'Разноцветный',
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
          {
            hex: '#56BCE8',
            name: 'Голубой',
          },
          {
            hex: '#126354',
            name: 'Зеленый',
          },
        ],
        sizes: [
          {
            name: '42',
            active: true,
          },
          {
            name: '44',
            disabled: true,
          },
          {
            name: '46',
          },
          {
            name: '48',
          },
          {
            name: '5',
            disabled: true,
          },
          {
            name: '52',
          },
          {
            name: '54',
          },
          {
            name: '56',
          },
          {
            name: '5844343',
            disabled: true,
          },
          {
            name: '60',
          },
        ],
        glowSizes: [
          {
            name: '42',
          },
          {
            name: '44',
          },
          {
            name: '46',
          },
          {
            name: '48',
          },
          {
            name: '57',
          },
          {
            name: '52',
          },
          {
            name: '54',
          },
          {
            name: '56',
          },
          {
            name: '58',
          },
          {
            name: '60',
          },
        ],
        hatSizes: [
          {
            name: '42',
          },
          {
            name: '44',
          },
          {
            name: '46',
          },
          {
            name: '48',
          },
          {
            name: '57',
          },
          {
            name: '52',
          },
          {
            name: '54',
          },
          {
            name: '56',
          },
          {
            name: '58',
          },
          {
            name: '60',
          },
        ],
        collections: [
          {
            label: 'Весна-лето 2020',
            value: 'Весна-лето 2020',
          },
          {
            label: 'Осень-зима 2020',
            value: 'Осень-зима 2020',
          },
          {
            label: 'Весна-лето 2021',
            value: 'Весна-лето 2021',
          },
          {
            label: 'Осень-зима 2021',
            value: 'Осень-зима 2021',
          },
          {
            label: 'Весна-лето 2022',
            value: 'Весна-лето 2022',
          },
          {
            label: 'Осень-зима 2022',
            value: 'Осень-зима 2022',
          },
        ],
      },
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
          title: 'Женщинам',
        },
      ]

      return breadcrumbs
    },
  },
  methods: {
    openFilters() {
      this.filtersOpened = true
    },
    closeFilters() {
      this.filtersOpened = false
    }
  },
}
</script>

<style lang="scss">
.category-page {
  display: grid;
  gap: 24px;
  grid-template-columns: 3fr 9fr;

  @media (max-width: $m) {
    grid-template-columns: 4fr 8fr;
  }

  @media (max-width: $s) {
    display: flex;
    flex-direction: column;
  }

  &__content {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    width: 100%;
  }

  &__filters-mobile {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transition: opacity, visibility, transform;
    transition-timing-function: ease;
    transition-duration: 0.3s;

    visibility: visible;

    transform: translateY(-32px);
    z-index: -1;
    opacity: 0;
    pointer-events: none;

    &.active {
      transform: translateY(0);
      opacity: 1;
      pointer-events: all;
      z-index: 100;
    }
  }

  &__filters {
    margin-right: 24px;
    @media (max-width: $s) {
      display: none;
    }
  }

  &__actions {
    display: none;
    @media (max-width: $s) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  &__selector {
    width: 196px;
    margin-bottom: 24px;
    @media (max-width: $s) {
      display: none;
    }
  }

  &__selected {
    margin-bottom: 24px;
    @media (max-width: $s) {
      display: none;
    }
  }

  &__list {
    display: grid;
    gap: 48px 24px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    @media (max-width: $m) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @media (max-width: $xs) {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }
}
</style>