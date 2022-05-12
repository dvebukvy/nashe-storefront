<template lang="pug">
.page__content
  .container
    Breadcrumbs(:data='breadcrumbs')
    Headline(title='Личный кабинет')
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
          title: 'Личный кабинет',
        },
      ]

      return breadcrumbs
    },
  },
}
</script>