<template lang='pug'>
.product-page
  ProductImages(:data='data.images')
  .product-page__mobile-cart
    .product-page__button-add
      Counter(
        v-model='form.quantity',
        :data='form.quantity',
        v-if='form.quantity > 0'
      )
      Button(label='Добавить в корзину', @click.native='addToCart', v-else)
    Button.outline(
      icon='favorite-20',
      @click.native='addFavoite',
      v-if='!form.inFavorites'
    )
    Button.outline(
      icon='favorite-fill-20',
      @click.native='removeFavoite',
      v-if='form.inFavorites'
    )
  .product-page__data
    .product-page__badges(v-if='data.badges || data.sale')
      Badge.primary-color(
        :label='item',
        v-for='item in data.badges',
        :key='item.id',
        v-if='data.badges'
      )
      Badge.status-red(:label='data.sale', :sale='true', v-if='data.sale')
    p.product-page__name {{ data.name }}
    .product-page__prices
      p.product-page__price(:class='{ new: data.priceOld }') {{ data.price }} руб.
      p.product-page__price.old(v-if='data.priceOld') {{ data.priceOld }} руб.
    .product-page__colors(v-if='data.colors')
      p.product-page__subtitle Цвет: {{ form.color.name }}
      ColorRadios(v-model='form.color', :data='data.colors')
    .product-page__colors(v-if='data.sizes')
      p.product-page__subtitle Размер: {{ form.size.name }}
      ValueRadios(v-model='form.size', :data='data.sizes')
    .product-page__size-table(@click='openSizeModal') Таблица размеров
    .product-page__cart-section
      .product-page__button-add 
        Counter(
          v-model='form.quantity',
          :data='form.quantity',
          v-if='form.quantity > 0'
        )
        Button(label='Добавить в корзину', @click.native='addToCart', v-else)
      Button.outline(
        icon='favorite-20',
        @click.native='addFavoite',
        v-if='!form.inFavorites'
      )
      Button.outline(
        icon='favorite-fill-20',
        @click.native='removeFavoite',
        v-if='form.inFavorites'
      )
    .product-page__cart-section
      .product-page__button-add
        Button(label='Нет в наличии', :disabled='true')
      Button.outline(icon='favorite-20') 
    .product-page__calculator
      SaleCalculator(:price='data.price')
    .product-page__wholesale
      p.product-page__text Этот товар можно купить оптом
      Button.outline.small(label='Купить', width='80px')
    .product-page__info
      Accordion(title='Описание')
        .product-page__accordion-content
          p.product-page__text Джемпер из нежного к коже трикотажа. Широкий круглый вырез и узкие длинные рукава делают эту модель основой уютных согревающих образов с вязаными свитерами и джемперами, жакетами и кардиганами.
          ul.product-page__list
            li.product-page__list-item Деликатная окантовка горловины и подгибов позволяет использовать лонгслив как невидимый первый слой.
            li.product-page__list-item Мягкий материал на основе хлопка с добавлением эластана.
            li.product-page__list-item Трикотаж лёгок в уходе: быстро возвращает форму и не вытягивается со временем.
            li.product-page__list-item Рекомендуем подбирать белье в тон, так как материал может немного просвечивать.
      Accordion(title='Состав и уход')
        .product-page__accordion-content
          p.product-page__text 92% Хлопок, 8% Эластан.
          ul.product-page__list
            li.product-page__list-item Стирать при температуре 40°C.
            li.product-page__list-item Гладить при температуре утюга до 110°C.
            li.product-page__list-item Не отбеливать.
      Accordion(title='Обмеры изделия')
        .product-page__accordion-content
          .product-page__table
            table
              thead
                tr
                  th INT
                  th Длина изделия
                  th Обхват груди
                  th Длина рукава
              tbody
                tr 
                  td XS
                  td 60
                  td 80
                  td 54
                tr
                  td S
                  td 60
                  td 84
                  td 54
                tr
                  td M
                  td 60
                  td 84
                  td 54
                tr
                  td L
                  td 60
                  td 84
                  td 54
                tr
                  td XL
                  td 63
                  td 96
                  td 56
          p.product-page__text.gray Все размеры указаны в сантиметрах
      Accordion(title='Доставка и возврат')
        .product-page__accordion-content
          .product-page__section
            p.product-page__subtitle Доставка
            .product-page__box
              svg-icon.product-page__icon(name='truck')
              p.product-page__text Курьером по всей России от 350 ₽
            .product-page__box
              svg-icon.product-page__icon(name='package')
              p.product-page__text Почтой России от 240 ₽
            .product-page__box
              svg-icon.product-page__icon(name='shirt')
              p.product-page__text В магазин или пункт выдачи от 200 ₽
            nuxt-link.product-page__link(to='/') Условия бесплатной доставки
      Accordion(title='Наличие в магазинах')
        .product-page__accordion-content
          .product-page__box
            svg-icon.product-page__icon(name='refresh')
            p.product-page__text Бесплатный и удобный возврат товаров
          nuxt-link.product-page__link(to='/') Условия возврата
</template>



<script>
import ModalSizes from '@/components/Modal/ModalSizes'
export default {
  props: ['data'],
  data() {
    return {
      form: {
        color: { hex: '4', name: 'Черный' },
        size: { name: '42' },
        quantity: 0,
        inFavorites: false,
      },
    }
  },
  methods: {
    addFavoite() {
      this.form.inFavorites = true
    },
    removeFavoite() {
      this.form.inFavorites = false
    },
    addToCart() {
      this.form.quantity = 1
      this.$store.commit('cart/add', this.form.quantity)
    },
    openSizeModal() {
      this.$modal.show(
        ModalSizes,
        {},
        { width: '480', scrollable: true, adaptive: true, transition: 'bottom' }
      )
    },
  },
}
</script>

<style lang='scss' src='./product-page.scss'></style>