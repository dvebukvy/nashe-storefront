<template lang="pug">
.page__content
  .container
    Breadcrumbs(:data='breadcrumbs')
    Headline(title='Контакты')
    .contacts-page
      .contacts-page__list
        p.contacts-page__text.bold ООО «Наше-Ритейл»
        p.contacts-page__text Офис: г. Смоленск, ул. Соболева д. 25
        .contacts-page__text 
          | Телефон:
          a.contacts-page__text.primary(href='tel: +7-800-500–61–13') +7 800 500–61–13
        .contacts-page__text 
          | Электронная почта:
          a.contacts-page__text.primary(href='mailto: sale@nashe.online') sale@nashe.online
      .contacts-page__map
        Map
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
          title: 'Контакты',
        },
      ]

      return breadcrumbs
    },
  },
}
</script>

<style lang="scss">
.contacts-page {
  display: grid;
  grid-template-columns: 4fr 8fr;
  gap: 28px;

  @media (max-width: $m) {
    grid-template-columns: 5fr 7fr;
  }
  @media (max-width: $s) {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__text {
    color: $brand-secondary;
    @include fontSize(14, 16);
    font-weight: 400;

    &.bold {
      font-weight: 500;
    }

    &.primary {
      color: $brand-primary;
    }
  }

  &__map {
    width: 100%;
    aspect-ratio: 2 / 1;

    @media (max-width: $xs) {
      aspect-ratio: 1 / 1;
    }
  }
}
</style>