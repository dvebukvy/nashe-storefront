<template lang="pug">
.page__content
  .container__content-page
    .error
      .error__body(v-if='error.statusCode === 404')
        h1.heading-1.mb-12.mt-0 Страница не найдена
        p.body-1-r Страница, которую вы запросили, никогда не существовала или была удалена.<br>Вы можете перейти на главную страницу, воспользоваться каталогом или поиском
      .error__body(v-if='error.statusCode === 403')
        h1.heading-1.mb-12.mt-0 Доступ запрещён
        p.body-1-r У вас нет доступа к запрашиваемой странице.<br>Вы можете перейти на главную страницу, воспользоваться каталогом товаров или поиском
      .error__body(v-if='error.statusCode === 500')
        h1.heading-1.mb-12.mt-0 Ведутся технические работы
        p.body-1-r Прямо сейчас мы добавляем на сайт что-то очень полезное.<br>Он заработает в ближайшее время.<br>Если у вас есть вопросы — можете позвонить нам по телефону
      Button.outline-error.fit-content-width.margin-auto.mt-40(
        label='На главную страницу',
        link='/',
        v-if='error.statusCode !== 500'
      )
      Button.link.outline-error.fit-content-width.margin-auto.mt-40(
        label='+7 800 500–61–13',
        tel='+78005006113',
        v-if='error.statusCode === 500'
      )
</template>

<script>
export default {
  props: ['error'],
  layout: 'error', // you can set a custom layout for the error page
}
</script>