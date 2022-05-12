<template lang="pug">
nuxt-link.button.link(:to='link', v-if='link') 
  span.button__span(v-if='label') {{ label }}
a.button.outline(v-else-if='tel', :href='"tel:" + tel') {{ label }}
button.button(
  v-else,
  :class='{ "icon-only": !label }',
  :disabled='disabled',
  :style='"width: " + width'
) 
  span.button__span(v-if='label') {{ label }}
  svg-icon.button__icon(v-if='icon', :name='icon')
  span.button__hotkey(v-if='hotkey') {{ hotkey }}
</template>

<script>
export default {
  props: ['label', 'icon', 'hotkey', 'disabled', 'link', 'width', 'tel'],
}
</script>

<style lang="scss" src='./button.scss'>
</style>