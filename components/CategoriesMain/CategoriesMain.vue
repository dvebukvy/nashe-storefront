<template lang="pug">
  .categories-main
    nuxt-link.categories-main__card(to='/category/slug')
      .categories-main__cover
        img.categories-main__image(src='/img/catalog-card-1.jpg')
      p.categories-main__text Одежда для женщин
    nuxt-link.categories-main__card(to='/category/slug')
      .categories-main__cover
        img.categories-main__image(src='/img/catalog-card-2.jpg')
      p.categories-main__text Одежда для мужчин
    nuxt-link.categories-main__card(to='/category/slug')
      .categories-main__cover
        img.categories-main__image(src='/img/catalog-card-3.jpg')
      p.categories-main__text Одежда для детей
    nuxt-link.categories-main__card(to='/category/slug')
      .categories-main__cover
        img.categories-main__image(src='/img/catalog-card-4.jpg')
      p.categories-main__text Носки и колготки
    nuxt-link.categories-main__card(to='/category/slug')
      .categories-main__cover
        img.categories-main__image(src='/img/catalog-card-5.jpg')
      p.categories-main__text Подарки
    nuxt-link.categories-main__card(to='/category/slug')
      .categories-main__cover
        img.categories-main__image(src='/img/catalog-card-6.jpg')
      p.categories-main__text Распродажа
</template>

<style src='./categories-main.scss' lang="scss">
</style>