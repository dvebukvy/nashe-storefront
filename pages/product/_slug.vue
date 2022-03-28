<template lang="pug">
.page__content
  .container
    Breadcrumbs(:data='breadcrumbs', code='23КЛ-2401–201')
    ProductPage(:data='product')
</template>

<script>
export default {
  data() {
    return {
      product: {
        id: 'product-1',
        price: 699,
        priceOld: 999,
        name: 'Джемпер однотонный с круглой горловиной',
        badges: ['Новинка'],
        sale: 30,
        inFavorite: true,
        images: [
          '/img/product-image-1.jpg',
          '/img/product-image-2.jpg',
          '/img/product-image-3.jpg',
          '/img/product-image-4.jpg',
          '/img/product-image-3.jpg',
          '/img/product-image-4.jpg',
          '/img/product-image-1.jpg',
          '/img/product-image-2.jpg',
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
      },
    }
  },
  computed: {
    breadcrumbs() {
      let breadcrumbs = [
        {
          title: 'Женщинам',
          url: '/catalog/women',
        },
        {
          title: 'Джемперы',
          url: '/categories/jempers',
        },
        {
          title: 'Джемпер однотонный с круглой горловиной',
        },
      ]

      return breadcrumbs
    },
  },
}
</script>