<template lang="pug">
.switcher
  input(type='radio', name='choice', value='list', v-model='active')
  label(
    for='choice1',
    list,
    :class='{ active: active === "list" }',
    @click='change("list")'
  ) Списком

  input(type='radio', name='choice', value='map', v-model='active')
  label(
    for='choice2',
    map,
    :class='{ active: active === "map" }',
    @click='change("map")'
  ) На карте
</template>

<script>
export default {
  props: ['switch'],
  data() {
    return {
      active: 'list',
    }
  },
  methods: {
    change(flag) {
      this.active = flag
      this.switch(flag)
    },
  },
}
</script>

<style lang="scss" src='./switcher.scss'>
</style>