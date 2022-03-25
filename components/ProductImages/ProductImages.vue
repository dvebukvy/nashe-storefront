<template lang='pug'>
.product-images  
  img.product-image(:src='item' v-for="item in data" :key="item.id")
  
</template>



<script>
export default {
  props: ['data'],
}
</script>

<style lang='scss' src='./product-images.scss'></style>