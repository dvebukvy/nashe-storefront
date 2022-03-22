<template lang="pug">
.header
  .header__descktop
    .header__background
      .container
        .header__top
          .header__links
            nuxt-link.header__sublink(to='/') Доставка и оплата
            nuxt-link.header__sublink(to='/') Обмен и возврат
            nuxt-link.header__sublink(to='/') О компании
            nuxt-link.header__sublink(to='/') Магазины
            nuxt-link.header__sublink(to='/') Контакты
            nuxt-link.header__sublink(to='/') Блог
            a.header__sublink-badge(href='/', target='_blanc') Оптовый сайт
          .header__info
            a.header__sublink(href='tel: +7 800 500–61–13') +7 800 500–61–13
            .header__separator
            .header__sublink.grey 9:00–20:00
    .header__line
      .container
        .header__bottom
          .header__links
            svg-icon.header__logo(name='logotype')
            .header__nav-list
              NavItem(v-for='item in navMenu', :key='item.id', :data='item')
          .header__actions
            .header__action-button
              svg-icon.header__action-icon(name='search-24')
            .header__action-button
              svg-icon.header__action-icon(name='user-24')
            .header__action-button
              svg-icon.header__action-icon(name='favorite-24')
            .header__action-button
              svg-icon.header__action-icon(name='cart-24')
  .header__mobile
</template>

