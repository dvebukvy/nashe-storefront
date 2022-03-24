<template lang="pug">
.slider  
  .slider__container(ref='container')
    .slider__wrapper 
      .slider__slide(v-for='item in data', :key='item.id')
        component(:is='object', :data='item') 
  .slider__controls
    button.slider__prev(type='button', title='Предыдущий слайд', ref='prev')
      svg-icon.slider__icon.prev(name='arrow-slide-r-20')
    button.slider__next(type='button', title='Следующий слайд', ref='next')
      svg-icon.slider__icon(name='arrow-slide-r-20')
</template>

<script>
import Swiper, { Navigation } from 'swiper'
Swiper.use(Navigation)
export default {
  props: ['data', 'object', 'title'],
  methods: {
    initSlider() {
      this.swiper = new Swiper(this.$refs.container, {
        wrapperClass: 'slider__wrapper',
        slideClass: 'slider__slide',
        slidesPerView: 'auto',
        spaceBetween: 24,
        navigation: {
          nextEl: this.$refs.next,
          prevEl: this.$refs.prev,
        },
        breakpoints: {          
          1280: {          
            slidesPerView: 4,
          },
          1024: {          
            slidesPerView: 3,
          },
        },
      })
    },
  },
  mounted() {
    this.initSlider()
  },
}
</script>

<style src='./slider.scss' lang="scss">
</style>