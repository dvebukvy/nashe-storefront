<template lang="pug">
.product-card
  .product-card__images
    .product-card__sections(
      :style='"grid-template-columns: repeat(" + data.images.length + ", minmax(0, 1fr))"'
    )
      .product-card__section(
        v-for='(image, index) in data.images',
        :key='index',
        @mouseover='setIndex(index)'
      )
    img.product-card__image(
      :src='image',
      v-for='(image, index) in data.images',
      :key='index',
      :class='{ active: activeIndex === index }'
    )
    .product-card__progress(
      :style='"grid-template-columns: repeat(" + data.images.length + ", minmax(0, 1fr))"'
    )
      .product-card__indicator(
        v-for='(image, index) in data.images',
        :key='index',
        :class='{ active: activeIndex === index }'
      )
    .product-card__badges
      Badge(:label='item', v-for='item in data.badges', :key='item.id' v-if="data.badges")
      Badge(:label='data.sale', :sale='true' v-if="data.sale")
    .product-card__favorires
      FavoriteButton(:active='data.inFavorite')
  .product-card__prices
    p.product-card__price(:class='{ new: data.priceOld }') {{ data.price }} руб.
    p.product-card__price.old(v-if='data.priceOld') {{ data.priceOld }} руб.
  p.product-card__name {{ data.name }}
  .product-card__colors
    .product-card__color(
      :style='"background-color:" + item.hex',
      :title='item.name',
      v-for='item in data.colors.slice(0, 6)',
      :key='item.id'
    )
    .product-card__last-number(v-if='lastNumber') +{{ lastNumber }}
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      activeIndex: 0,
    }
  },
  computed: {
    lastNumber() {
      if (this.data.colors.length - 6 > 0) {
        return this.data.colors.length - 6
      } else {
        return null
      }
    },
  },
  methods: {
    setIndex(index) {
      this.activeIndex = index
    },
  },
}
</script>

<style lang="scss" src='./product-card.scss'>
</style>