<script>
export default {
  data() {
    return {
      navMenu: [
        {
          title: 'Женщинам',
          link: '/',
          list: {
            main: [
              {
                label: 'Распродажа',
                link: '/',
              },
              {
                label: 'Новинки',
                link: '/',
              },
              {
                label: 'Базовая одежда',
                link: '/',
              },
              {
                label: 'Вязаные трикотажные вещи',
                link: '/',
              },
              {
                label: 'Одежда для сна и отдыха',
                link: '/',
              },
              {
                label: 'Размеры 54–60',
                link: '/',
              },
              {
                label: 'Новогодняя коллекция',
                link: '/',
              },
            ],
            other: [
              {
                label: 'Джемперы',
                link: '/',
              },
              {
                label: 'Водолазки',
                link: '/',
              },
              {
                label: 'Рубашки, блузки',
                link: '/',
              },
              {
                label: 'Платья',
                link: '/',
              },
              {
                label: 'Футболки',
                link: '/',
              },
              {
                label: 'Брюки',
                link: '/',
              },
              {
                label: 'Легинсы и лосины',
                link: '/',
              },
              {
                label: 'Шорты',
                link: '/',
              },
              {
                label: 'Юбки',
                link: '/',
              },
              {
                label: 'Сорочки',
                link: '/',
              },
              {
                label: 'Туники',
                link: '/',
              },
              {
                label: 'Халаты',
                link: '/',
              },
              {
                label: 'Пижамы и комплекты',
                link: '/',
              },
              {
                label: 'Нижнее бельё',
                link: '/',
              },
              {
                label: 'Головные уборы',
                link: '/',
              },
              {
                label: 'Перчатки и варежки',
                link: '/',
              },
            ],
          },
        },
        {
          title: 'Мужчинам',
          link: '/',
          list: {
            main: [
              {
                label: 'Распродажа',
                link: '/',
              },
              {
                label: 'Новинки',
                link: '/',
              },
              {
                label: 'Базовая одежда',
                link: '/',
              },
              {
                label: 'Размеры 54–60',
                link: '/',
              },
              {
                label: 'Новогодняя коллекция',
                link: '/',
              },
            ],
            other: [
              {
                label: 'Джемперы',
                link: '/',
              },
              {
                label: 'Водолазки',
                link: '/',
              },
              {
                label: 'Футболки',
                link: '/',
              },
              {
                label: 'Брюки',
                link: '/',
              },
              {
                label: 'Шорты',
                link: '/',
              },
              {
                label: 'Нижнее бельё',
                link: '/',
              },
              {
                label: 'Перчатки и варежки',
                link: '/',
              },
            ],
          },
        },
        {
          title: 'Детям',
          link: '/',
          categories: [
            {
              title: 'Девочкам',
              link: '/',
              list: {
                main: [
                  {
                    label: 'Распродажа',
                    link: '/',
                  },
                  {
                    label: 'Новинки',
                    link: '/',
                  },
                  {
                    label: 'Базовая одежда',
                    link: '/',
                  },
                  {
                    label: 'Новогодняя коллекция',
                    link: '/',
                  },
                ],
                other: [
                  {
                    label: 'Брюки',
                    link: '/',
                  },
                  {
                    label: 'Водолазки',
                    link: '/',
                  },
                  {
                    label: 'Джемперы',
                    link: '/',
                  },
                ],
              },
            },
            {
              title: 'Мальчикам',
              link: '/',
              list: {
                main: [
                  {
                    label: 'Распродажа',
                    link: '/',
                  },

                  {
                    label: 'Новинки',
                    link: '/',
                  },
                  {
                    label: 'Новгодняя коллекция',
                    link: '/',
                  },
                ],
                other: [
                  {
                    label: 'Брюки',
                    link: '/',
                  },
                  {
                    label: 'Водолазки',
                    link: '/',
                  },
                  {
                    label: 'Джемперы',
                    link: '/',
                  },
                  {
                    label: 'Шарфы',
                    link: '/',
                  },
                  {
                    label: 'Шорты',
                    link: '/',
                  },
                  {
                    label: 'Пижамы',
                    link: '/',
                  },
                  {
                    label: 'Перчатки и варежки',
                    link: '/',
                  },
                ],
              },
            },
            {
              title: 'Новорождённым',
              link: '/',
              list: {
                main: [
                  {
                    label: 'Распродажа',
                    link: '/',
                  },

                  {
                    label: 'Новинки',
                    link: '/',
                  },
                  {
                    label: 'Новгодняя коллекция',
                    link: '/',
                  },
                ],
                other: [
                  {
                    label: 'Брюки',
                    link: '/',
                  },
                  {
                    label: 'Водолазки',
                    link: '/',
                  },
                  {
                    label: 'Джемперы',
                    link: '/',
                  },
                  {
                    label: 'Шарфы',
                    link: '/',
                  },
                  {
                    label: 'Шорты',
                    link: '/',
                  },
                  {
                    label: 'Пижамы',
                    link: '/',
                  },
                  {
                    label: 'Перчатки и варежки',
                    link: '/',
                  },
                ],
              },
            },
          ],
        },
        {
          title: 'Носки и колготки',
          link: '/',
          categories: [
            {
              title: 'Женщинам',
              link: '/',
              list: {
                main: [
                  {
                    label: 'Распродажа',
                    link: '/',
                  },
                  {
                    label: 'Новинки',
                    link: '/',
                  },
                  {
                    label: 'Базовая одежда',
                    link: '/',
                  },
                  {
                    label: 'Новогодняя коллекция',
                    link: '/',
                  },
                ],
                other: [
                  {
                    label: 'Брюки',
                    link: '/',
                  },
                  {
                    label: 'Водолазки',
                    link: '/',
                  },
                  {
                    label: 'Джемперы',
                    link: '/',
                  },
                ],
              },
            },
            {
              title: 'Мужчинам',
              link: '/',
              list: {
                main: [
                  {
                    label: 'Распродажа',
                    link: '/',
                  },

                  {
                    label: 'Новинки',
                    link: '/',
                  },
                  {
                    label: 'Новгодняя коллекция',
                    link: '/',
                  },
                ],
                other: [
                  {
                    label: 'Брюки',
                    link: '/',
                  },
                  {
                    label: 'Водолазки',
                    link: '/',
                  },
                  {
                    label: 'Джемперы',
                    link: '/',
                  },
                  {
                    label: 'Шарфы',
                    link: '/',
                  },
                  {
                    label: 'Шорты',
                    link: '/',
                  },
                  {
                    label: 'Пижамы',
                    link: '/',
                  },
                  {
                    label: 'Перчатки и варежки',
                    link: '/',
                  },
                ],
              },
            },
            {
              title: 'Детям',
              link: '/',
              list: {
                main: [
                  {
                    label: 'Распродажа',
                    link: '/',
                  },

                  {
                    label: 'Новинки',
                    link: '/',
                  },
                  {
                    label: 'Новгодняя коллекция',
                    link: '/',
                  },
                ],
                other: [
                  {
                    label: 'Брюки',
                    link: '/',
                  },
                  {
                    label: 'Водолазки',
                    link: '/',
                  },
                  {
                    label: 'Джемперы',
                    link: '/',
                  },
                  {
                    label: 'Шарфы',
                    link: '/',
                  },
                  {
                    label: 'Шорты',
                    link: '/',
                  },
                  {
                    label: 'Пижамы',
                    link: '/',
                  },
                  {
                    label: 'Перчатки и варежки',
                    link: '/',
                  },
                ],
              },
            },
          ],
        },
        {
          title: 'Подарки',
          link: '/',
          categories: [
            {
              title: 'Для неё',
              link: '/',
              list: {
                main: [
                  {
                    label: 'Распродажа',
                    link: '/',
                  },
                  {
                    label: 'Новинки',
                    link: '/',
                  },
                  {
                    label: 'Базовая одежда',
                    link: '/',
                  },
                  {
                    label: 'Новогодняя коллекция',
                    link: '/',
                  },
                ],
                other: [
                  {
                    label: 'Брюки',
                    link: '/',
                  },
                  {
                    label: 'Водолазки',
                    link: '/',
                  },
                  {
                    label: 'Джемперы',
                    link: '/',
                  },
                ],
              },
            },
            {
              title: 'Для него',
              link: '/',
              list: {
                main: [
                  {
                    label: 'Распродажа',
                    link: '/',
                  },

                  {
                    label: 'Новинки',
                    link: '/',
                  },
                  {
                    label: 'Новгодняя коллекция',
                    link: '/',
                  },
                ],
                other: [
                  {
                    label: 'Брюки',
                    link: '/',
                  },
                  {
                    label: 'Водолазки',
                    link: '/',
                  },
                  {
                    label: 'Джемперы',
                    link: '/',
                  },
                  {
                    label: 'Шарфы',
                    link: '/',
                  },
                  {
                    label: 'Шорты',
                    link: '/',
                  },
                  {
                    label: 'Пижамы',
                    link: '/',
                  },
                  {
                    label: 'Перчатки и варежки',
                    link: '/',
                  },
                ],
              },
            },
          ],
        },
        {
          title: 'Распродажа',
          link: '/',
        },
      ],
    }
  },
}
</script>

<style src='./header.scss' lang="scss">
</style>