<template lang="pug">
  nuxt-link.button.link(:to='link' v-if="link" ) 
    span.button__span(v-if="label") {{label}}
  button.button(v-else :class='{"icon-only": !label}' :disabled='disabled')    
    span.button__span(v-if="label") {{label}}
    svg-icon.button__icon(v-if="icon" :name='icon')
    span.button__hotkey(v-if="hotkey") {{hotkey}}
</template>

<script>
export default {
  props: ['label', 'icon', 'hotkey', 'disabled', 'link']
}
</script>

<style lang="scss" src='./button.scss'>
  
</style>