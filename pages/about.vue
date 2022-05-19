<template lang="pug">
.page__content
  .container__content-page
    Breadcrumbs(:data='breadcrumbs')
    .heading-1.mb-12 Бренд НАШЕ был придуман и запущен в 2017 году
    .body-1-r Если у вас возникли вопросы <b>о нашей продукции</b> или <i>возможном сотрудничестве</i>, напишите нам на электронную почту <a href='mailto:sale@nashe.online'>sale@nashe.online</a> или свяжитесь по номеру <a href='tel:+74812299600'>+7 4812 29-96-00</a>
    ul.list-icons.body-1-r
      li нет минимальной суммы заказа;
      li 15 минут на примерку;
      li за час перед доставкой курьер позвонит;
      li предоплаченный заказ можно получить при предъявлении документа, удостоверяющего личность того, на кого он оформлен;
      li возможен частичный отказ от заказа при 100% предопате.
    .body-1-r Если у вас возникли вопросы <b>о нашей продукции</b> или <i>возможном сотрудничестве</i>, напишите нам на электронную почту <a href='mailto:sale@nashe.online'>sale@nashe.online</a> или свяжитесь по номеру <a href='tel:+74812299600'>+7 4812 29-96-00</a>
    ol.list-numbers.body-1-r
      li нет минимальной суммы заказа;
      li 15 минут на примерку;
      li за час перед доставкой курьер позвонит;
      li предоплаченный заказ можно получить при предъявлении документа, удостоверяющего личность того, на кого он оформлен;
      li возможен частичный отказ от заказа при 100% предопате.
    .callout.body-1-r Оплата курьеру возможна только наличными
    .heading-2.mt-32.mb-8 Бренд НАШЕ был придуман и запущен в 2017 году
    .body-1-r Если у вас возникли вопросы <b>о нашей продукции</b> или <i>возможном сотрудничестве</i>, напишите нам на электронную почту <a href='mailto:sale@nashe.online'>sale@nashe.online</a> или свяжитесь по номеру <a href='tel:+74812299600'>+7 4812 29-96-00</a>
    .heading-3.mt-24.mb-8 Бренд НАШЕ был придуман и запущен в 2017 году
    .body-1-r Если у вас возникли вопросы <b>о нашей продукции</b> или <i>возможном сотрудничестве</i>, напишите нам на электронную почту <a href='mailto:sale@nashe.online'>sale@nashe.online</a> или свяжитесь по номеру <a href='tel:+74812299600'>+7 4812 29-96-00</a>
    figure.mt-16.mb-24
      img(src='/img/content-page-1.jpg')
      figcaption.body-3-r.text-color-gray-50.mt-8 Caption
    .heading-1.mb-12 Бренд НАШЕ был придуман и запущен в 2017 году
    figure.mt-16
      img(src='/img/content-page-2.jpg')
      figcaption.body-3-r.text-color-gray-50.mt-8 Caption
    .heading-2.mt-32.mb-24 Бренд НАШЕ был придуман и запущен в 2017 году
    table
      thead
        tr
          th RU
          th INT
          th Рост
          th Обхват груди
          th Обхват талии
          th Обхват бедер
      tbody
        tr 
          td 42
          td XS
          td 170
          td 84
          td 64
          td 92
        tr
          td 44
          td S
          td 170
          td 88
          td 68
          td 96
        tr
          td 46
          td M
          td 170
          td 92
          td 72
          td 100
        tr
          td 48
          td L
          td 96
          td 96
          td 76
          td 104
        tr
          td 50
          td XL
          td 170
          td 100
          td 80
          td 108
        tr
          td 52
          td XXL
          td 170
          td 104
          td 84
          td 112
        tr
          td 54
          td 3XL
          td 170
          td 108
          td 88
          td 116
        tr
          td 56
          td 4XL
          td 170
          td 112
          td 92
          td 120
        tr
          td 58
          td 5XL
          td 170
          td 116
          td 96
          td 124
        tr
          td 60
          td 6XL
          td 170
          td 120
          td 100
          td 128
    .heading-3.mt-24.mb-24 Бренд НАШЕ был придуман и запущен в 2017 году
    .accordion__with-radius
      Accordion.with-bg(title='Стоимость и сроки доставки')
        .accordion__accordion-content
          .body-2-r Стоимость и сроки зависят от способа доставки и вашего региона. <a href='#'>Подробнее по ссылке</a>
      Accordion.with-bg(title='Как получить заказ?')
        .accordion__accordion-content
          .body-2-r Стоимость и сроки зависят от способа доставки и вашего региона. <a href='#'>Подробнее по ссылке</a>
      Accordion.with-bg(title='Как будет упакован заказ?')
        .accordion__accordion-content
          .body-2-r Стоимость и сроки зависят от способа доставки и вашего региона. <a href='#'>Подробнее по ссылке</a>
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