<template lang="pug">
.popup
  .popup__search
    InputSearch(
      v-model='searchText',
      :data='searchText',
      @keyup.native.enter='result'
    )
  .popup__results
    .body(v-if='!searchText')
      .body__title Актуальное
      .body__items
        .item(
          v-for='item in actuals',
          :key='item',
          @click='actualsClick(item)'
        )
          svg-icon.header__action-icon(name='search-24')
          span {{ item }}
    .body(v-else-if='searchResult && searchText')
      .body__items
        span.result__error По вашему запросу ничего не найдено.<br>Попробуйте изменить запрос или воспользуйтесь каталогом товаров
    .body(v-else, style='padding-bottom: 0')
      .body__title Найденные товары
      vue-custom-scrollbar.body__items.body__items-scroll
        nuxt-link.item__found(
          v-for='item in 6',
          :key='item',
          to='/product/slug'
        )
          img.image(src='/img/product-card-1.jpg')
          .content
            span.price.body-1-m 999 руб.
            span.desc.body-2-r Джемпер однотонный с круглой горловиной
    .footer(v-if='searchText && !searchResult')
      Button(label='Смотреть все результаты', @click.native='result')
</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'
export default {
  components: {
    vueCustomScrollbar,
  },
  data() {
    return {
      actuals: [
        'Зимние носки',
        'Джемпер чёрный',
        'Джемпер',
        'Носки с рисунком',
        'Детские носки',
        'Домашняя футболка',
      ],
      searchText: '1',
      searchResult: '',
    }
  },
  methods: {
    actualsClick(item) {
      if (item) {
        this.searchText = item
      }
    },
    result() {
      this.$router.push({
        path: '/search',
        query: { q: this.q },
      })
      this.$emit('close')
    },
  },
}
</script>

<style src='./popup.scss' lang="scss">
</style>