<template lang="pug">
.slider-main 
  .slider-main__container(ref='container')
    .slider-main__wrapper 
      .slider-main__slide
        .slider-main__text-container
          h2.slider-main__title Большая распродажа
          p.slider-main__text Товары со скидками до 70%
        img.slider-main__image(src='/img/main-slider-1.jpg')
      .slider-main__slide
        .slider-main__text-container
          h2.slider-main__title Мужчины
          p.slider-main__text Товары со скидками до 70%
        img.slider-main__image(src='/img/main-slider-2.jpg')
      .slider-main__slide
        .slider-main__text-container
          h2.slider-main__title Мужчины
          p.slider-main__text Товары со скидками до 70%
        img.slider-main__image(src='/img/main-slider-2.jpg')
      .slider-main__slide
        .slider-main__text-container
          h2.slider-main__title Мужчины
          p.slider-main__text Товары со скидками до 70%
        img.slider-main__image(src='/img/main-slider-2.jpg')
      .slider-main__slide
        .slider-main__text-container
          h2.slider-main__title Мужчины
          p.slider-main__text Товары со скидками до 70%
        img.slider-main__image(src='/img/main-slider-2.jpg')
      .slider-main__slide
        .slider-main__text-container
          h2.slider-main__title Мужчины
          p.slider-main__text Товары со скидками до 70%
        img.slider-main__image(src='/img/main-slider-2.jpg')
      .slider-main__slide
        .slider-main__text-container
          h2.slider-main__title Мужчины
          p.slider-main__text Товары со скидками до 70%
        img.slider-main__image(src='/img/main-slider-2.jpg')
      .slider-main__slide
        .slider-main__text-container
          h2.slider-main__title Мужчины
          p.slider-main__text Товары со скидками до 70%
        img.slider-main__image(src='/img/main-slider-2.jpg')

    .slider-main__controls
      button.slider-main__prev(
        type='button',
        title='Предыдущий слайд',
        ref='prev'
      )
        svg-icon.slider-main__icon.prev(name='arrow-slide-r-20')
      button.slider-main__next(
        type='button',
        title='Следующий слайд',
        ref='next'
      )
        svg-icon.slider-main__icon(name='arrow-slide-r-20')
  .slider-main__pagination(ref='pagination')
      
</template>

<script>
import Swiper, { Navigation, Pagination } from 'swiper'
Swiper.use(Navigation, Pagination)
export default {
  methods: {
    initSlider() {
      this.swiper = new Swiper(this.$refs.container, {
        wrapperClass: 'slider-main__wrapper',
        slideClass: 'slider-main__slide',
        slidesPerView: 1,
        loop:true,

        navigation: {
          nextEl: this.$refs.next,
          prevEl: this.$refs.prev,
        },
        pagination: {
          el: this.$refs.pagination,
          type: 'bullets',
          dynamicBullets: true,
          dynamicMainBullets: 5
        },       
      })
    },
  },
  mounted() {
    this.initSlider()
  },
}
</script>

<style src='./slider-main.scss' lang="scss">
</style>