<template lang="pug">
.tabs
  .tabs__item(
    v-if='data',
    v-for='item in data',
    :key='item.name',
    :class='{ active: active == item.name }',
    @click='active = item.name'
  ) {{ item.name }}
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      active: 'Все',
    }
  },
}
</script>

<style lang="scss" src='./tabs.scss'>
</style>