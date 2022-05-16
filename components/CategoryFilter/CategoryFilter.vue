<template lang="pug">
form.category-filter
  Accordion.padding(title='Категория', :opened='true')
    .category-filter__list
      .category-filter__item(v-for='item in data.categories', :key='item.id') {{ item.label }}
  Accordion.padding(title='Цена', :opened='true')
    Range
  Accordion.padding(title='Цвет', :opened='true')
    ColorRadios(:data='data.colors')
  Accordion.padding(title='Размер одежды', :opened='true')
    ValueRadios(:data='data.sizes')
  Accordion.padding(title='Размер перчаток', :opened='true')
    ValueRadios(:data='data.glowSizes')
  Accordion.padding(title='Размер головных уборов', :opened='true')
    ValueRadios(:data='data.hatSizes')
  Accordion.padding(title='Коллекция', :opened='true')
    ValueCheckboxes(:data='data.collections')
  .category-filter__toggle
    .category-filter__title Товары со скидкой
    Toggle
</template>

<script>
export default {
  props: ['data'],
}
</script>

<style lang="scss" src='./category-filter.scss'>
</style>