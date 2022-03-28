<template lang='pug'>
.breadcrumbs  
  ul.breadcrumbs__list
    li.breadcrumbs__item
      nuxt-link.breadcrumbs__link(:to='"/"') Главная / 
    li.breadcrumbs__item(v-for='(item, index) in data', :key='index')
      svg-icon.breadcrumbs__icon(name='chevron-left-16')
      nuxt-link.breadcrumbs__link(v-if='item.url', :to='item.url') {{ item.title }}
        label.breadcrumbs__link.dash  /
      span.breadcrumbs__link.unactive(v-else) {{ item.title }}
  .breadcrumbs__subtext(v-if="code")
    .breadcrumbs__text Артикул:
    .breadcrumbs__text {{code}}
</template>



<script>
export default {
  props: ['data', 'code'],
}
</script>

<style lang='scss' src='./breadcrumbs.scss'></style>