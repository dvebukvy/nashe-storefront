<template lang="pug">
.footer
  .footer__container.container
    .footer__main
      .footer__email-section
        p.footer__title Узнавайте о новинках первыми
        p.footer__text.padding Оформите подписку на рассылку, чтобы первыми узнавать обо всех новинках

        .footer__send-section
          Input(type='text', placeholder='dsadsad')
          Button.medium(icon='arrow-right-20')
        .footer__small-text Подписываясь на рассылку, вы соглашаетесь с условиями <a class='footer__small-text link' href='#'>Политики конфиденциальности</a>
      .footer__links-section
        .footer__list
          p.footer__title Каталог
          nuxt-link.footer__text(to='/') Женщинам
          nuxt-link.footer__text(to='/') Мужчинам
          nuxt-link.footer__text(to='/') Детям
          nuxt-link.footer__text(to='/') Носки и колготки
        .footer__list
          p.footer__title Компания
          nuxt-link.footer__text(to='/') О компании
          nuxt-link.footer__text(to='/') Магазины
          nuxt-link.footer__text(to='/') Контакты
          nuxt-link.footer__text(to='/') Партнёрам
        .footer__list
          p.footer__title Покупателям
          nuxt-link.footer__text(to='/') Доставка и оплата
          nuxt-link.footer__text(to='/') Обмен и возврат
          nuxt-link.footer__text(to='/') Таблицы размеров
          nuxt-link.footer__text(to='/') Система скидок
      .footer__links-mobile
        Accordion(title='Каталог')
          .footer__accordion-list
            nuxt-link.footer__subitem(to='/') Женщинам
            nuxt-link.footer__subitem(to='/') Мужчинам
            nuxt-link.footer__subitem(to='/') Детям
            nuxt-link.footer__subitem(to='/') Носки и колготки
        Accordion(title='Компания')
          .footer__accordion-list
            nuxt-link.footer__subitem(to='/') О компании
            nuxt-link.footer__subitem(to='/') Магазины
            nuxt-link.footer__subitem(to='/') Контакты
            nuxt-link.footer__subitem(to='/') Партнёрам
        Accordion(title='Покупателям')
          .footer__accordion-list
            nuxt-link.footer__subitem(to='/') О компании
            nuxt-link.footer__subitem(to='/') Магазины
            nuxt-link.footer__subitem(to='/') Контакты
            nuxt-link.footer__subitem(to='/') Партнёрам
        Accordion(title='Покупателям')
          .footer__accordion-list
            nuxt-link.footer__subitem(to='/') Доставка и оплата
            nuxt-link.footer__subitem(to='/') Обмен и возврат
            nuxt-link.footer__subitem(to='/') Таблицы размеров
            nuxt-link.footer__subitem(to='/') Система скидок
    .footer__contacts
      Contact
      Socials
    .footer__info
      .footer__row.alt
        .footer__text © 2018–2022. Интернет-магазин одежды «Наше»
        .footer__row
          .footer__separator.alt
          nuxt-link.footer__text.gray(to='/') Пользовательское соглашение
          .footer__separator
          nuxt-link.footer__text.gray(to='/') Политика конфиденциальности
      a.footer__two-letters(href='https://dvebukvy.ru/', target='_blanc')
        svg-icon(name='dvebukvy')
        .footer__text «Две буквы»
</template>



<style src='./footer.scss' lang="scss">
</style>