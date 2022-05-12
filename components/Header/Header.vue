<template lang="pug">
.header
  .header__descktop
    .header__background
      .container
        .header__top
          .header__links
            nuxt-link.header__sublink(to='/') Доставка и оплата
            nuxt-link.header__sublink(to='/') Обмен и возврат
            nuxt-link.header__sublink(to='/about') О компании
            nuxt-link.header__sublink(to='/shops') Магазины
            nuxt-link.header__sublink(to='/contacts') Контакты
            nuxt-link.header__sublink(to='/') Блог
            a.header__sublink-badge(href='/', target='_blanc') Оптовый сайт
          Contact.small
    .header__line
      .container
        CartDropdown(v-if='showCart', v-click-outside='closeCart')
        .header__bottom
          .header__links
            nuxt-link(to='/')
              svg-icon.header__logo(name='logotype')
            .header__nav-list
              NavItem(v-for='item in navMenu', :key='item.id', :data='item')
          .header__actions
            .header__action-button 
              svg-icon.header__action-icon(
                name='search-24',
                @click='openPopupSearch'
              )
            .header__action-button
              nuxt-link(to='/user')
                svg-icon.header__action-icon(name='user-24')
            .header__action-button
              nuxt-link(to='/favorites')
                svg-icon.header__action-icon(name='favorite-24')
            .header__action-button(@click='showCart = !showCart')
              span.header__action-quantity 3
              svg-icon.header__action-icon(name='cart-24')
  .header__mobile
    .header__mobile-menu(:class='{ active: menuVisible }')
      MobileMenu(:data='navMenu', :class='{ active: menuVisible }')
    .header__block
      .header__action-button(@click='openMenu')
        svg-icon.header__action-icon(name='list-24')
      .header__action-button 
        svg-icon.header__action-icon(name='search-24')
    .header__block
      nuxt-link(to='/')
        svg-icon.header__logo(name='logotype')
    .header__block
      .header__action-button 
        nuxt-link(to='/favorites')
          svg-icon.header__action-icon(name='favorite-24')
      .header__action-button 
        span.header__action-quantity 3
        svg-icon.header__action-icon(name='cart-24')
</template>

