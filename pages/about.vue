<template lang="pug">
.page__content
  .container__content-page
    Breadcrumbs.breadcrumbs(:data='breadcrumbs')
    h1 Бренд НАШЕ был придуман и запущен в 2017 году
    p Если у вас возникли вопросы <b>о нашей продукции</b> или <i>возможном сотрудничестве</i>, напишите нам на электронную почту <a href='mailto:sale@nashe.online'>sale@nashe.online</a> или свяжитесь по номеру <a href='tel:+74812299600'>+7 4812 29-96-00</a>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    breadcrumbs() {
      let breadcrumbs = [
        {
          title: 'О компании',
        },
      ]

      return breadcrumbs
    },
  },
}
</script>