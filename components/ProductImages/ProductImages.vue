<template lang='pug'>
.product-images
  .product-images__mobile-slider(ref='mobileContainer')
    .product-images__mobile-wrapper 
      .product-images__mobile-slide(
        v-for='(item, index) in data',
        :key='index'
      )
        img.product-images__mobile-img(:src='item', @click='openModalImages(index)' ) 
    .product-images__pagination
  .product-images__grid(:class='computedGrid')
    img.product-images__image(
      :src='item',
      v-for='(item, index) in data',
      :key='index',
      @click='openModalImages(index)'
      :class='"grid" + index'
    )
  .product-images__slider(v-if='opened')
    .product-images__thumbs(ref='thumbs') 
      .product-images__thumbs-wrapper
        .product-images__thumbs-slide(
          v-for='(item, index) in data',
          :key='index'
        )
          img.product-images__thumbs-image(:src='item') 
    .product-images__container(ref='container')
      .product-images__wrapper 
        .product-images__slide(v-for='(item, index) in data', :key='index')
          img.product-images__img(:src='item') 
    .product-images__pagination
    .product-images__close(@click='close')
      svg-icon(name='close-16') 
</template>



<script>
import Swiper, { Thumbs, Pagination } from 'swiper'
Swiper.use([Thumbs, Pagination])
export default {
  props: ['data'],
  data() {
    return {
      opened: false,
      activeIndex: 0,
    }
  },
  computed: {
    computedGrid() {
      if (this.data.length === 1) {
        return 'one'
      }
      if (this.data.length === 2) {
        return 'two'
      }
      if (this.data.length === 3) {
        return 'three'
      }
      if (this.data.length === 4) {
        return 'four'
      }
      if (this.data.length === 5) {
        return 'five'
      }
      if (this.data.length === 6) {
        return 'six'
      }
      if (this.data.length === 7) {
        return 'seven'
      }
      if (this.data.length === 8) {
        return 'eight'
      }
      if (this.data.length === 9) {
        return 'nine'
      }
    }
  },
  methods: {
    openModalImages(index) {
      this.opened = true
      this.activeIndex = index
      setTimeout(() => {
        this.initSwiper()
        console.log(this.swiper)
      }, 0)
    },
    close() {
      this.opened = false
    },
    initSwiper() {
      const swiper = new Swiper(this.$refs.container, {
        wrapperClass: 'product-images__wrapper',
        slideClass: 'product-images__slide',
        slidesPerView: 1,
        breakpoints: {},
        pagination: {
          el: '.product-images__pagination',
          type: 'bullets',
        },
        thumbs: {
          swiper: new Swiper(this.$refs.thumbs, {
            wrapperClass: 'product-images__thumbs-wrapper',
            slideClass: 'product-images__thumbs-slide',
            direction: 'vertical',
            slidesPerView: 1,
          }),
        },
      })
      swiper.slideTo(this.activeIndex, false, false)
    },
    initMobileSwiper() {
      const swiper = new Swiper(this.$refs.mobileContainer, {
        wrapperClass: 'product-images__mobile-wrapper',
        slideClass: 'product-images__mobile-slide',
        slidesPerView: 1,
        breakpoints: {
          768: {
            slidesPerView: 2,
          },
        },
        pagination: {
          el: '.product-images__pagination',
          type: 'bullets',
        },
      })
      swiper.slideTo(this.activeIndex, false, false)
    },
  },
  mounted() {
    window.addEventListener('scroll', () => {
      if (window.innerWidth <= 1024) {
        setTimeout(() => {
          this.initMobileSwiper()
        }, 500);
        
      }
    })
    if (window.innerWidth <= 1024) {
      this.initMobileSwiper()
    }
  },
}
</script>

<style lang='scss' src='./product-images.scss'></style>