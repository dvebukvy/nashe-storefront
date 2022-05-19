<template lang="pug">
.nav-item
  .nav-item__header(
    :class='{ red: data.title === "Распродажа", active: hoverActive }'
  )
    nuxt-link.nav-item__link.header(to='/') {{ data.title }}
  .nav-item__body(
    @mouseover='hoverActive = true',
    @mouseleave='hoverActive = false'
  ) 
    .container
      .nav-item__content(v-if='data.list')
        .nav-item__main
          nuxt-link.nav-item__link.bold(
            :to='item.link',
            v-for='item in data.list.main',
            :key='item.id'
          ) {{ item.label }}

        .nav-item__other(v-for='array in othersArray', :key='array.id')
          nuxt-link.nav-item__link(
            :to='item.link',
            v-for='item in array',
            :key='item.id'
          ) {{ item.label }}
      .nav-item__container(v-if='data.categories')
        .nav-item__categories
          nuxt-link.nav-item__category(
            :to='category.link',
            v-for='(category, index) in data.categories',
            :key='index',
            @mouseover.native='setIndex(index)',
            :class='{ active: activeIndex === index }'
          )
            .nav-item__link {{ category.title }}
            svg-icon.nav-item__icon(name='chevron-right-20')
        .nav-item__content-categories(
          v-for='(category, index) in data.categories',
          :key='index',
          v-show='activeIndex === index'
        )
          .nav-item__main
            nuxt-link.nav-item__link.bold(
              :to='item.link',
              v-for='item in category.list.main',
              :key='item.id'
            ) {{ item.label }}

          .nav-item__other(
            v-for='array in categoriesArray[activeIndex]',
            :key='array.id'
          )
            nuxt-link.nav-item__link(
              :to='item.link',
              v-for='item in array',
              :key='item.id'
            ) {{ item.label }}
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      activeIndex: 0,
      hoverActive: false,
    }
  },
  computed: {
    othersArray() {
      let array = []
      let length = this.data.list.other.length
      let del = Math.round(length / 8)
      for (let i = 0; i < del; i++) {
        array[i] = this.data.list.other.slice(i * 8, i * 8 + 8)
      }
      return array
    },
    categoriesArray() {
      let array = []
      let catArr = this.data.categories
      catArr.forEach((element) => {
        let length = element.list.other.length
        let del = Math.round(length / 8)
        let arr = []
        for (let i = 0; i < del; i++) {
          arr[i] = element.list.other.slice(i * 8, i * 8 + 8)
        }
        array.push(arr)
      })
      return array
    },
  },
  methods: {
    setIndex(index) {
      this.activeIndex = index
    },
  },
}
</script>



<style src='./nav-item.scss' lang="scss">
</style>