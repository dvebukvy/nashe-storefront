<template lang='pug'>
section.section-main  
  .section-main__header(v-if='title')
    h2.section-main__title {{ title }}   
    nuxt-link(v-if="button" :to='button.link')
      Button(:label='button.label' class='outline small')
  .section-main__body
    slot  
</template>

<script>
export default {
  props: ['title', 'button'],
}

</script>

<style lang='scss' src='./section-main.scss'></style>