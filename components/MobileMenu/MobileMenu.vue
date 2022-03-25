<template lang="pug">
.mobile-menu
  .mobile-menu__header
    nuxt-link(to='/', v-if='level === 1')
      svg-icon.header__logo(name='logotype')
    .header__action-button(v-if='level === 2', @click='backFirst')
      svg-icon.header__action-icon(name='chevron-left-24')
    .header__action-button(v-if='level === 3', @click='backSecond')
      svg-icon.header__action-icon(name='chevron-left-24')
    h2.mobile-menu__headline(v-if='level === 2') {{ data[activeIndex].title }}
    h2.mobile-menu__headline(v-if='level === 3') {{ data[activeIndex].categories[activeSecondIndex].title }}
    .header__action-button 
      svg-icon.header__action-icon(name='close-24', @click='close')
  .mobile-menu__body
    .mobile-menu__list(:class='{ active: level === 1 }')
      .mobile-menu__category(
        v-for='(item, index) in data',
        :key='index',
        @click='setIndex(index)'
      )
        .mobile-menu__link(:class='{ red: item.title === "Распродажа" }') {{ item.title }}
        svg-icon.mobile-menu__icon(name='chevron-right-20', v-if='item.link')

      nuxt-link.mobile-menu__category(to='/')
        .mobile-menu__link Доставка и оплата
      nuxt-link.mobile-menu__category(to='/')
        .mobile-menu__link Возврат товаров
      nuxt-link.mobile-menu__category(to='/')
        .mobile-menu__link О компании
      nuxt-link.mobile-menu__category(to='/')
        .mobile-menu__link Магазины
      nuxt-link.mobile-menu__category(to='/')
        .mobile-menu__link Контакты

    .mobile-menu__list(:class='{ active: level === 2 }')
      nuxt-link.mobile-menu__category(
        :to='data[activeIndex].categories.link',
        v-if='data[activeIndex].categories'
      )
        .mobile-menu__link Все товары
      .mobile-menu__category(
        v-for='(item, indexCat) in data[activeIndex].categories',
        :key='indexCat',
        @click='setSecondIndex(indexCat)',
        v-if='data[activeIndex].categories'
      )
        .mobile-menu__link(:class='{ red: item.title === "Распродажа" }') {{ item.title }}
        svg-icon.mobile-menu__icon(name='chevron-right-20', v-if='item.link')

      nuxt-link.mobile-menu__category(
        :to='data[activeIndex].link',
        v-if='data[activeIndex].list'
      )
        .mobile-menu__link Все товары
      .mobile-menu__section(
        v-if='data[activeIndex].list && data[activeIndex].list.main'
      ) 
        nuxt-link.mobile-menu__category(
          :to='item.link',
          v-for='(item, indexMain) in data[activeIndex].list.main',
          :key='indexMain',
          @click.native='close'
        )
          .mobile-menu__link(:class='{ red: item.label === "Распродажа" }') {{ item.label }}
      .mobile-menu__section(
        v-if='data[activeIndex].list && data[activeIndex].list.other'
      )
        nuxt-link.mobile-menu__category(
          :to='item.link',
          v-for='(item, indexOther) in data[activeIndex].list.other',
          :key='indexOther',
          @click.native='close'
        )
          .mobile-menu__link(:class='{ red: item.label === "Распродажа" }') {{ item.label }}

    .mobile-menu__list(:class='{ active: level === 3 }')
      .mobile-menu__section(v-if='level === 3')
        nuxt-link.mobile-menu__category(to='/')
          .mobile-menu__link Все товары
      .mobile-menu__section(v-if='level === 3')
        nuxt-link.mobile-menu__category(
          @click.native='close',
          :to='item.link',
          v-for='(item, index) in data[activeIndex].categories[activeSecondIndex].list.main',
          :key='index'
        )
          .mobile-menu__link(:class='{ red: item.title === "Распродажа" }') {{ item.label }}
        nuxt-link.mobile-menu__category(
          @click.native='close',
          :to='item.link',
          v-for='(item, index) in data[activeIndex].categories[activeSecondIndex].list.other',
          :key='index'
        )
          .mobile-menu__link(:class='{ red: item.title === "Распродажа" }') {{ item.label }}
    .mobile-menu__bottom
      Button(label='Войти или зарегистрироваться' class='outline')
      .mobile-menu__contacts
        Contact
        Socials
      Button(label='Перейти на оптовый сайт' link='/test')
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      activeIndex: 0,
      activeSecondIndex: 0,
      level: 0,
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
    }
  },
  mounted() {
    this.$nuxt.$on('showFirst', this.showFirst)
  },
}
</script>



<style lang="scss">
@import './mobile-menu.scss';
@import '../Header/header.scss';
</style>