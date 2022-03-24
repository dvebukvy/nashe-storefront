<template lang="pug">
.page__content
  .container
    SliderMain
    SectionMain
      CategoriesMain 
    SectionMain(title='Новинки')
      Slider(:data='poducts_new' object='ProductCard')
    SectionMain(title='Бестселлеры')
      Slider(:data='poducts_new' object='ProductCard')
    SectionMain(title='Блог' :button='{label: "Все статьи", link: "blog"}')
      BlogMain
</template>

<script>
export default {
  data() {
    return {
      poducts_new: [
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
}
</script>