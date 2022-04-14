<template lang="pug">
.page__content
  .container
    Breadcrumbs(:data='breadcrumbs')
    Headline(title='Корзина')
    CartPage(:data='products', :colors='colors', :sizes='sizes')
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          image: '/img/product-image-1.jpg',
          price: 699,
          priceOld: 999,
          name: 'Джемпер однотонный с круглой горловиной',
          color: 'Чёрный',
          size: 3,
          quantity: 5,
        },
        {
          image: '/img/product-image-1.jpg',
          price: 699,
          priceOld: 999,
          name: 'Джемпер однотонный с круглой горловиной',
          color: 'Чёрный',
          size: 0,
          quantity: 3,
        },
        {
          image: '/img/product-image-1.jpg',
          price: 699,
          name: 'Джемпер однотонный с круглой горловиной',
          color: 'Чёрный',
          size: 1,
          quantity: 1,
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
            value: 'xs',
            label: 'XS',
          },
          {
            value: 's',
            label: 'S',
          },
          {
            value: 'm',
            label: 'M',
          },
          {
            value: 'l',
            label: 'L',
          },
          {
            value: 'xl',
            label: 'XL',
          },
          {
            value: 'xxl',
            label: 'XXL',
          },
             
        ],
    }
  },
  computed: {
    breadcrumbs() {
      let breadcrumbs = [
        {
          title: 'Корзина',
        },
      ]

      return breadcrumbs
    },
  },
}
</script>