<script>
import PopupSearch from '@/components/Popup/PopupSearch'
export default {
  data() {
    return {
      menuVisible: false,
      showCart: false,
      navMenu: [
        {
          title: 'Женщинам',
          link: '/test',
          list: {
            main: [
              {
                label: 'Распродажа',
                link: '/test',
              },
              {
                label: 'Новинки',
                link: '/test',
              },
              {
                label: 'Базовая одежда',
                link: '/test',
              },
              {
                label: 'Вязаные трикотажные вещи',
                link: '/test',
              },
              {
                label: 'Одежда для сна и отдыха',
                link: '/test',
              },
              {
                label: 'Размеры 54–60',
                link: '/test',
              },
              {
                label: 'Новогодняя коллекция',
                link: '/test',
              },
            ],
            other: [
              {
                label: 'Джемперы',
                link: '/test',
              },
              {
                label: 'Водолазки',
                link: '/test',
              },
              {
                label: 'Рубашки, блузки',
                link: '/test',
              },
              {
                label: 'Платья',
                link: '/test',
              },
              {
                label: 'Футболки',
                link: '/test',
              },
              {
                label: 'Брюки',
                link: '/test',
              },
              {
                label: 'Легинсы и лосины',
                link: '/test',
              },
              {
                label: 'Шорты',
                link: '/test',
              },
              {
                label: 'Юбки',
                link: '/test',
              },
              {
                label: 'Сорочки',
                link: '/test',
              },
              {
                label: 'Туники',
                link: '/test',
              },
              {
                label: 'Халаты',
                link: '/test',
              },
              {
                label: 'Пижамы и комплекты',
                link: '/test',
              },
              {
                label: 'Нижнее бельё',
                link: '/test',
              },
              {
                label: 'Головные уборы',
                link: '/test',
              },
              {
                label: 'Перчатки и варежки',
                link: '/test',
              },
            ],
          },
        },
        {
          title: 'Мужчинам',
          link: '/test',
          list: {
            main: [
              {
                label: 'Распродажа',
                link: '/test',
              },
              {
                label: 'Новинки',
                link: '/test',
              },
              {
                label: 'Базовая одежда',
                link: '/test',
              },
              {
                label: 'Размеры 54–60',
                link: '/test',
              },
              {
                label: 'Новогодняя коллекция',
                link: '/test',
              },
            ],
            other: [
              {
                label: 'Джемперы',
                link: '/test',
              },
              {
                label: 'Водолазки',
                link: '/test',
              },
              {
                label: 'Футболки',
                link: '/test',
              },
              {
                label: 'Брюки',
                link: '/test',
              },
              {
                label: 'Шорты',
                link: '/test',
              },
              {
                label: 'Нижнее бельё',
                link: '/test',
              },
              {
                label: 'Перчатки и варежки',
                link: '/test',
              },
            ],
          },
        },
        {
          title: 'Детям',
          link: '/test',
          categories: [
            {
              title: 'Девочкам',
              link: '/test',
              list: {
                main: [
                  {
                    label: 'Распродажа',
                    link: '/test',
                  },
                  {
                    label: 'Новинки',
                    link: '/test',
                  },
                  {
                    label: 'Базовая одежда',
                    link: '/test',
                  },
                  {
                    label: 'Новогодняя коллекция',
                    link: '/test',
                  },
                ],
                other: [
                  {
                    label: 'Брюки',
                    link: '/test',
                  },
                  {
                    label: 'Водолазки',
                    link: '/test',
                  },
                  {
                    label: 'Джемперы',
                    link: '/test',
                  },
                ],
              },
            },
            {
              title: 'Мальчикам',
              link: '/test',
              list: {
                main: [
                  {
                    label: 'Распродажа',
                    link: '/test',
                  },

                  {
                    label: 'Новинки',
                    link: '/test',
                  },
                  {
                    label: 'Новгодняя коллекция',
                    link: '/test',
                  },
                ],
                other: [
                  {
                    label: 'Брюки',
                    link: '/test',
                  },
                  {
                    label: 'Водолазки',
                    link: '/test',
                  },
                  {
                    label: 'Джемперы',
                    link: '/test',
                  },
                  {
                    label: 'Шарфы',
                    link: '/test',
                  },
                  {
                    label: 'Шорты',
                    link: '/test',
                  },
                  {
                    label: 'Пижамы',
                    link: '/test',
                  },
                  {
                    label: 'Перчатки и варежки',
                    link: '/test',
                  },
                ],
              },
            },
            {
              title: 'Новорождённым',
              link: '/test',
              list: {
                main: [
                  {
                    label: 'Распродажа',
                    link: '/test',
                  },

                  {
                    label: 'Новинки',
                    link: '/test',
                  },
                  {
                    label: 'Новгодняя коллекция',
                    link: '/test',
                  },
                ],
                other: [
                  {
                    label: 'Брюки',
                    link: '/test',
                  },
                  {
                    label: 'Водолазки',
                    link: '/test',
                  },
                  {
                    label: 'Джемперы',
                    link: '/test',
                  },
                  {
                    label: 'Шарфы',
                    link: '/test',
                  },
                  {
                    label: 'Шорты',
                    link: '/test',
                  },
                  {
                    label: 'Пижамы',
                    link: '/test',
                  },
                  {
                    label: 'Перчатки и варежки',
                    link: '/test',
                  },
                ],
              },
            },
          ],
        },
        {
          title: 'Носки и колготки',
          link: '/test',
          categories: [
            {
              title: 'Женщинам',
              link: '/test',
              list: {
                main: [
                  {
                    label: 'Распродажа',
                    link: '/test',
                  },
                  {
                    label: 'Новинки',
                    link: '/test',
                  },
                  {
                    label: 'Базовая одежда',
                    link: '/test',
                  },
                  {
                    label: 'Новогодняя коллекция',
                    link: '/test',
                  },
                ],
                other: [
                  {
                    label: 'Брюки',
                    link: '/test',
                  },
                  {
                    label: 'Водолазки',
                    link: '/test',
                  },
                  {
                    label: 'Джемперы',
                    link: '/test',
                  },
                ],
              },
            },
            {
              title: 'Мужчинам',
              link: '/test',
              list: {
                main: [
                  {
                    label: 'Распродажа',
                    link: '/test',
                  },

                  {
                    label: 'Новинки',
                    link: '/test',
                  },
                  {
                    label: 'Новгодняя коллекция',
                    link: '/test',
                  },
                ],
                other: [
                  {
                    label: 'Брюки',
                    link: '/test',
                  },
                  {
                    label: 'Водолазки',
                    link: '/test',
                  },
                  {
                    label: 'Джемперы',
                    link: '/test',
                  },
                  {
                    label: 'Шарфы',
                    link: '/test',
                  },
                  {
                    label: 'Шорты',
                    link: '/test',
                  },
                  {
                    label: 'Пижамы',
                    link: '/test',
                  },
                  {
                    label: 'Перчатки и варежки',
                    link: '/test',
                  },
                ],
              },
            },
            {
              title: 'Детям',
              link: '/test',
              list: {
                main: [
                  {
                    label: 'Распродажа',
                    link: '/test',
                  },

                  {
                    label: 'Новинки',
                    link: '/test',
                  },
                  {
                    label: 'Новгодняя коллекция',
                    link: '/test',
                  },
                ],
                other: [
                  {
                    label: 'Брюки',
                    link: '/test',
                  },
                  {
                    label: 'Водолазки',
                    link: '/test',
                  },
                  {
                    label: 'Джемперы',
                    link: '/test',
                  },
                  {
                    label: 'Шарфы',
                    link: '/test',
                  },
                  {
                    label: 'Шорты',
                    link: '/test',
                  },
                  {
                    label: 'Пижамы',
                    link: '/test',
                  },
                  {
                    label: 'Перчатки и варежки',
                    link: '/test',
                  },
                ],
              },
            },
          ],
        },
        {
          title: 'Подарки',
          link: '/test',
          categories: [
            {
              title: 'Для неё',
              link: '/test',
              list: {
                main: [
                  {
                    label: 'Распродажа',
                    link: '/test',
                  },
                  {
                    label: 'Новинки',
                    link: '/test',
                  },
                  {
                    label: 'Базовая одежда',
                    link: '/test',
                  },
                  {
                    label: 'Новогодняя коллекция',
                    link: '/test',
                  },
                ],
                other: [
                  {
                    label: 'Брюки',
                    link: '/test',
                  },
                  {
                    label: 'Водолазки',
                    link: '/test',
                  },
                  {
                    label: 'Джемперы',
                    link: '/test',
                  },
                ],
              },
            },
            {
              title: 'Для него',
              link: '/test',
              list: {
                main: [
                  {
                    label: 'Распродажа',
                    link: '/test',
                  },

                  {
                    label: 'Новинки',
                    link: '/test',
                  },
                  {
                    label: 'Новгодняя коллекция',
                    link: '/test',
                  },
                ],
                other: [
                  {
                    label: 'Брюки',
                    link: '/test',
                  },
                  {
                    label: 'Водолазки',
                    link: '/test',
                  },
                  {
                    label: 'Джемперы',
                    link: '/test',
                  },
                  {
                    label: 'Шарфы',
                    link: '/test',
                  },
                  {
                    label: 'Шорты',
                    link: '/test',
                  },
                  {
                    label: 'Пижамы',
                    link: '/test',
                  },
                  {
                    label: 'Перчатки и варежки',
                    link: '/test',
                  },
                ],
              },
            },
          ],
        },
        {
          title: 'Распродажа',
          link: '/test',
        },
      ],
    }
  },
  methods: {
    openMenu() {
      this.menuVisible = !this.menuVisible
      this.$nuxt.$emit('showFirst')
    },
    openPopupSearch() {
      this.$modal.show(
        PopupSearch,
        {},
        {
          width: '640',
          scrollable: true,
          shiftY: 0,
          overlayTransition: 'popup',
        }
      )
    },
    closeCart() {
      if (this.showCart) {
        this.showCart = false
      }
    },
  },
  watch: {
    $route(to, from) {
      this.closeCart()
    },
  },
  mounted() {
    this.$nuxt.$on('closeMenu', this.openMenu)
  },
}
</script>

<style src='./header.scss' lang="scss">
</style>