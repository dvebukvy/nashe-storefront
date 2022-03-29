<template lang="pug">
.mobile-filter
  .mobile-filter__header
    div(v-if='level === 1')
    .header__action-button(v-if='level === 2', @click='backFirst')
      svg-icon.header__action-icon(name='chevron-left-24')
    p.mobile-filter__headline Категория и фильтры
    .mobile-filter__close
      svg-icon(name='close-24')
  .mobile-filter__body
    .mobile-filter__list(:class='{ active: level === 1 }')
      .mobile-filter__category(@click='setIndex(1)')
        .mobile-filter__link Категория
        svg-icon.mobile-filter__icon(name='chevron-right-20')
      .mobile-filter__category(@click='setIndex(2)')
        .mobile-filter__link Цена
        svg-icon.mobile-filter__icon(name='chevron-right-20')
      .mobile-filter__category(@click='setIndex(3)')
        .mobile-filter__link Цвет
        svg-icon.mobile-filter__icon(name='chevron-right-20')
      .mobile-filter__category(@click='setIndex(4)')
        .mobile-filter__link Размер
        svg-icon.mobile-filter__icon(name='chevron-right-20')
      .mobile-filter__category(@click='setIndex(5)')
        .mobile-filter__link Коллекция
        svg-icon.mobile-filter__icon(name='chevron-right-20')
      .mobile-filter__category
        .mobile-filter__link Товары со скидкой
        Toggle
    .mobile-filter__list(:class='{ active: level === 2 }')
      .mobile-filter__content(v-if='activeIndex === 1')
        .mobile-filter__item(v-for='item in data.categories', :key='item.id')
          .mobile-filter__link {{ item.label }}
          Radio(:value='item.value') 
      .mobile-filter__content(v-if='activeIndex === 2')
        .mobile-filter__item
          Range
      .mobile-filter__content(v-if='activeIndex === 3')
        .mobile-filter__item(v-for='item in data.colors', :key='item.id')
          .mobile-filter__color
            img.mobile-filter__texture(
              v-if='item.texture',
              :src='item.texture'
            )
            .mobile-filter__hex(
              :style='"background-color:" + item.hex',
              :class='{ white: item.hex === "#ffffff" }',
              v-if='item.hex'
            )
            .mobile-filter__link {{ item.name }}
          Checkbox(:value='item.hex') 
  .mobile-filter__footer
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      activeIndex: 0,
      activeSecondIndex: 0,
      level: 1,
    }
  },
  methods: {
    setIndex(index) {
      this.activeIndex = index
      this.level = 2
    },
    setSecondIndex(index) {
      this.activeSecondIndex = index
      this.level = 3
    },
    backFirst() {
      this.level = 1
    },
    backSecond() {
      this.level = 2
    },
    close() {
      this.$nuxt.$emit('closeMenu')
      this.level = 0
      this.activeIndex = 0
      this.activeSecondIndex = 0
    },
    showFirst() {
      this.level = 1
    },
  },
  mounted() {
    this.$nuxt.$on('showFirst', this.showFirst)
  },
}
</script>

<style lang="scss" src='./mobile-filter.scss'>
</style>