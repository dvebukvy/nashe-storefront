<template lang='pug'>
.paginate
  paginate(
    class='pagination__flex'
    v-model='page',
    :page-range='pageRange',
    :margin-pages='1'
    :page-count='pageCount',
    :click-handler='togglePage',
    :prev-text='"Назад"',
    :next-text='"Дальше"',
    break-view-class='is-break'
    container-class='pagination',
    page-class='pagination__item',
    page-link-class='pagination__link',
    prev-class='pagination__item button prev',
    next-class='pagination__item button'
  )
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      page: +this.$route.query.page || 1,
      pageCount: 11,
    }
  },
  computed: {
    pageRange() {
      if (this.pageCount > 10) {
        return 3
      } else {
        return 6
      }
    }
  },
  mounted() {
    // let pageSize = +this.$route.query['per-page'] || this.data.defaultPageSize
    // this.pageCount = Math.ceil(this.data.totalCount / pageSize)
  },
  watch: {
    $route(to, from) {
      this.page = +to.query.page || 1
    },
  },
  methods: {
    togglePage(page) {
      this.$router.push({
        query: {
          ...this.$route.query,
          page,
        },
      })
    },
  },
}
</script>

<style lang='scss' src='./pagination.scss'></style>