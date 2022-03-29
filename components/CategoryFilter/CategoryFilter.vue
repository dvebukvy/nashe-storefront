<template lang="pug">
  form.category-filter
    Accordion(title='Категория' class='padding')
      .category-filter__list
        .category-filter__item(v-for="item in data.categories" :key="item.id") {{item.label}}
    Accordion(title='Цена' class='padding')
      Range
    Accordion(title='Цвет' class='padding')
      ColorRadios(:data='data.colors')
    Accordion(title='Размер одежды' class='padding')
      ValueRadios(:data='data.sizes')
    Accordion(title='Размер перчаток' class='padding')
      ValueRadios(:data='data.glowSizes')
    Accordion(title='Размер головных уборов' class='padding')
      ValueRadios(:data='data.hatSizes')
    Accordion(title='Коллекция' class='padding')
      ValueCheckboxes(:data='data.collections')
    .category-filter__toggle
      .category-filter__title Товары со скидкой
      Toggle
</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang="scss" src='./category-filter.scss'>
  
</style>