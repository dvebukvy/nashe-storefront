<template lang="pug">
  .filtered-items
    .filtered-items__item
      span.filtered-items__label Разноцветный
      svg-icon.filtered-items__icon(name='close-16')
    .filtered-items__item
      span.filtered-items__label 42
      svg-icon.filtered-items__icon(name='close-16')
    .filtered-items__item
      span.filtered-items__label Весна-лето 2021
      svg-icon.filtered-items__icon(name='close-16')
    .filtered-items__item
      span.filtered-items__label 44
      svg-icon.filtered-items__icon(name='close-16')
    button.filtered-items__item
      span.filtered-items__label.primary Очистить всё
</template>


<style lang="scss" src='./filtered-items.scss'>
  
</style>