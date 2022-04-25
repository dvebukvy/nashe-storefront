<template lang="pug">
.header-order
  .header-order__descktop
    .header-order__background
      .container
        .header-order__top
          .header-order__links
            nuxt-link(to='/')
              svg-icon.header-order__logo(name='logotype')
            nuxt-link.header-order__sublink(to='/') Доставка и оплата
            nuxt-link.header-order__sublink(to='/') Обмен и возврат
          Contact.small
    .header-order__line      
  .header-order__mobile
    .header-order__mobile-menu(:class='{active: menuVisible}')
      MobileMenu(:data='navMenu' :class='{active: menuVisible}')
    .header-order__block
      .header-order__action-button(@click='openMenu')
        svg-icon.header-order__action-icon(name='list-24')      
    .header-order__block
      nuxt-link(to='/')
        svg-icon.header-order__logo(name='logotype')
    .header-order__block
      a.header-order__action-button(href='tel: +7 800 500–61–13')
        svg-icon.header-order__action-icon(name='phone')      
</template>

<script>
export default {
  data() {
    return {
      menuVisible: false,
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
    }
  },
  mounted() {
    this.$nuxt.$on('closeMenu', this.openMenu)
  },
}
</script>

<style src='./header-order.scss' lang="scss">
</style>