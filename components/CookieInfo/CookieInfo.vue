<template lang="pug">
.cookie-info(:class='{ visible: visible }')
  span.text.label-3-m Мы используем cookie,<br> чтобы сайт работал быстрее
  span(@click='visible = false')
    Button.btn(label='Хорошо')
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.visible = true
    }, 1000)
  },
}
</script>

<style src='./cookie-info.scss' lang="scss">
</style>